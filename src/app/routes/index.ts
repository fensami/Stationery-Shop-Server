import { Router } from "express";
import authRoute from "../modules/auth/auth.route";
import stationeryProductRouter from "../modules/Stationery-Product/stationeryProducts.route";
import userRoute from "../modules/user/user.route";
import orderProductRouter from "../modules/Stationery-Order/orderProducts.route";
// import userRoute from "../modules/user/user.route";

const router = Router();


const modulesRoute = [
    {
        path: "/auth",
        route: authRoute
    },
    {
        path: "/users",
        route: userRoute
    },
    {
        path: "/products",
        route: stationeryProductRouter
    },
    {
        path: "/orders",
        route: orderProductRouter
    }
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;