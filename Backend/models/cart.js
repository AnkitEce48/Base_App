import mongoose from 'mongoose';
 
const cartSchema = mongoose.Schema({
    fabric:{
        type: String,
    },
    type:{
        type: String,
        required: true,
    },
    pins:{
        type: String,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    color:{
        type:String,
    },
    id:{
        type:String,
        required:true,
    }
   
},
{
    timestamps: true
}
)
export default mongoose.model("Cart", cartSchema)