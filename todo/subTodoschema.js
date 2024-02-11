import mongoose from "mongoose";
const subtodo=new mongoose.Schema({
   content:{
    type:String,
    required:true
   },
   complete:{
    type:Boolean,
    default:false
   },
   createdby:
   {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
   }
},{timestamps:true})
const SubTodo=mongoose.model('SubTodo',subtodo);
