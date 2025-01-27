import { z } from "zod";

const createOrderValidationSchema = z.object({
    body: z.object({
        quantity: z.number({ required_error: "Quantity Must Be provided" })
    })
})



export const orderValidationSchema = {
    createOrderValidationSchema
}