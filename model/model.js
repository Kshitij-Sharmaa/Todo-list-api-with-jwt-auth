const mongoose=require("mongoose");

const mySchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean
    }
},{timestamps:true})

const todoModel=mongoose.model("myModel",mySchema);

module.exports=todoModel;