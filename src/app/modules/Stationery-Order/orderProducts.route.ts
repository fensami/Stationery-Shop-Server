import { Router } from "express";
import { orderProductController } from "./orderProducts.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { orderValidationSchema } from "./orderValidation";


const orderProductRouter = Router()




orderProductRouter.patch("/admin-shipping-order/:id", orderProductController.adminShippingOrder)

// Delete product
orderProductRouter.delete('/delete-order/:id', auth("admin"), orderProductController.deleteSingleOrder);
// Create Order
orderProductRouter.post("/create-order", auth("user"), validateRequest(orderValidationSchema.createOrderValidationSchema), orderProductController.createOrderProduct)

// Get All Orders
orderProductRouter.get('/get-all-orders', auth("user", "admin"), orderProductController.getAllOrders)


export default orderProductRouter