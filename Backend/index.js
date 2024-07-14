import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoute from './routes/auth.js';
import productRoute from './routes/product.js';
import cartRoute from './routes/cart.js'
import orderRoute from './routes/order.js'
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));


app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);



app.use((obj, req, res, next)=>{
    const statusCode = obj.status || 500;
    const message = obj.message || "Something went wrong!";
    return res.status(statusCode).json({
        success: [200,201,204].some(a=> a === obj.status) ? true : false,
        status: statusCode,
        message: message,
        data: obj.data
    });
});

const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/products");
        console.log("Connected to Database!");
    } catch (error) {
        throw error;
    }
}
app.listen(8800, ()=>{
    connectMongoDB();
    console.log("Connected to backend!");
});