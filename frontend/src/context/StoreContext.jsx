import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    
    const addToCart = (itemID) => {
        if (cartItems[itemID]) {
            setCartItems((prev)=>({
                ...prev,
                 [itemID]: prev[itemID]+1
             }))
        } else {
            setCartItems((prev)=>({
               ...prev,
                [itemID]: 1
            }))
        }
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev)=>({
           ...prev,
            [itemID]: prev[itemID]-1
        }))
     }

    const getTotalCartAmount=() =>{
     let totalamount =0;
     for(const item in cartItems){
        if(cartItems[item] >0){
            let itemInfo=food_list.find((product)=>product._id===item)
            totalamount+=itemInfo.price*cartItems[item];
        }
    
     }
     return totalamount;
    }


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContextProvider