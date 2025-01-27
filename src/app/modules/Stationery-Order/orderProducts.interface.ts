import { Types } from "mongoose"

export type TOrderProduct = {
    // email?: string;
    user: Types.ObjectId;
    product: Types.ObjectId;
    quantity: number;
    totalPrice: number;
    orderStatus: "Pending" | "Shipping"
}