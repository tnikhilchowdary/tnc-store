import React from "react";

const Category = ({id, image, title, offer, shop}) => {
    return(
        <div className="">
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p>{offer}</p>
            <p>{shop}</p>
        </div>
    )
}


export default Category;