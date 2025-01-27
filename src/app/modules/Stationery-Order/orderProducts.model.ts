import { model, Schema } from "mongoose";
import { TOrderProduct } from "./orderProducts.interface";


const OrderProductSchema = new Schema<TOrderProduct>(
    {
        // email: {
        //     type: String
        // },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        },
        orderStatus: {
            type: String,
            enum: ['Pending', 'Shipping'],
            default: "Pending"
        }
    }
)

export const OrderProduct = model<TOrderProduct>("Order", OrderProductSchema);