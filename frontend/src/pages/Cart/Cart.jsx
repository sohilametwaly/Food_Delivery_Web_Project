import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className="cart mt-20 mx-20">
            <div className="cart-items">
                <div className="cart-items-title grid grid-cols-6 items-center text-gray-500 text-xs">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={item._id}>
                                <div className="cart-items-title cart-items-item grid grid-cols-6 items-center text-gray-500 text-xs mx-4" style={{ margin: '10px 0', color: 'black' }}>
                                    <img src={url+"/images/"+item.image} alt="" className="w-10" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p className="cross cursor-pointer " onClick={() => removeFromCart(item._id)}>x</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                })}
            </div>
            <div className="cart-bottom mt-20 justify-between gap-12vw md:gap-20">
                <div className="cart-total flex flex-col gap-20">
                    <h2 className="text-2xl font-bold">Cart Total</h2>
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
                            <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
                        </div>
                        <hr className="my-1" />
                    </div>
                    <button className="total button bg-red-600 text-white px-6 py-3 rounded-md cursor-pointer " onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <p className="my-8" />
                <div>
                    <div className="cart-promocode flex ">
                        <div>
                            <p className="text-gray-500"> If you have a promo code, enter it here </p>
                            <div className="cart-promocode-input mt-5 flex justify-between items-center bg-white rounded-md" >
                                <input type="text" placeholder="promo code  " className="bg-gray-200 border-none outline-none pl-10 h-11" />
                                <button className="w-max10vw md:w-150px px-5 py-3 bg-black border-none text-white rounded-md">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
