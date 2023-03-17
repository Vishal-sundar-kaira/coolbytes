const mongoose=require('mongoose');
const {Schema}=mongoose;
const RetailSchema=new Schema({
    product:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    price:{
        required:true,
        type:Number,
    },

})
const Retail=mongoose.model('retail',RetailSchema)
module.exports=Retail