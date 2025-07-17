import React from "react";
import './CategoryCard.css';

const Category = ({ id, image, title, offer, shop }) => {
  return (
    <div className="category-card">
      <img src={image} alt={title} className="category-image" />
      <h4 className="category-title">{title}</h4>
      <p className="category-offer">{offer}</p>
    </div>
  );
};

export default Category;
