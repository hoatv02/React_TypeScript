import mongoose from "mongoose";

const UserInfoSchema = mongoose.Schema({
    email:String,
    address:String,
    phone:Number,
    userName:String,
    note:String,
},{timestamps:true})

export default mongoose.model("UserInfo",UserInfoSchema)