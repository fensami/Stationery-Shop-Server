import mongoose from "mongoose";
const orderProductSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        trim: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    }
})

const OrderProduct = mongoose.model("Order", orderProductSchema);

export default OrderProduct;