import { assets } from "../../assets/adminAssets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="border-r-2 h-full w-1/6 min-h-100 b-t-0  sm:text-xs md:text-sm lg:text-xl">
      <div className=" flex flex-col gap-20 pt-12 pl-8">
        <NavLink
          to="/add"
          className="flex items-center gap-2 border-2 border-r-0 border-gray-300 current:border-[#ff6347] current:bg-[#fff0ed] p-2 rounded-l cursor-pointer md:gap-8 lg:gap-128 focus:text-xl"
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden sm:block md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center gap-2 md:gap-8 lg:gap-128 border-2 border-r-0 border-gray-300  current:border-[#ff6347] current:bg-[#fff0ed]  p-2 rounded-l border-radius-2 cursor-pointer "
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden sm:block md:block">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex items-center gap-2 md:gap-8 lg:gap-128 border-2 border-r-0 border-gray-300  current:border-[#ff6347] current:bg-[#fff0ed]   p-2 rounded-l border-radius-2 cursor-pointer"
        >
          <img src={assets.order_icon} alt="" />
          <p className=" hidden sm:block md:block">Orders</p>
        </NavLink>
        <NavLink
          to="/dashboard"
          className="flex items-center gap-2 md:gap-8 lg:gap-128 border-2 border-r-0 border-gray-300  current:border-[#ff6347] current:bg-[#fff0ed]   p-2 rounded-l border-radius-2 cursor-pointer"
        >
          <img
            src={assets.dashboard_icon}
            alt=""
            className="max-w-[17%] max-h-[17%]"
          />
          <p className=" hidden sm:block md:block">Dashboard</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
