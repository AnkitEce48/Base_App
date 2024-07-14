import mongoose, {Schema} from 'mongoose';

const ProductSchema = mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
        },
        color: {
            type: String,
        },
        dimension: {
            type: String,
        },
        fabric: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
        },
        pins: {
            type: String,
        },
        material: {
            type: String,
        },
        number: {
            type: String,
        },
        image:{
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    }
);

    export default mongoose.model("Product", ProductSchema);