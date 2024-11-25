import mongoose from "mongoose";
import TOrderProducts from "./orderProducts.interface";
import OrderProduct from "./orderProducts.model";

// create a new order
const createOrder = async (email: string, productId: string, quantity: number): Promise<TOrderProducts> => {
    try {
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            throw new Error("Invalid product ID format");
        }

        const product = await OrderProduct.findById(productId);

        if (!product) {
            console.error("Product not found for ID:", productId);
            throw new Error("Product not found");
        }
        if (product.quantity < quantity) {
            throw new Error("Insufficient stock available");
        }
        const newOrder = new OrderProduct({
            email,
            product: productId,
            quantity,
        });
        await newOrder.save();
        product.quantity -= quantity;
        await product.save();
        return newOrder;

    } catch (error) {
        console.error("Error creating order:");
        throw error;
    }
};

export const orderProductsService = {
    createOrder,
};
