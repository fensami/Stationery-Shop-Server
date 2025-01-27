/* eslint-disable @typescript-eslint/no-unused-vars */

import config from "../../config";
import AppError from "../../errors/AappErrors";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
        throw new AppError(401, "user is not found !")
    }

    const isUserBlocked = user?.isBlocked

    if (isUserBlocked === true) {
        throw new AppError(401, "user is blocked !")
    }

    const isPasswordMatch = await bcrypt.compare(payload?.password, user?.password)

    if (!isPasswordMatch) {
        throw new AppError(401, "Password is not mached !")
    }

    const accessToken = jwt.sign({ _id: user._id, email: user.email, role: user.role }, config.jwt_access_secret as string, { expiresIn: "30d" })

    // eslint-disable-next-line no-unused-vars
    const { password, ...remanningData } = user;
    console.log(user);


    return {
        accessToken,
        remanningData
    }
}


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
    // forgetPassword
}




