import { Request, Response } from "express";
import { orderProductsService } from "./orderProducts.service"

const createOrder = async (req: Request, res: Response) => {


    const { email, product, quantity } = req.body;

    try {
        const order = await orderProductsService.createOrder(email, product, quantity);

        res.json({
            message: "order success",
            order
        })
    } catch (err) {
        console.log(err);

    }

}

export const orderProductsController = {
    createOrder
}