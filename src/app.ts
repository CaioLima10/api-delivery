import express from "express"
import "express-async-errors"

import { routes } from "./routes"

import { errorHandline } from "./middlewares/error-handling"

const app = express()
app.use(routes)

app.use(express.json())
app.use(errorHandline)

export { app }