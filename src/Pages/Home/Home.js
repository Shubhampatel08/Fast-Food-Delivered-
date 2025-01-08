import React, { useState } from "react";
import "./Home.css";
import Header from "../../Componets/Header/Header";
import ExplorMenu from "../../Componets/ExplorMenu/ExplorMenu";
import FoodDisplay from "../../Componets/FoodDisplay/FoodDisplay";
import AppeDownload from "../../Componets/AppeDownload/AppeDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExplorMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppeDownload />
    </div>
  );
};

export default Home;
