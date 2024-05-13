import { ToastContainer } from "react-toastify";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Add from "../Add/Add.jsx";
import List from "../List/List.jsx";
import Orders from "../Orders/Orders.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";

const Admin = () => {
  return (
    <div>
      <ToastContainer />
      <Sidebar />
      <Routes></Routes>
    </div>
  );
};

export default Admin;
