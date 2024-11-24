import { TOrderProducts } from "./orderProducts.interface"
import OrderProduct from "./orderProducts.model"


// Create Stationery Product 
const createOrderProduct = async (payload: TOrderProducts): Promise<TOrderProducts> => {

    // Set to model Name //To get data Payload
    const result = await OrderProduct.create(payload)
    return result
}

export const orderProductsService = {
    createOrderProduct
}