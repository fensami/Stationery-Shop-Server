import { TStationeryProduct } from "./stationeryProducts.interface"
import StationeryProduct from "./stationeryProducts.model"

const createStationeryProduct = async (payload: TStationeryProduct): Promise<TStationeryProduct> => {

    // Set to model Name //To get data Payload
    const result = await StationeryProduct.create(payload)
    return result
}


export const stationeryProductService = {
    createStationeryProduct
}