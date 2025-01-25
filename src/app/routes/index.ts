import { Router } from "express";
import authRoute from "../auth/auth.route";

const router = Router();


const modulesRoute = [
    {
        path: "/auth",
        route: authRoute
    }
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;