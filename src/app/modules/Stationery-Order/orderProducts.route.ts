import { Router } from "express";
import { orderProductsController } from "./orderProducts.controller";


const orderProductRouter = Router()

orderProductRouter.post("/", orderProductsController.createOrderProduct)

export default orderProductRouter