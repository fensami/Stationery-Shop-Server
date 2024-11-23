import { Router } from "express";
import { stationeryProductsController } from "./stationeryProducts.controller";

const stationeryProductRouter = Router()


stationeryProductRouter.post('/products', stationeryProductsController.createStationeryProduct)
stationeryProductRouter.get('/:productId', stationeryProductsController.getSingleStationeryProduct)
// stationeryProductRouter.get('/:_id', stationeryProductsController.getSingleProduct)
stationeryProductRouter.get('/', stationeryProductsController.getStationeryProduct)


export default stationeryProductRouter