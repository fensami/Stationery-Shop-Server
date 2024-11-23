// Req And Res

import { Request, Response } from "express";
import { stationeryProductService } from "./stationeryProducts.service";

const createStationeryProduct = async (req: Request, res: Response) => {

    try {
        // Collect the data 
        const payload = req.body

        const result = await stationeryProductService.createStationeryProduct(payload)

        res.json({
            message: "Product created successfully",
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

export const stationeryProductsController = {

    createStationeryProduct
}