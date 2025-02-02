/* eslint-disable @typescript-eslint/no-unused-vars */

import config from "../../config";
import AppError from "../../errors/AappErrors";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import bcrypt from "bcrypt";
import { createToken, verifyToken } from "./auth.utils";
interface ILoginUser {
    email: string
    password: string
}

const register = async (payload: IUser) => {
    const result = await User.create(payload);
    return result
}

const login = async (payload: ILoginUser) => {

    const user = await User.findOne({ email: payload?.email }).select("+password")
    console.log("user", user);


    if (!user) {
        throw new AppError(401, "user is not found!")
    }

    const isUserDeActivate = user?.isDeActivate

    if (isUserDeActivate === true) {
        throw new AppError(401, "user is DeActivate !")
    }

    const isPasswordMatch = await bcrypt.compare(payload?.password, user?.password)

    if (!isPasswordMatch) {
        throw new AppError(401, "Password is not mached !")
    }

    // const accessToken = jwt.sign({ _id: user._id, email: user.email, role: user.role }, config.jwt_access_secret as string, { expiresIn: "30d" })

    // eslint-disable-next-line no-unused-vars
    const { password, ...remanningData } = user;
    console.log(user);
    //create token and sent to the  client
    const jwtPayload = {
        userId: user.id,
        role: user.role,
    };
    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string,
    );
    const refreshToken = createToken(
        jwtPayload,
        config.jwt_refresh_secret as string,
        config.jwt_refresh_expires_in as string,
    );
    return {
        accessToken,
        remanningData,
        refreshToken
    }
}


const refreshToken = async (token: string) => {
    // checking if the given token is valid
    const decoded = verifyToken(token, config.jwt_refresh_secret as string);

    // const { userId, iat } = decoded;
    const { userId } = decoded;

    // checking if the user is exist
    const user = await User.isUserExistsById(userId);
    console.log(user);


    if (!user) {
        throw new AppError(404, 'This user is not found !');
    }
    // checking if the user is already deleted
    const isDeActivate = user?.isDeActivate;

    if (isDeActivate) {
        throw new AppError(404, 'This user is deactivate !');
    }

    // checking if the user is blocked
    // const userStatus = user?.status;

    // if (userStatus === 'blocked') {
    //     throw new AppError(404, 'This user is blocked ! !');
    // }

    // if (
    //     user.passwordChangedAt &&
    //     User.isJWTIssuedBeforePasswordChanged(user.passwordChangedAt, iat as number)
    // ) {
    //     throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
    // }

    const jwtPayload = {
        userId: user?._id,
        role: user.role,
    };

    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string,
    );

    return {
        accessToken,
    };
};

// const forgetPassword = async (userId: string) => {

//     const user = await User.isUserExistsById(userId);

//     // console.log(user);


//     if (!user) {
//         throw new AppError(401, "user is not found !")
//     }

//     const isUserBlocked = user?.isBlocked

//     if (isUserBlocked === true) {
//         throw new AppError(401, "user is blocked !")
//     }

//     const jwtPaylod = {
//         _id: user?._id,
//         email: user.email,
//         role: user.role
//     }


//     const resetToken = jwt.sign({ jwtPaylod }, config.jwt_access_secret as string, { expiresIn: "10m" })


//     const resetUILink = `${config.reset_pass_ui_link}?_id=${user._id}&token=${resetToken}`;


//     sendEmail(user.email, resetUILink)
//     console.log(resetUILink);


// }
// const login = async (payload: ILoginUser) => {
//     const user = await User.findOne({ email: payload?.email }).select(
//         '+password',
//     );

//     if (!user) {
//         throw new AppError(401, 'This user is not found !');
//     }

//     const isActiveStatus = user?.isActivate;

//     if (isActiveStatus === false) {
//         throw new AppError(401, 'This user is blocked !');
//     }

//     const isPasswordMatch = await bcrypt.compare(
//         payload?.password,
//         user?.password,
//     );

//     if (!isPasswordMatch) {
//         throw new AppError(401, 'Password can not match!');
//     }

//     const token = jwt.sign(
//         {
//             _id: user._id,
//             email: user.email,
//             role: user.role,
//         },
//         config.jwt_access_secret as string,
//         { expiresIn: '40d' },
//     );


//     // eslint-disable-next-line no-unused-vars
//     const { password, ...remainingData } = user;

//     return { token, remainingData };
// };



export const AuthServices = {
    register,
    login,
    refreshToken
    // forgetPassword
}




