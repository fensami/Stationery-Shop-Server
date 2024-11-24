import { Router } from "express";
import { stationeryProductsController } from "./stationeryProducts.controller";

const stationeryProductRouter = Router()


stationeryProductRouter.get('/products/:productId', stationeryProductsController.getSingleStationeryProduct)
stationeryProductRouter.put('/products/:productId', stationeryProductsController.updateSingleStationeryProduct)
stationeryProductRouter.delete('/products/:productId', stationeryProductsController.deleteSingleStationeryProduct)
stationeryProductRouter.get('/products', stationeryProductsController.getAllStationeryProduct)
stationeryProductRouter.get('/products', stationeryProductsController.testProduct)
stationeryProductRouter.post('/products', stationeryProductsController.createStationeryProduct)


export default stationeryProductRouter