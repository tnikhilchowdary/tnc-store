import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">💰 ${product.price}</p>
      <p className="product-discount">🔻 {product.discountPercentage}% off</p>
      <p className="product-rating">⭐ {product.rating}</p>
      <p className="product-stock">📦 In Stock: {product.stock}</p>
      <p className="product-brand">🏷️ Brand: {product.brand}</p>
      <p className="product-category">🗂️ Category: {product.category}</p>
    </div>
  );
};

export default ProductCard;
