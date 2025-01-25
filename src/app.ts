import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import cors from "cors";
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors())
//Applications Routes 
app.use("/api", router);

const test = async (req: Request, res: Response) => {
    res.send({
        status: 200,
        message: "hello!! welcome to Stationery shop Server"
    })
}

app.get('/', test)

export default app;