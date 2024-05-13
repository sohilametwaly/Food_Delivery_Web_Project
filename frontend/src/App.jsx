import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { useState } from "react";
import Loginpopup from "./components/loginpopup/Loginpopup.jsx";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContext.jsx";
import Add from "./pages/Add/Add.jsx";
import List from "./pages/List/List.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import MyOrders from "./pages/MyOrders/MyOrders.jsx";

const App = () => {
  const [showlogin, setshowlogin] = useState(false);
  const { isAdmin } = useContext(StoreContext);

  return (
    <>
      {showlogin ? <Loginpopup setshowlogin={setshowlogin} /> : <></>}
      <div className="flex flex-col gap-5 ">
        <Navbar setshowlogin={setshowlogin} />

        {isAdmin ? (
          <>
            <div className="flex ">
              <Sidebar />
              <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </>
        ) : (
          <>
            {" "}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<PlaceOrder />} />
              <Route path="/myorders" element={<MyOrders />} />
            </Routes>
          </>
        )}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes> */}
      </div>
    </>
  );
};

export default App;
