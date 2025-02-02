import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();
import cookieParser from 'cookie-parser';
// Parsers
app.use(express.json());
app.use(cookieParser());
// app.use(cors());

app.use(cors({ origin: 'https://stationery-shop-client-seven.vercel.app', credentials: true }));
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// app.use(cors({ origin: '*', credentials: true }));
//Applications Routes 
app.use("/api", router);

const test = async (req: Request, res: Response) => {
    res.send({
        status: 200,
        message: "hello!! welcome to Stationery shop Server"
    })
}

app.get('/', test)
app.use(globalErrorHandler)

export default app;