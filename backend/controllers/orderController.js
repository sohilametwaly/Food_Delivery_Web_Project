import orderModel from "../models/ordersModel.js"

const listOrders = async (req, res, next) => {
try {
    const orders = await orderModel.find({})
    res.status(200).json({success: true, data: orders})
} catch (error) {
    res.json({success:false, error: error.message})
}
}

const updateOrder = async (req, res, next) => { 
    try {
       await orderModel.findByIdAndUpdate(req.body.id,{status:req.body.status})
       res.status(200).json({success: true, message:"Order updated successfully"})
    } catch (error) {
        res.json({success:false, message: error.message})

    }
}
 
export {listOrders,updateOrder}