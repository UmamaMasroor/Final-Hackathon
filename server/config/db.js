import mongoose from "mongoose";

const connectToMongodb = async() =>{
    const res = await mongoose.connect("mongodb://127.0.0.1:27017/practice-share");
    if (res){
        console.log("Connected successfully");
    }
};
export default connectToMongodb;