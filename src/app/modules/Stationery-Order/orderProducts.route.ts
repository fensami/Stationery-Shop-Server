import { Router } from "express";
import { orderProductController } from "./orderProducts.controller";
import auth from "../../middlewares/auth";


const orderProductRouter = Router()




orderProductRouter.patch("/admin-shipping-order/:id", orderProductController.adminShippingOrder)

// Delete product
orderProductRouter.delete('/delete-order/:id', auth("admin"), orderProductController.deleteSingleOrder);
// Create Order
orderProductRouter.post("/create-order", auth("user", "admin"), orderProductController.createOrderProduct)

// Get All Orders
orderProductRouter.get('/get-all-orders', auth("user", "admin"), orderProductController.getAllOrders)

// my orders
orderProductRouter.get('/get-my-orders', auth("user"), orderProductController.getUserOrders);
// orderUserProducts.get('/get-user-products')
export default orderProductRouter