import React from "react";
import "./ProductCard.css"
import { FaHeart } from "react-icons/fa";

const ProductCardStore = ({product}) => {
    return(
      <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <div>
      <button className="wishlist-button">
      <FaHeart /> WISHLIST
       </button>
      </div>
      </div>
    )
}

export default ProductCardStore;