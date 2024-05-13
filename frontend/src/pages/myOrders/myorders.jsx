import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/frontAssets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/order/userorders",
      {},
      {
        headers: { token: token },
      }
    );

    if (response.data.success) {
      const orders = response.data.orders;
      console.log(orders);

      setData(orders);
      console.log(data);
    } else {
      toast.error("Please Login first");
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="m-auto font-custom w-[80%]">
      <h2 className="font-bold text-[25px] text-[#ff6347]">My Orders</h2>
      <div className="flex flex-col gap-[20px] mt-[30px]">
        {data.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-6 items-center gap-[30px] text-[14px] p-[10px] text-[#454545] border-[1px] border-[#ff6347] "
          >
            <img src={assets.parcel_icon} alt="" className="w-[50px]" />
            <p>
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + ",";
                }
              })}
            </p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p>
              <span className="text-[#ff6347]">&#x25cf;</span>
              <b className="text-[#454545] font-bold">{order.status}</b>
            </p>
            <button
              onClick={fetchOrders}
              className="border-none px-[12px] py-[0px] rounded-[4px] bg-[#ffe1e1] hover:cursor-pointer text-[#454545]"
            >
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
