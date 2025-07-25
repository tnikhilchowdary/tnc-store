import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "./beauty.css";

const Beauty = () => {
    const [beauty, setBeauty] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products/category/beauty")
        .then((res) => res.json())
        .then((data) => setBeauty(data.products))
        .catch((err) => console.log("Error", err))
    }, [])
  return (
    <div className="beauty">
      {beauty.map((b) => (
        <ProductCard key={b.id} product={b}/>
      ))}
    </div>
  );
};

export default Beauty;
