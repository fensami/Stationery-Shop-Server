/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";
import { TOrderProduct } from "./orderProducts.interface";
import { User } from "../user/user.model";
import AppError from "../../errors/AappErrors";
import StationeryProduct from "../Stationery-Product/stationeryProducts.model";
import { OrderProduct } from "./orderProducts.model";

// Create Orders
const createOrderProducts = async (data: TOrderProduct, userId: string) => {
    // const { product, quantity } = data;
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const user = await User.findById(userId).session(session);
        if (!user) {
            throw new AppError(404, "User Not Found")
        }

        const { product, quantity } = data;


        const stationeryItem = await StationeryProduct.findById(product).session(session);
        if (!stationeryItem || stationeryItem.quantity < quantity) {
            throw new AppError(
                404,
                'Insufficient stock or product not found.',
            );
        }

        const totalPrice = stationeryItem.price * quantity;
        stationeryItem.quantity -= quantity;
        stationeryItem.inStock = stationeryItem.quantity > 0;

        await stationeryItem.save({ session });

        if (!stationeryItem) {
            throw new AppError(404, "insufficient stock")
        }



        const orderData = { ...data, totalPrice, user: user._id };
        const result = await OrderProduct.create([orderData], { session });
        await result[0].populate("user", 'name email role')


        await session.commitTransaction();
        session.endSession();
        return result[0]

    } catch (err) {
        await session.abortTransaction();
        session.endSession();
        throw new AppError(404, 'somthing went wrong!... Product is Stock Out')
    }
}

//  Get All Orders
const getAllOrders = async (searchTerm: any) => {
    let query = {};

    if (searchTerm) {
        const regex = new RegExp(searchTerm, "i");
        query = {
            $or: [
                { name: regex },
                { brand: regex },
                { category: regex },
            ],
        }
    }
    const result = await OrderProduct.find(query)
    return result
}

// Order Delete
const deleteSingleOrder = async (id: string) => {
    const orderProduct = await OrderProduct.findById(id);

    if (!orderProduct) {
        throw new AppError(404, "product is not available")
    }

    const result = await OrderProduct.findByIdAndDelete(id);
    return result;
}

const adminShippingOrder = async (id: string) => {
    // Find the user id
    const orderProduct = await OrderProduct.findById(id);
    // Check if the user exists
    if (!orderProduct) {
        throw new Error("Order  not found");
    }

    // Check if the user is already blocked
    if (orderProduct.orderStatus === "Shipping") {
        throw new Error("User is already Shipping ! ");
    }
    const result = await OrderProduct.findByIdAndUpdate(
        id,
        { orderStatus: "Shipping" },
        {
            new: true,
            runValidators: true,
        },
    );
    return result;
};

export const orderProductService = {
    createOrderProducts,
    getAllOrders,
    deleteSingleOrder,
    adminShippingOrder
}