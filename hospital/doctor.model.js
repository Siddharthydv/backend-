import mongoose from "mongoose";
const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceinyears:{
        type:Number,
        default:0
    },
    worksinhospitals:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
})
export const Doctor=mongoose.model("Doctor",doctorSchema);