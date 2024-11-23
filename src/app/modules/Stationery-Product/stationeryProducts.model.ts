import { model, Schema } from "mongoose";
import { TStationeryProduct } from "./stationeryProducts.interface";

const stationeryProductSchema = new Schema<TStationeryProduct>({
    name: {
        type: String,
        required: [true, "Please Provide your Product Name"],
        enum: {
            values: ['Pen', 'otebook', 'Eraser'],
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
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value: string) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
            },
            message: "{VALUE} is not valid email"
        }
    },

    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }


}, { timestamps: true })


const StationeryProduct = model<TStationeryProduct>("Product", stationeryProductSchema);

export default StationeryProduct;