import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="font-custom mb-10">
      <h2 className="text-[35px] pb-4">Top dishes near you</h2>
      <div className="grid grid-cols-3 gap-3 h-full">
        {food_list
          .filter((food) =>
            category == "All" ? food : food.category === category
          )
          .map((item, index) => {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                img={item.image}
                price={item.price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FoodDisplay;
