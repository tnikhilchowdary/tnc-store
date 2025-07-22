import React, { useContext } from "react";
import "./ProductCard.css";
import { FaHeart } from "react-icons/fa";
import WishList, { WishListContext } from "../context/WishList"; 

const ProductCardStore = ({ product }) => {
  const { addToWishList } = useContext(WishListContext); 

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <div>
        <button className="wishlist-button" onClick={() => addToWishList(product)}>
          <FaHeart color={WishList ? "red" : "black" }/> WISHLIST
        </button>
      </div>
    </div>
  );
};

export default ProductCardStore;
