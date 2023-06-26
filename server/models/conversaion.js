const mongoose =require('mongoose');
require('mongoose-type-email');

const convoSchema=new mongoose.Schema({
    members:{
        type:Array
    },
    msg:{
        type:String
    }},
    {
        timestamps:true
    }
);
module.exports=mongoose.model('convo',convoSchema)