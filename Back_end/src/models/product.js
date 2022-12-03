
import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    productName: {
        type: String,
    },
    price: {
        type: Number,
    },
    description:{
        type: String,
    },
    category:{
        type: mongoose.ObjectId,
        type: String,
    }
    ,image:{
        type: String,
    },
    quantity:{
        type: Number,
    }
});

export default mongoose.model("Product", productSchema);