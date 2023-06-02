import mongoose from "mongoose";
const categorySchema = mongoose.Schema({
    // id:Number,
    categoryName:String
})

export default mongoose.model("Category", categorySchema)