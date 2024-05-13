import { useContext } from "react";
import { assets } from "../../assets/frontAssets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, img }) => {
  const { addToCart, removeFromCart, cartItems, url } =
    useContext(StoreContext);

  return (
    <div className="rounded-[20px] shadow-xl flex flex-col gap-2 ">
      <div>
        <img
          src={img}
          alt=""
          className="rounded-tl-[20px] rounded-tr-[20px] w-full h-[200px]"
        />
      </div>
      <div className="flex flex-col gap-1 p-4 relative">
        {!cartItems?.hasOwnProperty(id) ? (
          <img
            src={assets.add_icon_white}
            onClick={() => {
              addToCart(id);
            }}
            className="max-h-[40px] max-w-[40px] bottom-[108%] right-[1.5%] hover:cursor-pointer bottom-[140px] right-[5px] absolute"
          />
        ) : (
          <div className="flex gap-2 hover:cursor-pointer bottom-[108%] right-[1.5%] absolute bg-white rounded-[20px] p-1 items-center ">
            <img
              src={assets.remove_icon_red}
              onClick={() => {
                removeFromCart(id);
              }}
            />
            <p className="font-bold text-[#ff6347]">{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => {
                addToCart(id);
              }}
            />
          </div>
        )}
        <div className="flex justify-between">
          <p className="font-bold text-[20px]">{name}</p>
          <img
            src={assets.rating_starts}
            alt=""
            className="w-[75px] max-h-[25px] self-center"
          />
        </div>
        <p className="text-gray-500 text-[12px]">{description}</p>
        <p className="text-[#ff6347] text-[22px] font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
