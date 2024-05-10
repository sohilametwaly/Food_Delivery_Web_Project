import orderModel from "../models/ordersModel.js"
import userModel from "../models/userModel.js"



const PlaceOrder =async (req,res)=>{
    const frontend_url = "http://localhost:5173"

    try{
       const newOrder =new orderModel({
            userId:req.body.userId,
            item:req.body.item,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        
    }
    catch(error){
         console.log(error);
         res.json({success:false,message:"ERROR"})   
   }

}

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

//user orders for frontend
const userOrders = async (req,res) => {
try {
    const Orders = await orderModel.find({userId:req.body.userid});
    res.json({success:true,data:orders})

} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})

}
}
    
export {PlaceOrder,listOrders,updateOrder,userOrders}