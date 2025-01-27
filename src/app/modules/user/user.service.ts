
import { User } from "./user.model";

// For Testing
const getUser = async () => {
    const result = await User.find()
    return result
}

const adminDeActivateUserInDB = async (id: string) => {
    // Find the user id
    const user = await User.findById(id);
    // Check if the user exists
    if (!user) {
        throw new Error("User not found");
    }

    // Check if the user is already blocked
    if (user.isDeActivate) {
        throw new Error("User is already DeActivate ! You can not DeActivate this user ! ");
    }
    const result = await User.findByIdAndUpdate(
        id,
        { isDeActivate: true },
        {
            new: true,
            runValidators: true,
        },
    );
    return result;
};

export const userService = {
    getUser,
    adminDeActivateUserInDB
    // adminblockUserInDB,
    // adminCanDeleteAnyBlogIntoDB
}