/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync"
import config from "../config";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/user/user.model";
import AppError from "../errors/AappErrors";

const auth = (...requiredRole: string[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {

        // const token = req.headers.authorization?.split(' ')[1];
        const token = req.headers.authorization;
        // console.log(token);

        if (!token) {
            throw new Error('you are not authorized Token')
        }

        // const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
        // checking if the given token is valid
        let decoded;
        try {
            decoded = jwt.verify(
                token,
                config.jwt_access_secret as string,
            ) as JwtPayload;
        } catch (err) {
            throw new AppError(401, "Unauthorized")
        }

        const { email, role } = decoded;

        const user = await User.findOne(email);
        console.log(user);

        if (!user) {
            throw new Error("User not found!")
        }
        if (requiredRole && !requiredRole.includes(role)) {
            throw new Error("you are not authorized !")
        }

        req.user = decoded as JwtPayload & { role: string };

        next();

    })
}

export default auth