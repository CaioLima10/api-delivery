import express from "express"
import "express-async-errors"
import { errorHandline } from "./middlewares/error-handling"

const app = express()

app.use(express.json())
app.use(errorHandline)


export { app }