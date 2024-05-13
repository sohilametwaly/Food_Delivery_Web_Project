import orderModel from "../models/ordersModel.js";
import userModel from "../models/userModel.js";

const PlaceOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";
  console.log(req.body);
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    res.json({ success: true, message: "Order created successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listOrders = async (req, res, next) => {
  try {
    const orders = await orderModel.find({});
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

const updateOrder = async (req, res, next) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });
    res
      .status(200)
      .json({ success: true, message: "Order updated successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//user orders for frontend
const userOrders = async (req, res) => {
  try {
    console.log(req.body.userId);
    const orders = await orderModel.find({ userId: req.body.userId });
    console.log(orders);

    res.json({ success: true, orders: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { PlaceOrder, listOrders, updateOrder, userOrders };
