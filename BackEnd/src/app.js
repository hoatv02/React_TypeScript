import express from 'express';
import morgan from 'morgan'
import productRouter from './Routes/Product.router'
import mongoose from "mongoose";
import AuthRouter from './Routes/Auth.router';
import categoryRouter from './Routes/Category.router'
import userRouter from './Routes/User.router'
import OrderRouter from './Routes/Orders.router'

import path  from 'path'
const app = express();
mongoose
    .connect("mongodb://localhost:27017/we17201")
    .then(() => console.log("Ket noi db thanh cong"))
    .catch((error) => console.log("Ket noi db khong thanh cong", error));
app.use(express.json());
app.use('/image', express.static(path.join(__dirname + `\\UploadImage`)));
app.use(productRouter);
app.use(AuthRouter);
app.use(categoryRouter);
app.use(userRouter);
app.use(OrderRouter);
morgan('tiny')
app.listen(3001, () => {
  console.log("Successfull")
})