
import config from "../../config";
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


    const { accessToken, refreshToken, } = result;
    res.cookie('refreshToken', refreshToken, {
        secure: config.NODE_ENV === 'development',
        httpOnly: true,
        sameSite: 'none', //**
        maxAge: 1000 * 60 * 60 * 24 * 365, //**
    });
    sendResponse(res, {
        success: true,
        message: "Login successful",
        statusCode: 200,
        data: {
            accessToken,
            refreshToken
        }
    })
})
const refreshToken = catchAsync(async (req, res) => {
    const { refreshToken } = req.cookies;
    const result = await AuthServices.refreshToken(refreshToken);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Access token is retrieved succesfully!',
        data: result,
    });
});

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
    refreshToken
    // forgetPassword
}