import { useState } from "react";
import { menu_list } from "../../assets/frontAssets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const [clickedImage, setClickedImage] = useState();
  const onClickHandler = (index) => {
    setClickedImage(index);
  };

  return (
    <div className="font-custom flex flex-col gap-4 pt-[3px]" id="ExploreMenu">
      <h1 className="font-bold text-[28px]">Explore our menu</h1>
      <p className="w-[70%]">
        Choose from a diverse menu featuring a delectable array of dishes, Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time
      </p>
      <div className="flex justify-between items-center">
        {menu_list.map((menuItem, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 hover:cursor-pointer"
              onClick={() =>
                setCategory((prev) =>
                  menuItem.menu_name == prev ? "All" : menuItem.menu_name
                )
              }
            >
              <img
                src={menuItem.menu_image}
                className={`max-h-[100px] rounded-[50px] ${
                  category === menuItem.menu_name
                    ? "border-2 border-[#ff6347] p-2 rounded-[10px] transition-[3s] "
                    : ""
                }`}
                onClick={() => onClickHandler(index)}
              />
              <p
                className={`text-center text-gray-500 ${
                  category === menuItem.menu_name ? "text-[#ff6347]" : ""
                }`}
              >
                {menuItem.menu_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
