const express=require("express");
const { addTask ,getApi,deleteApi,updateApi} = require("../controller/controller");
const auth = require("../middleware/auth");
const router=express.Router();

router.post("/", auth,addTask).get("/",auth,getApi).delete("/:id",auth,deleteApi).put("/:id",auth,updateApi);

module.exports=router;