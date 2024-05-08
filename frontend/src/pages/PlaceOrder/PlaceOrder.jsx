import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    return (
    <form className="place-order  mx-20 mt-40 flex items-start justify-between gap-50">
        <div className="place-order-left w-full max-w-max30 md:max-w-500">
         <p className="title text-2xl font-semibold mb-10">Delivery Information</p>
         <div className="multi-fields">
            <input type="text"placeholder="First Name"  className="mb-5  w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red" />
            <input type="text" placeholder="Last Name"   className="mb-5  mb-15 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red" />
         </div>
         <input type="text"placeholder="Email Address"  className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red" />
         <input type="text" placeholder="Street"   className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"/>
         <div className="multi-fields">
            <input type="text"placeholder="city"  className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red" />
            <input type="text" placeholder="State"  className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red" />
         </div>
         <div className="multi-fields">
            <input type="text"placeholder="Zip code"   className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"/>
            <input type="text" placeholder="Country"  className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red" />
         </div>
         <input type="text"  placeholder="Phone"  className="mb-5 w-[600px] p-2 border-2 border-gray-300 rounded-md outline-red"/>
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
                            <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
                        </div>
                        <hr className="my-1" />
                    </div>
                    </div>
                    <button className="total button bg-red-600 text-white px-6 py-3 rounded-md cursor-pointer ">PROCEED TO PAYMENT</button>
                </div>

        
        </div>
    </form>
    )
}

export default PlaceOrder
