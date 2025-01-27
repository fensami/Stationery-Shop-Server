import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
// import sendResponse from "../../utils/sendResponse"
import { userService } from "./user.service"

const getAllUser = catchAsync(async (req, res) => {

    const result = await userService.getUser();

    sendResponse(res, {
        success: true,
        message: "All User Get  successful",
        statusCode: 500,
        data: result
    })
})

const adminDeActivateUser = catchAsync(async (req, res) => {

    const { id } = req.params;

    const result = await userService.adminDeActivateUserInDB(id)

    sendResponse(res, {
        success: true,
        message: "User DeActivate successfully",
        statusCode: 200,
        data: result
    })
})


// const adminCanDeleteAnyBlog = catchAsync(async (req, res) => {


//     const { id } = req.params;
//     const userRole = req.user?.role;

//     const result = await userService.adminCanDeleteAnyBlogIntoDB(id, userRole)
//     sendResponse(res, {
//         success: true,
//         message: "Blog deleted successfully",
//         statusCode: 200,

//     })
// })


export const userController = {
    getAllUser,
    adminDeActivateUser
    // adminBlockedUser,
    // adminCanDeleteAnyBlog
}