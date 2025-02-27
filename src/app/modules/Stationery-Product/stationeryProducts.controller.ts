// Req And Res

import { Request, Response } from "express";
import { stationeryProductService } from "./stationeryProducts.service";
// import StationeryProduct from "./stationeryProducts.model";


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
            success: false,
            message: "SomeThing Went wrong",
            error,
        })

    }

}

// Get All Products product And Search name,brand ,category wize data searching
// const getAllProduct = async (req: Request, res: Response) => {
//     try {
//         const payload = req.query;
//         const result = await StationeryProduct.find(payload)
//         res.json({
//             message: "Products retrieved successfully",
//             status: true,
//             data: result
//         })
//     } catch (error) {
//         res.json({
//             status: false,
//             message: "SomeThing Went wrong",
//             error,
//         })

//     }
// }
const getAllProduct = async (req: Request, res: Response) => {
    try {
        // const searchTerm = req.query.searchTerm as string
        // const payload = req.query;
        // const { searchTerm } = req.query
        const result = await stationeryProductService.getAllStationeryProduct(req.query)
        res.json({
            message: "Products retrieved successfully",
            status: true,
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
// Get Single Product Using ID
const getSingleStationeryProduct = async (req: Request, res: Response) => {

    try {

        const id = req.params.id
        const result = await stationeryProductService.getSingleStationeryProduct(id)

        res.json({
            status: true,
            message: "Product retrieved successfully",
            data: result
        })
    } catch (error) {
        res.json({
            status: false,
            message: "SomeThing Went Wrong",
            error,
        })

    }

}
// Update Single Stationery Product
const updateSingleStationeryProduct = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;
        const body = req.body;
        const result = await stationeryProductService.updateSingleStationeryProduct(id, body);

        res.json({
            message: "Product Updated successfully",
            status: true,
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

// Delete Single Stationery Product
const deleteSingleStationeryProduct = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;
        const result = await stationeryProductService.deleteSingleStationeryProduct(id);

        res.json({
            message: "Product deleted successfully",
            status: true,
            data: { result }
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
    getSingleStationeryProduct,
    updateSingleStationeryProduct,
    deleteSingleStationeryProduct,
    getAllProduct
}