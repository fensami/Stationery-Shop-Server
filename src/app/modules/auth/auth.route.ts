import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchema } from "../user/user.validation";
import { AuthControllers } from "./auth.controller";
import { authValidation } from "./auth.validation";
// import { authValidation } from "./auth.validation";

const authRoute = Router();

authRoute.post("/register", validateRequest(userValidationSchema.createUserValidationSchema), AuthControllers.register)

authRoute.post("/login", validateRequest(authValidation.loginValidationSchema), AuthControllers.login)

authRoute.post(
    '/refresh-token',
    validateRequest(authValidation.refreshTokenValidationSchema),
    AuthControllers.refreshToken,
);
// authRoute.post("/forget-password", validateRequest(authValidation.forgetPasswordValidaitonSchema), AuthControllers.forgetPassword)



export default authRoute;