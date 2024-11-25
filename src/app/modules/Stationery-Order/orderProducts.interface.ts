import mongoose from "mongoose";
import { TStationeryProduct } from "../Stationery-Product/stationeryProducts.interface";

interface TOrderProducts extends Partial<TStationeryProduct> {

    email: string,
    product: mongoose.Types.ObjectId,
    quantity: number,
    totalPrice: number
}

export default TOrderProducts