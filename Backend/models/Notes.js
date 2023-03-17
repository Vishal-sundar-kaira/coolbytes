const mongoose=require('mongoose');
const {Schema}=mongoose;
const NotesSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        required:true
    },
    list:{
        type:String,
        required:true
    },
    location:{
        required:true,
        type:String,
    },
    Date:{
        type:String,
        default:Date.now
    },
    number:{
        required:true,
        type:Number
    }

})
const Notes=mongoose.model('Notes',NotesSchema)
module.exports=Notes