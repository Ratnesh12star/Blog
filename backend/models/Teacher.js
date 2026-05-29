import mongoose from "mongoose";

const teacherSchema =
new mongoose.Schema({

image:String,

name:{
type:String,
required:true
},

subject:String,

email:String,

mobile:String,

experience:String

},
{
timestamps:true
});

export default mongoose.model(
"Teacher",
teacherSchema
);