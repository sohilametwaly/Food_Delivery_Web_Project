import { useContext } from "react";
import { assets } from "../../assets/assets.js";
import { HashLink as Link } from "react-router-hash-link";
import { StoreContext } from "../../context/StoreContext.jsx";

const Navbar = ({setshowlogin}) => {
  const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className="flex items-center justify-between pt-2 w-[80%] m-auto ">
      <Link to='/'><img src={assets.logo} alt="" className="max-w-[120px]" /></Link>
      <ul className="flex text-[#49557e] gap-3 hover:cursor-pointer hover:text-black text-[18px] font-custom">
        <Link
          to="/"
          className="hover:font-bold hover:text-[20px] hover:text-[#6477b9] transition-[0.3s]"
        >
          Home
        </Link>
        <Link
          to="#ExploreMenu"
          smooth
          className="hover:font-bold hover:text-[20px] hover:text-[#6477b9] transition-[0.3s]"
        >
          Menu
        </Link>
        <Link
          smooth
          to="#AppDownload"
          className="hover:font-bold hover:text-[20px] hover:text-[#6477b9] transition-[0.3s]"
        >
          Mobile-app
        </Link>
        <Link
          to="#Footer"
          smooth
          className="hover:font-bold hover:text-[20px] hover:text-[#6477b9] transition-[0.3s]"
        >
          Contact us
        </Link>
      </ul>
      <div className="flex justify-between w-[20%] items-center hover:cursor-pointer gap-5">
        <img src={assets.search_icon} alt="" className="max-h-[20px]" />
        <div className="relative">
          <Link to='/cart'><img src={assets.basket_icon} alt="" className="max-h-[25px]" /></Link>
          <div className={getTotalCartAmount()===0?"":"bg-[#ff6347] rounded-[5px] h-[10px] w-[10px] z-[20] absolute right-[-7px] top-[-5px]" }></div>
        </div>

        <button onClick={() => setshowlogin(true)} className="text-[#49557e] hover:bg-[#fff4f2] border-2 rounded-xl p-[4px]  font-custom transition-[0.3s] w-[150px]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
