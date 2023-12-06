
const express=require("express");
const cors=require("cors");
const { connect } = require("./connect");
const taskRouter = require("./routes/routes");
const userRouter = require("./routes/userRoutes");
const app=express();



const PORT=5000;
app.use(express.json());
app.use(cors());
app.use("/api",taskRouter);
app.use("/user",userRouter)

app.get("/",(req,res)=>{res.send("Welcome Home")})

connect("mongodb://127.0.0.1:27017/assignment");

app.listen(PORT,()=>{ console.log(`server running on http://localhost:${PORT}`)});
