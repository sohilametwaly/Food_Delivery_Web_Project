import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { HashLink as Link } from "react-router-hash-link";

const PlaceOrder = () => {
  const { getTotalCartAmount, food_list, cartItems, url, clearCart, token } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    const token = localStorage.getItem("token");
    console.log(token);
    let response = await axios.post(
      "http://localhost:3000/api/order/place",
      orderData,
      {
        headers: { token },
      }
    );
    if (response.data.success) {
      //const { session_url } = response.data;
      clearCart();
      navigate("/");
      //window.location.replace(session_url);
    } else {
      console.log(response.data.message);
      alert("Error");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() == 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form
      onSubmit={placeOrder}
      className="place-order  mx-20 mt-20 flex items-start justify-between gap-50"
    >
      <div className="place-order-left w-full max-w-max30 md:max-w-500">
        <p className="title text-2xl font-semibold mb-10">
          Delivery Information
        </p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
            className="mb-5  w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
            className="mb-5  mb-15 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="text"
          placeholder="Email Address"
          className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
          className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"
        />
        <div className="multi-fields">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="city"
            className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
            className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip code"
            className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
            className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
          className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"
        />
      </div>
      <div className="place-order-right w-full max-w-max40 md:max-w-500">
        <div className="cart-total flex flex-col gap-20">
          <h2 className="text-2xl font-bold">Cart Total</h2>
          <div>
            <div>
              <div className="cart-total-details flex justify-between text-gray-500">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className="my-2" />
              <div className="cart-total-details flex justify-between text-gray-500">
                <p>Delivery Fee</p>
                <p>${2}</p>
              </div>
              <hr className="my-2" />
              <div className="cart-total-details flex justify-between text-gray-500">
                <b>Total</b>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </b>
              </div>
              <hr className="my-1" />
            </div>
          </div>
          <button
            type="submit"
            className="total button bg-red-600 text-white px-6 py-3 rounded-md cursor-pointer "
          >
            PLACE YOUR ORDER
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
