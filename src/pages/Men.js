import React, {useEffect, useState} from "react";
import { data } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "./Men.css";

const Men = () => {
    const [menProducts, setMenProducts] = useState([]);
    useEffect(() => {
        const fetchMenProducts = async () => {
            const urls = [
                'https://dummyjson.com/products/category/mens-shirts',
                'https://dummyjson.com/products/category/mens-shoes',
                'https://dummyjson.com/products/category/mens-watches',
            ];

            const responses = await Promise.all(
                urls.map(url => fetch(url).then(res => res.json()))
            );

            const combinedProducts = responses.flatMap(data => data.products);
            setMenProducts(combinedProducts)
        };
        fetchMenProducts();
    }, [])
    return(
        <div className="men-products-container" >
            {menProducts.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Men;