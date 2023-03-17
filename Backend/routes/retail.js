const express=require('express')
const Retail=require('../models/Retail')
const router=express.Router()
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
// Route 1:get all the products list
router.get('/fetchallproduct',fetchuser,async (req,res)=>{

    const retail=await Retail.find({user:req.user.id})
    res.json(retail)
})
// Route 2:Add products
router.post('/Addproducts',fetchuser,[
    body('product','product should be of minimum 3 character').isLength({min:3}),
    body('date','date must of of atleast 3 character').isLength({min:3})
],async (req,res)=>{
    try{
    const {product,date,price}=req.body;
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    }catch(error){
        res.status(500).send("Internal server error Ocuured");
    }
    
    const retail=new Retail({
        product,date,price,user:req.user.id
    })
    //Here we have two ways to send our data first is create method which we used in auth and now this by creating new constructor and savenotes.
    const saveretail=await retail.save()
    res.json(retail)
}catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error Ocuured");
}
})
//Route 3:updating notes and login required
// router.put('/updatenotes/:id',fetchuser,async (req,res)=>{
//     const {product,date,price}=req.body
//     //now create an object
//     try {
//         const newretail={}
//     if(product){newretail.product=product};
//     if(date){newretail.date=date};
//     if(price){newretail.price=price};//this is use to make changes in only that field where changes had been occured.
//     //find the note to be updated
//     let retail=await Retail.findById(req.params.id)//check if notes exist or not
//     if(!retail)
//     {
//         return res.status(404).send("Notes not found");
//     }
//     //now check if some user is trying to check another person notes.
//     if(retail.user.toString()!=req.user.id){
//         return res.status(401).send("Not allowed");
//     }
//     //now if all are ok use find and update function of database.
//     retail=await Retail.findByIdAndUpdate(req.params.id,{$set:newretail},{new:true})
//     res.json({retail});
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal server error Ocuured");
//     }
    
    
// })
// Route 4:delete notes
router.delete('/deletenotes/:id',fetchuser,async (req,res)=>{
    try {
        let retail=await Retail.findById(req.params.id)//check if notes exist or not
    if(!retail)
    {
        return res.status(404).send("Notes not found");
    }
    //now check if some user is trying to check another person notes.
    if(retail.user.toString()!=req.user.id){
        return res.status(401).send("Not allowed");
    }
    //now if all are ok use find and update function of database.
    retail=await Retail.findByIdAndDelete(req.params.id)
    res.json({"success":"note has been deleted",retail:retail});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error Ocuured");
    }
    
    
})

module.exports=router