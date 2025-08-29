const mongoose=require("mongoose");
const colors=require("colors");
const MONGO_URL = "mongodb://127.0.0.1:27017/Bloodbank";

//process.env.MONGO_URL

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongodb Database ${mongoose.connection.host}`);
    }catch(error){
        console.log(`Mongodb Database Error ${error}`.bgRed.white);
    }
};

module.exports=connectDB;
