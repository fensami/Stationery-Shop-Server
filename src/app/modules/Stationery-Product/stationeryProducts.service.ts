import QueryBuilder from "../../builder/QueryBuilder"
import { TStationeryProduct } from "./stationeryProducts.interface"
import StationeryProduct from "./stationeryProducts.model"

// Create Stationery Product 
const createStationeryProduct = async (payload: TStationeryProduct): Promise<TStationeryProduct> => {

    // Set to model Name //To get data Payload
    const result = await StationeryProduct.create(payload)
    return result
}
const getAllStationeryProduct = async (query: Record<string, unknown>) => {

    const stationeryProductQuery = new QueryBuilder(StationeryProduct.find(), query)
        .search(["name", "category"])
        .filter()
        .sort()
        .paginate()
        .fields();

    const result = await stationeryProductQuery.modelQuery;

    return result
}
// Get Single Product Using ID
const getSingleStationeryProduct = async (id: string) => {
    const result = await StationeryProduct.findById(id)
    // console.log(result);

    return result

}
// Products Update
const updateSingleStationeryProduct = async (id: string, data: TStationeryProduct) => {
    const result = await StationeryProduct.findByIdAndUpdate(id, data, { new: true })
    return result
}

// Product Delete
const deleteSingleStationeryProduct = async (id: string) => {
    const result = await StationeryProduct.findByIdAndDelete(id);
    return result;
}



export const stationeryProductService = {
    createStationeryProduct,
    getSingleStationeryProduct,
    updateSingleStationeryProduct,
    deleteSingleStationeryProduct,
    getAllStationeryProduct
}