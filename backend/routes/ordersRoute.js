import {placeOrder, listOrders,updateOrder,userOrders} from "../controllers/orderController.js"
import authMiddleware from "../middleware/auth.js"
import express from "express"

const orderRouter = express.Router()

orderRouter.get('/list', listOrders)
orderRouter.post('/update', updateOrder)
orderRouter.post('/place',authMiddleware,PlaceOrder)
orderRouter.post('/userorders',authMiddleware ,userOrders)
export default orderRouter