import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const router=express.Router();


router.post("/register",async(req,res)=>{

try{

const hash=await bcrypt.hash(
req.body.password,
10
);

const admin=await Admin.create({

email:req.body.email,

password:hash

});

res.status(200).json(admin);

}

catch(error){

res.status(500).json({
message:error.message
})

}

});



router.post("/login",async(req,res)=>{

try{

const admin=await Admin.findOne({
email:req.body.email
});

if(!admin){

return res.json({
message:"Admin not found"
})

}

const match=
await bcrypt.compare(
req.body.password,
admin.password
)

if(!match){

return res.json({
message:"Wrong Password"
})

}

const token=jwt.sign(
{id:admin._id},
"secret"
);

res.json({token})

}

catch(error){

res.status(500).json({
message:error.message
})

}

})

export default router;