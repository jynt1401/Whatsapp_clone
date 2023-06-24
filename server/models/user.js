const mongoose =require('mongoose');
require('mongoose-type-email');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    
    profile:{
        type:String,
        require:false
    }
});
module.exports=mongoose.model('user',userSchema)