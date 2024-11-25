import { Router } from "express";
import { stationeryProductsController } from "./stationeryProducts.controller";

const stationeryProductRouter = Router()


stationeryProductRouter.get('/products/:productId', stationeryProductsController.getSingleStationeryProduct)
stationeryProductRouter.put('/products/:productId', stationeryProductsController.updateSingleStationeryProduct)
stationeryProductRouter.delete('/products/:productId', stationeryProductsController.deleteSingleStationeryProduct)
stationeryProductRouter.post('/products', stationeryProductsController.createStationeryProduct)
stationeryProductRouter.get('/products', stationeryProductsController.getAllProduct)


export default stationeryProductRouter