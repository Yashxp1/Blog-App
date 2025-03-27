import express from 'express'
import { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.listen(3001, () => {
  console.log("server started")
})