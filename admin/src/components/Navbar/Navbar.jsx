import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="flex flex justify-between items-center p-2 max-h-1/8 z[20] w-[90%] m-[auto]">
      <img src={assets.logo} className="w-[150px] max-h-[80px]" />
      <img src={assets.profile_image} className="w-[45px] max-h-[45px]" />
    </div>
  );
};

export default Navbar;
