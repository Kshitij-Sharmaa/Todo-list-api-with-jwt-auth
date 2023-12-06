const userModel=require("../model/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const Secret_Key="kshitij"

async function signUp(req,res){
    const {name,email,password}=req.body;
    try {
        const existUser=await userModel.findOne({email:email})
        if(existUser){
            return res.status(400).json({ message: "user already exists" });
        }

        const hashPassword=await bcrypt.hash(password,10);

        const user=await userModel.create({
            name:name,
            email:email,
            password:hashPassword
        })

        const token=jwt.sign({email:user.email,id:user._id},Secret_Key);

        res.status(201).json({user:user,token:token})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
    
}

async function login(req,res){
    const {email,password}=req.body;

    try {
        const existUser=await userModel.findOne({email:email})
        if(!existUser){
            return res.status(404).json({ message: "user not found" });
        }
        const matchPassword=await bcrypt.compare(password,existUser.password);

        if(!matchPassword){
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const token=jwt.sign({email:existUser.email,id:existUser._id},Secret_Key);

        res.status(201).json({user:existUser,token:token})

    } catch (error) {
        res.status(500).json({ error: error.message });
      }
    
}

module.exports={signUp,login}