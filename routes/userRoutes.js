const express=require("express");
const { signUp, login } = require("../controller/userController");
const userRouter=express.Router();


userRouter.post("/register",signUp).post("/login",login)

module.exports=userRouter;
