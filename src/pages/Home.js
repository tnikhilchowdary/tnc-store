import React, { useEffect, useState } from "react";
import ProductCard from "../componnets/ProductCard";
import "./Home.css";
import HomeLogo from "../HomeLogo.png";
import Categories from "./Categories";


const Home = () => {
  const [products, setProducts] = useState([]);

  
  return (
    <div>
    <div>
    </div>
    <div>
      <h1>Shop By Category</h1>
      <Categories />
    </div>
    </div>
  );
};

export default Home;
