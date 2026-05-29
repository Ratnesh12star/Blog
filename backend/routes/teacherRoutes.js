import express from "express";
import Teacher from "../models/Teacher.js";
import auth from "../middleware/auth.js";

const router =
express.Router();

router.get(
"/",
async(req,res)=>{

const data=
await Teacher.find();

res.json(data);

}
);


router.post(
"/create",
auth,

async(req,res)=>{

const data=
await Teacher.create(
req.body
);

res.json(data);

}
);


router.put(
"/update/:id",
auth,

async(req,res)=>{

const data=
await Teacher.findByIdAndUpdate(

req.params.id,
req.body,
{new:true}

);

res.json(data);

}
);


router.delete(
"/delete/:id",
auth,

async(req,res)=>{

await Teacher.findByIdAndDelete(
req.params.id
);

res.json({
msg:"deleted"
});

}
);

export default router;