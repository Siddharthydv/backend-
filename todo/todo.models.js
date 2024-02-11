import mongoose from "mongoose";
const todoSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[//todo can contain sub todos terefore we need to enter them in todo model or give reference to a sub todo model.
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]//Array of subtodos. 
},{timestamps:true})

export const Todo=mongoose.model("Todo",todoSchema);
