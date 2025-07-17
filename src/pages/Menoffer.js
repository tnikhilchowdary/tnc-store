import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import ProductCardStore from "../components/ProductCardStore";


const Menoffer = () => {
    const [menOffer, setMenOffer] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res) => res.json())
        .then((data) => setMenOffer(data))
        .catch((err) => console.log("Error", err))
    }, [])
    return(
        <div className="category-container">
            {menOffer.map((men) => (
                <ProductCardStore key={men.id} product={men} />
            ))}
        </div>
    )
}

export default Menoffer;