// Req And Res

import { Request, Response } from "express";
import { stationeryProductService } from "./stationeryProducts.service";

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
            message: "SomeThing Wents wrong when creating products",
            error,
        })

    }

}
// Get Stationery product
const getStationeryProduct = async (req: Request, res: Response) => {
    try {
        const result = await stationeryProductService.getStationeryProduct()
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
// single
const getSingleStationeryProduct = async (req: Request, res: Response) => {

    try {
        // Collect the data 
        // const payload = req.body
        console.log(req.params);

        const productId = req.params.productId
        const result = await stationeryProductService.getSingleStationeryProduct(productId)
        console.log(result);

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
// const getSingleStudent = async (req: Request, res: Response) => {
//     try {
//       const { studentsId } = req.params;
//       const result = await StudentServices.getSingleStudentsFromDB(studentsId);
//       res.status(200).json({
//         success: true,
//         message: 'student single successfully',
//         data: result,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// const getSingleProduct = async (req: Request, res: Response) => {
//     try {
//         console.log(req.params);

//         const _id = req.params.productId;
//         const result = await stationeryProductService.getSingleCategoryProducts(_id);
//         res.json({
//             success: true,
//             message: 'Products single data get successfully',
//             data: result,
//             inStrock: true
//         });

//     } catch (err) {
//         console.log(err);

//     }
// }


export const stationeryProductsController = {

    createStationeryProduct,
    getStationeryProduct,
    getSingleStationeryProduct
    // getSingleProduct
}