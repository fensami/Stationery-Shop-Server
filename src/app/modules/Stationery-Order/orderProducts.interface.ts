import { ObjectId } from "mongoose";

export interface TOrderProducts {

    email: string,
    product: ObjectId,
    quantity: string,
    totalPrice: number
}