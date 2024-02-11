import mongoose from "mongoose";
const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        age:Number,
    },
    age:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        enum:["M","F","O"]
    },
    bloodgroup:{
        type:String,
        required:true
    },
    diagnosedwith:{
        type:String,
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
})
export const Patient=mongoose.model("Patient",patientSchema);