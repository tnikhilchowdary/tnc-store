import React, { use, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Home.css";
import HomeLogo from "../HomeLogo.png";
import Categories from "./Categories";
import Men from "../Men-Sale.png"
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  return (
    <div>
    <div>
    </div>
    <div>
      <div onClick={() => navigate("/menoffers")}>
        <img src={Men} alt="men-logo" className="men-logo"/>
      </div>
      <h1>Shop By Category</h1>
      <Categories />
    </div>
    </div>
  );
};

export default Home;
