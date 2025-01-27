import { model, Schema } from "mongoose";
import { TStationeryProduct } from "./stationeryProducts.interface";

const stationeryProductSchema = new Schema<TStationeryProduct>({
    name: {
        type: String,
        required: [true, "Please Provide your Product Name"],
        enum: {
            values: ['Pen', 'Notebook', 'Eraser'],
            message: '{VALUE} is not a valid name Set the valid Name',
        },
        trim: true
    },
    brand: {
        type: String,
        required: [true, "Please Provide your Brand Name"],
        enum: {
            values: ['Pilot', 'Moleskine', 'Faber-Castell'],
            message: '{VALUE} is not a valid brand Set the valid Brand'
        }
    },
    price: {
        type: Number,
        required: [true, "Please Provide The Price"]
    },
    category: {
        type: String,
        required: true,
        enum: {
            values: ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
            message: '{VALUE} is not a valid category set the valid category'
        }
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