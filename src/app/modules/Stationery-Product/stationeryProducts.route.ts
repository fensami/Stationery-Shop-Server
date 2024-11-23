import { Router } from "express";
import { stationeryProductsController } from "./stationeryProducts.controller";

const stationeryProductRouter = Router()


stationeryProductRouter.post('/products', stationeryProductsController.createStationeryProduct)


export default stationeryProductRouter