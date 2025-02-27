import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
    isDeActivate: boolean;
}

export interface UserModel extends Model<IUser> {
    // eslint-disable-next-line no-unused-vars
    isUserExistsById(_id: string): Promise<IUser>
}

export type IUserRole = keyof typeof USER_ROLE;