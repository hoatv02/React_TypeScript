import mongoose from "mongoose";

export const OrderSchema = mongoose.Schema({
    userName:String,
    phone:Number,
    address:String,
    note:String,
})

export default mongoose.model("Order", OrderSchema)