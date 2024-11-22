// import { Request, Response } from "express"

import app from "./app";

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello Bangladesh I am Come Back !!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

async function main() {
    try {

        app.listen(5000, () => {
            console.log(`Example app listening on port 3000`);

        })

    } catch (err) {
        console.log(err);

    }
}

main()