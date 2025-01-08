import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StroeContext } from "../../Context/StoreContext";
import Fooditem from "../FoodItem/Fooditem";

const FoodDisplay = ({ category }) => {
  // import useContext state
  const { food_list } = useContext(StroeContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Fooditem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
