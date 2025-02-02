import { model, Schema } from "mongoose";
import { TStationeryProduct } from "./stationeryProducts.interface";

const stationeryProductSchema = new Schema<TStationeryProduct>({
    name: {
        type: String,
        required: [true, "Please Provide your Product Name"],
        trim: true
    },
    brand: {
        type: String,
        required: [true, "Please Provide your Brand Name"],
    },
    price: {
        type: Number,
        required: [true, "Please Provide The Price"]
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: [true, "please Provide your description"]
    },
    quantity: {
        type: Number,
        required: [true, "please Provide Quantity"]
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true
    }


}, { timestamps: true })



const StationeryProduct = model<TStationeryProduct>("Product", stationeryProductSchema);
export default StationeryProduct;