import { Request, Response } from "express";
import { orderProductsService } from "./orderProducts.service"



// Create Order Product
const createOrderProduct = async (req: Request, res: Response) => {

    try {
        // Collect the data 
        const payload = req.body;
        const result = await orderProductsService.createOrderProduct(payload);

        res.json({
            message: "Product Order created successfully",
            success: true,
            data: result
        })
    } catch (error) {
        res.json({
            status: false,
            message: "SomeThing Wents wrong when creating products",
            error,
        })

    }

}

export const orderProductsController = {
    createOrderProduct
}