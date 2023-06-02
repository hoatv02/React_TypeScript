import mongoose from "mongoose";
import { createHmac } from 'crypto'
const AuthSchema = mongoose.Schema({
    userName: {
        type: String,
    },
    email: {
        unique: true,
        required: true,
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: String
    },
    address: { 
        type: String 
    }
}, { timestamps: true })
AuthSchema.methods = {
    authenticate: function (password) {
        return this.password === this.encryptPassword(password);
    },
    encryptPassword(password) {
        if (!password) return "";
        return createHmac("sha256", "123456").update(password).digest("hex");
    }
}
AuthSchema.pre('save', function (next) {
    this.password = this.encryptPassword(this.password)
    next();
})
export default mongoose.model("Auth", AuthSchema)