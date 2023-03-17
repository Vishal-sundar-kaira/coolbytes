const express=require('express')
const Notes=require('../models/Notes')
const router=express.Router()
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
// Route 1:get all the notes
router.get('/fetchallnotes',async (req,res)=>{

    const notes=await Notes.find()
    res.json(notes)
})
//personal dashboard
router.get('/fetchyournotes',fetchuser,async (req,res)=>{

    const notes=await Notes.find({user:req.user.id})
    res.json(notes)
})
// Route 2:Add notes
router.post('/Addnotes',fetchuser,[
    body('name','name should be of minimum 3 character').isLength({min:3}),
    body('list','list must of of atleast 3 character').isLength({min:3})
],async (req,res)=>{
    try{
    const {name,list,location,number}=req.body;
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const notes=new Notes({
        name,list,location,number,user:req.user.id
    })
    //Here we have two ways to send our data first is create method which we used in auth and now this by creating new constructor and savenotes.
    const saveNotes=await notes.save()
    res.json(notes)
}catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error Ocuured");
}
})
//Route 3:updating notes and login required
router.put('/updatenotes/:id',fetchuser,async (req,res)=>{
    const {name,list,location,number}=req.body
    //now create an object
    try {
        const newNote={}
    if(name){newNote.name=name};
    if(list){newNote.list=list};
    if(location){newNote.location=location};
    if(number){newNote.number=number};//this is use to make changes in only that field where changes had been occured.
    //find the note to be updated
    let note=await Notes.findById(req.params.id)//check if notes exist or not
    if(!note)
    {
        return res.status(404).send("Notes not found");
    }
    //now check if some user is trying to check another person notes.
    if(note.user.toString()!=req.user.id){
        return res.status(401).send("Not allowed");
    }
    //now if all are ok use find and update function of database.
    note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json({note});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error Ocuured");
    }
    
    
})
// Route 4:delete notes
router.delete('/deletenotes/:id',fetchuser,async (req,res)=>{
    try {
        let note=await Notes.findById(req.params.id)//check if notes exist or not
    if(!note)
    {
        return res.status(404).send("Notes not found");
    }
    //now check if some user is trying to check another person notes.
    if(note.user.toString()!=req.user.id){
        return res.status(401).send("Not allowed");
    }
    //now if all are ok use find and update function of database.
    note=await Notes.findByIdAndDelete(req.params.id)
    res.json({"success":"note has been deleted",note:note});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error Ocuured");
    }
    
    
})

module.exports=router