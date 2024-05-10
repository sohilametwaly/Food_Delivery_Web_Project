import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const Orders = () => {
  const url = "http://localhost:3000";

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`);
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const changeHandler = async (event, orderId) => {
    const response = await axios.post(`${url}/api/order/update`, {
      id: orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      toast.success(response.data.message);
      await fetchOrders();
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="font-custom flex flex-col w-[80%] pl-2 gap-2">
      <p className="text-[#ff6347] font-bold">Order Page</p>
      {orders.map((order, index) => (
        <div
          key={index}
          className="flex border-2 rounded-xl p-2  justify-between h-[50%]"
        >
          <img src={assets.parcel_icon} alt="" className="max-h-[50%]" />
          <div className="flex flex-col justify-between  gap-2">
            <p className="">
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + ",";
                }
              })}
            </p>
            <p className="text-gray-500 text-[14px]">
              {order.address.firstName + " " + order.address.lastName}
            </p>
            <p className="text-gray-500 text-[14px]">
              {order.address.street + ","}
            </p>
            <p className="text-gray-500 text-[14px]">
              {order.address.city +
                "," +
                order.address.state +
                "," +
                order.address.country +
                "," +
                order.address.zipcode}
            </p>
            <p className="text-gray-500 text-[14px]">{order.address.phone}</p>
          </div>
          <p className="text-top text-gray-500">Items:{order.amount}</p>
          <p className="text-gray-500 ">
            $
            {order.items.reduce(
              (acc, value) => acc + value.price * value.quantity,
              0
            )}
          </p>
          <select
            name="status"
            onChange={(e) => changeHandler(e, order._id)}
            value={order.status}
            className="bg-[#fff0ed] border-2 border-gray-200 rounded-xl max-h-[40px] p-2 text-[15px]"
          >
            <option value="Food Processing">Food Processing</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default Orders;
