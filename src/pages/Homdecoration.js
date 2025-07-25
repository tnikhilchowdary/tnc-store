import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./HomeDecoration.css";

const Homedecoration = () => {
    const [home, setHome] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products/category/home-decoration")
        .then((res) => res.json())
        .then((data) => setHome(data.products))
        .catch((err) => console.log("Error", err))
    }, [])

  return (
    <div className="home">
    {home.map((item) => (
        <ProductCard key={item.id} product={item}/>
    ))}
    </div>
  );
};

export default Homedecoration;
