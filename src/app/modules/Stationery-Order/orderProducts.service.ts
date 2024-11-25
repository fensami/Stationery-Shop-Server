import mongoose from "mongoose";
import TOrderProducts from "./orderProducts.interface";
import OrderProduct from "./orderProducts.model";

// Service to create a new order
const createOrder = async (email: string, productId: string, quantity: number): Promise<TOrderProducts> => {
    try {
        // Validate the provided product ID
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            throw new Error("Invalid product ID format");
        }

        // Find the product by ID
        const product = await OrderProduct.findById(productId);

        if (!product) {
            console.error("Product not found for ID:", productId);
            throw new Error("Product not found");
        }

        // Check stock availability
        if (product.quantity < quantity) {
            throw new Error("Insufficient stock available");
        }

        // Create a new order object
        const newOrder = new OrderProduct({
            email,
            product: productId,
            quantity,
        });

        // Save the order to the database
        await newOrder.save();

        // Deduct the quantity from the product's stock
        product.quantity -= quantity;
        await product.save();

        // Return the newly created order
        return newOrder;

    } catch (error) {
        // Log the error for debugging
        console.error("Error creating order:");
        throw error; // Propagate the error to the caller
    }
};

// Export the service
export const orderProductsService = {
    createOrder,
};
