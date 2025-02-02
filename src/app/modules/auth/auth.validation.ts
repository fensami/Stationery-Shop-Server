import { z } from "zod";

const loginValidationSchema = z.object({
    body: z.object({
        email: z.string({ required_error: "email Is required !" }).email(),
        password: z.string({ required_error: "password is required !" })
    })
})


// const forgetPasswordValidaitonSchema = z.object({
//     body: z.object({
//         _id: z.string({ required_error: "user id is required" })
//     })
// })
const refreshTokenValidationSchema = z.object({
    cookies: z.object({
        refreshToken: z.string({
            required_error: 'Refresh token is required!',
        }),
    }),
});


export const authValidation = {
    loginValidationSchema,
    // forgetPasswordValidaitonSchema,
    refreshTokenValidationSchema
}