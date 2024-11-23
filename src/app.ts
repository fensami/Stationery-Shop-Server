import express, { Application, Request, Response } from "express";
import stationeryProductRouter from "./app/modules/Stationery-Product/stationeryProducts.route";

const app: Application = express();

// Middleware
app.use(express.json());

//Post :  /api/product/create-product
app.use('/api/', stationeryProductRouter)

app.get('/', (req: Request, res: Response) => {
    res.send({
        status: 200,
        message: 'hello!! Our kings welcome to Stationery shop',
        data: "kaku"
    })
})

export default app;