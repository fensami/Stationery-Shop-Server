import { Router } from "express";
import { userController } from "./user.controllers";
import auth from "../../middlewares/auth";
// import auth from "../../middlewares/auth";
// import auth from "../../middlewares/auth";

const userRoute = Router();

userRoute.get("/", userController.getAllUser)
userRoute.patch("/admin-user/:id/deactivate", auth("admin"), userController.adminDeActivateUser)
// userRoute.patch("/admin/users/:id/block", authRoute("admin"), userController.adminBlockedUser)

// userRoute.delete('/admin/blogs/:id', userController.adminCanDeleteAnyBlog)


export default userRoute;