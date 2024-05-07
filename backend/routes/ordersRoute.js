import { listOrders,updateOrder} from "../controllers/orderController.js"
import authMiddleware from "../middleware/auth.js"
import express from "express"

const orderRouter = express.Router()

orderRouter.get('/list', listOrders)
orderRouter.post('/update', updateOrder)

export default orderRouter