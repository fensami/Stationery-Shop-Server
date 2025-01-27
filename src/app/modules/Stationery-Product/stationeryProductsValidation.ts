import { z } from "zod";


const createProductsValidationSchema = z.object({
    body: z.object({
        name: z.string({ required_error: "name Must Be Provided" }),
        brand: z.string({ required_error: "brand Must be Provided" }),
        price: z.number({ required_error: "Price Must be provided" }),
        category: z.string({ required_error: "category must be provided" }),
        description: z.string({ required_error: "description must be provided" }),
        quantity: z.number({ required_error: "quantity must be provided" }),
    })
})
const updateProductsValidationSchema = z.object({
    body: z.object({
        name: z.string({ required_error: "name Must Be Provided" }).optional(),
        brand: z.string({ required_error: "brand Must be Provided" }).optional(),
        price: z.number({ required_error: "Price Must be provided" }).optional(),
        category: z.string({ required_error: "category must be provided" }).optional(),
        description: z.string({ required_error: "description must be provided" }).optional(),
        quantity: z.number({ required_error: "quantity must be provided" }).optional(),
    })
})


export const productValidationSchema = {
    createProductsValidationSchema,
    updateProductsValidationSchema
}
