import { Router } from "express";
import { orderProductsController } from "./orderProducts.controller";


const orderProductRouter = Router()

orderProductRouter.post("/", orderProductsController.createOrder)

export default orderProductRouter