// import AppError from "../../errors/AappErrors";
import AppError from "../../errors/AappErrors";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { orderProductService } from "./orderProducts.service";

const createOrderProduct = catchAsync(async (req, res) => {
    const user = req.user?.userId;
    console.log("order prodcts", user);


    if (!user) {
        throw new AppError(404, 'User Not Authenticated');
    }
    const biCycleOrderData = {
        ...req.body,
        user: user,
    };
    const result = await orderProductService.createOrderProducts(
        biCycleOrderData,
        user)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Order created successfully',
        data: result,
    });
})

const getAllOrders = catchAsync(async (req, res) => {
    const { searchTerm } = req.query
    const result = await orderProductService.getAllOrders(searchTerm)
    console.log(result);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Order Retrieved successfully',
        data: result,
    });
})

// Delete Single Order Product
const deleteSingleOrder = catchAsync(async (req, res) => {
    const id = req.params.id;

    await orderProductService.deleteSingleOrder(id);


    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Order Deleted successfully',
        data: {},
    });
})

const adminShippingOrder = catchAsync(async (req, res) => {

    const { id } = req.params;

    const result = await orderProductService.adminShippingOrder(id)

    sendResponse(res, {
        success: true,
        message: "User DeActivate successfully",
        statusCode: 200,
        data: result
    })
})


const getUserOrders = catchAsync(async (req, res) => {
    const id = req.user?.userId;
    const result = await orderProductService.getAllOrdersByUser(id);

    sendResponse(res, {
        success: true,
        message: 'Orders retrieved successfully',
        statusCode: 200,
        data: result,
    });
});

export const orderProductController = {
    createOrderProduct,
    getAllOrders,
    deleteSingleOrder,
    adminShippingOrder,
    getUserOrders
}