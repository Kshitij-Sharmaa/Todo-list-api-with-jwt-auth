const jwt=require("jsonwebtoken");
const Secret_Key="kshitij"

const auth=(req,res,next)=>{
    try {
        let token =req.headers.authorization;
        if(token){
            token=token.split(" ")[1];
            let user=jwt.verify(token,Secret_Key);
            req.user=user.id;

        }
        else{
            return res.status(401).json({ message: "Unauthorized User" });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Unauthorized User" });
    }
}

module.exports=auth;