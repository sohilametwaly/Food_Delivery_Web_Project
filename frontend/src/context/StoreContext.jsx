import { createContext, useEffect, useState } from "react";
import { food_list, header } from "../assets/frontAssets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:3000";
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [Food_list, setFoodList] = useState(food_list);

  const addToCart = async (itemID) => {
    if (cartItems?.hasOwnProperty(itemID)) {
      setCartItems((prev) => ({
        ...prev,
        [itemID]: prev[itemID] + 1,
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemID]: 1,
      }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemID },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemID) => {
    setCartItems((prev) => ({
      ...prev,
      [itemID]: prev[itemID] - 1,
    }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemID },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalamount = 0;
    if (cartItems != null) {
      for (let item in cartItems) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) totalamount += itemInfo.price * cartItems[item];
      }
    }
    return totalamount;
  };
  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };
  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
    console.log(cartItems);
  };

  const clearCart = () => {
    setCartItems({});
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
    console.log(token);
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    token,
    isAdmin,
    setIsAdmin,
    setToken,
    clearCart,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
