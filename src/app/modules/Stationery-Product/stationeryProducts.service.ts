import { TStationeryProduct } from "./stationeryProducts.interface"
import StationeryProduct from "./stationeryProducts.model"

// Create Stationery Product 
const createStationeryProduct = async (payload: TStationeryProduct): Promise<TStationeryProduct> => {

    // Set to model Name //To get data Payload
    const result = await StationeryProduct.create(payload)
    return result
}

// Get Stationery Product
const getStationeryProduct = async () => {
    const result = await StationeryProduct.find()
    return result

}
const getSingleStationeryProduct = async (id: string) => {
    const result = await StationeryProduct.findById(id)
    return result

}

// Get signle Student info from DB
// const getSingleStudentsFromDB = async (id: string) => {
//     const result = await Student.findOne({ id });
//     return result;
//   };
// const getSingleCategoryProducts = async (_id: string) => {
//     const result = await StationeryProduct.findById(_id)
//     console.log(result);

//     return result
// }


export const stationeryProductService = {
    createStationeryProduct,
    getStationeryProduct,
    getSingleStationeryProduct
    // getSingleCategoryProducts
}