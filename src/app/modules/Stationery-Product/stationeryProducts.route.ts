import { Router } from "express";
import { stationeryProductsController } from "./stationeryProducts.controller";
import auth from "../../middlewares/auth";
import { productValidationSchema } from "./stationeryProductsValidation";
import validateRequest from "../../middlewares/validateRequest";

const stationeryProductRouter = Router()

// Get Single product
stationeryProductRouter.get('/get-single-product/:id', stationeryProductsController.getSingleStationeryProduct)
// Update Product
stationeryProductRouter.put('/update-product/:productId', validateRequest(productValidationSchema.updateProductsValidationSchema), stationeryProductsController.updateSingleStationeryProduct)
// Delete product
stationeryProductRouter.delete('/delete-product/:id', auth("admin"), stationeryProductsController.deleteSingleStationeryProduct);
// Create Products
stationeryProductRouter.post('/create-products', auth("admin"), validateRequest(productValidationSchema.createProductsValidationSchema), stationeryProductsController.createStationeryProduct)
// Get All Products
stationeryProductRouter.get('/get-all-products', stationeryProductsController.getAllProduct)


export default stationeryProductRouter;