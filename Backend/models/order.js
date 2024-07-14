import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    uId:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    paymentmode:{
        type:String,
        required:true
    },
    cart:{
        type:Array,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},
    {
        timestamps: true
    }
)


export default mongoose.model("Order", orderSchema)