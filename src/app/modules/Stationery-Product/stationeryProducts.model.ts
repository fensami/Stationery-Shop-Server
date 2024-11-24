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
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology']
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    inStrock: {
        type: Boolean,
        required: true,
        default: true
    }


}, { timestamps: true })



const StationeryProduct = model<TStationeryProduct>("Product", stationeryProductSchema);
export default StationeryProduct;