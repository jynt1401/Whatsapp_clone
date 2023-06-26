const mongoose =require('mongoose');
require('mongoose-type-email');

const messageSchema=new mongoose.Schema({
    convoId:{
        type:String,
    },
    rId:{
        type:String,
    },
    sId:{
        type:String
    },
    text:{
        type:String
    }

},
    {
        timestamps:true
    }
);
module.exports=mongoose.model('message',messageSchema)