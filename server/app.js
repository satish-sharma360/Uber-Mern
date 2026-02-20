import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import cookieParser from 'cookie-parser'

import connectToDb from './config/db.js'
import userRoute from './routes/user.routes.js'
import captainRoutes from './routes/captain.routes.js'

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/api/users',userRoute)
app.use('/api/captains',captainRoutes)
connectToDb()

export default app;