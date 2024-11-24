// Req And Res

import { Request, Response } from "express";
import { stationeryProductService } from "./stationeryProducts.service";
import StationeryProduct from "./stationeryProducts.model";


// Create Stationery Product
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
            message: "SomeThing Went wrong",
            error,
        })

    }

}
// Get Stationery product
const getAllStationeryProduct = async (req: Request, res: Response) => {
    try {
        const result = await stationeryProductService.getAllStationeryProduct()
        res.send({
            message: "Products retrieved successfully",
            status: true,
            data: result
        })
    } catch (error) {
        res.json({
            status: false,
            message: "SomeThing Wents wrong when get all products",
            error,
        })

    }

}
// Search product
const testProduct = async (req: Request, res: Response) => {
    try {
        const query = req.query;
        const result = await StationeryProduct.find(query)
        res.json({
            status: 200,
            message: "successfull Searching data",
            data: result
        })
    } catch (err) {
        console.log(err);

    }
}
// Get Single Product Using ID
const getSingleStationeryProduct = async (req: Request, res: Response) => {

    try {

        const productId = req.params.productId
        const result = await stationeryProductService.getSingleStationeryProduct(productId)
        console.log(result);

        res.json({
            message: "Product retrieved successfully",
            success: true,
            data: result
        })
    } catch (error) {
        res.json({
            status: false,
            message: "SomeThing Wents wrong when Searching product ID",
            error,
        })

    }

}
// Update Single Stationery Product
const updateSingleStationeryProduct = async (req: Request, res: Response) => {

    try {

        const productId = req.params.productId;
        const body = req.body;
        const result = await stationeryProductService.updateSingleStationeryProduct(productId, body);

        res.json({
            status: true,
            message: "Product Updated successfully",
            success: true,
            data: result
        })
    } catch (error) {
        res.json({
            status: false,
            message: "SomeThing Wents wrong",
            error,
        })

    }

}

// Delete Single Stationery Product
const deleteSingleStationeryProduct = async (req: Request, res: Response) => {

    try {

        const productId = req.params.productId;
        await stationeryProductService.deleteSingleStationeryProduct(productId);

        res.json({
            status: true,
            message: "Product Delete successfully",
            success: true,
            result: {}
        })
    } catch (error) {
        res.json({
            status: false,
            message: "SomeThing Went wrong",
            error,
        })

    }

}



export const stationeryProductsController = {
    createStationeryProduct,
    getAllStationeryProduct,
    getSingleStationeryProduct,
    updateSingleStationeryProduct,
    deleteSingleStationeryProduct,
    testProduct
    // getSearchproduct
}