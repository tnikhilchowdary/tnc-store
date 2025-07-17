import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Women.css";

const Women = () => {
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    const fetchWomenProducts = async () => {
      const urls = [
        'https://dummyjson.com/products/category/womens-dresses',
        'https://dummyjson.com/products/category/womens-shoes',
        'https://dummyjson.com/products/category/womens-watches',
      ];

      const responses = await Promise.all(
        urls.map(url => fetch(url).then(res => res.json()))
      );

      const combinedProducts = responses.flatMap(data => data.products);
      setWomenProducts(combinedProducts);
    };

    fetchWomenProducts();
  }, []);

  return (
    <div className="men-products-container">
      {womenProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Women;
