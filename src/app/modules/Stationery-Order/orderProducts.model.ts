import mongoose, { model } from "mongoose";
import { TOrderProducts } from "./orderProducts.interface";
const orderProductSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    email: {
        type: String,
        required: true
    },
    totalPrice: {
        type: String,
        required: true
    }
})

const OrderProduct = model<TOrderProducts>("Order", orderProductSchema);

export default OrderProduct;