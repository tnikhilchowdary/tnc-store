import react, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import ProductCard from "../componnets/ProductCard";


const Menoffer = () => {
    const [menOffer, setMenOffer] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res) => res.json())
        .then((data) => setMenOffer(data))
        .catch((err) => console.log("Error", err))
    })
    return(
        <div>
            {menOffer.map((men) => (
                <ProductCard key={men.id} product={menOffer}/>
            ))}
        </div>
    )
}

export default Menoffer;