const mongoose =require('mongoose');
require('mongoose-type-email');

const userSchema=new mongoose.Schema({
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
    password:{
        type:String,
        require:false
    },
    profile:{
        type:String,
        require:false
    }
});
module.exports=mongoose.model('user',userSchema)