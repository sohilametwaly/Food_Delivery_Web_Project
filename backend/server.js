import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connceDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import orderRouter from './routes/ordersRoute.js'

//app config
const app = express()
const port = 3000

//middleware
app.use(express.json())
app.use(cors())


//db connection
connceDB()


//api endpoints

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/order",orderRouter)

app.get("/", (req,res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})

