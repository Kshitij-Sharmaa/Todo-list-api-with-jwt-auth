const mongoose=require("mongoose");

async function connect(url) {
try {
    mongoose.connect(url).then(()=>{console.log("connected")})
} catch (error) {
    console.log("error",error);
}
}

module.exports={connect}