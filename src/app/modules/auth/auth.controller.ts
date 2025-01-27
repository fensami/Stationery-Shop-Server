
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const register = catchAsync(async (req, res) => {

    const result = await AuthServices.register(req.body);

    sendResponse(res, {
        success: true,
        message: "User registered successfully",
        statusCode: 201,
        data: result
    })
})
const login = catchAsync(async (req, res) => {

    const result = await AuthServices.login(req.body);

    const { accessToken } = result;

    sendResponse(res, {
        success: true,
        message: "Login successful",
        statusCode: 200,
        data: {
            accessToken,
        }
    })
})


// const forgetPassword = catchAsync(async (req, res) => {

//     const userId = req.body


//     const result = await AuthServices.forgetPassword(userId._id);

//     sendResponse(res, {
//         success: true,
//         message: "Reset link is generated successful",
//         statusCode: 200,
//         data: result
//     })
// })

export const AuthControllers = {
    register,
    login,
    // forgetPassword
}