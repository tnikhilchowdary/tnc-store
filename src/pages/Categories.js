import React from 'react';
import Category from '../componnets/CategoryCard';

const categoryData = [
  {
    id: 1,
    image: "https://media.fortuneindia.com/fortune-india/import/2024-09-10/ge1bh8tn/apple.jpg?w=640&auto=format,compress&fit=max&q=70",
    title: "Smartphones",
    offer: "50-80% OFF",
    shop: "Shop Now"
  },
  {
    id: 2,
    image: "https://www.infotechcomputers.ca/wp-content/uploads/2023/12/3.png",
    title: "Laptops",
    offer: "30-60% OFF",
    shop: "Shop Now"
  },
  {
    id: 3,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfV_9wjWaHS5Fe8BR3y7l9uKX5iiLA3_EmcYU7v92UtX1fRh7jiy7l9IzUrAVwP23u4asrGarrQ7QpjbopLSWe4hYrS7lF-InJY-66foA5kkgp_kWGZpKT",
    title: "Fragrances",
    offer: "40-70% OFF",
    shop: "Shop Now"
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcToTZEqac_NZda-bzacmihIWwGja0sIuWy9o-PABpI_bLNZwGNYOIjRdLN34DW_lOl-WWny7Kpl5W0SJf-CFIruQHznmRGgQEpYkpkRokzW94Hn9VUBXqvXGA",
    title: "Skincare",
    offer: "25-60% OFF",
    shop: "Shop Now"
  },
  {
    id: 5,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS50sjmKiRKtxFeOakL84Iu6hOYSZlXhhQ0dmXMQGaU9pVUfe_7cyaj6AVx__3v5fbz0gpN6q7b0CVZwNQ-13DyiaU9EjyA3g",
    title: "Groceries",
    offer: "10-30% OFF",
    shop: "Shop Now"
  },
  {
    id: 6,
    image: "https://img.freepik.com/premium-photo/modern-living-room-interior-design-home-decoration-generative-ai_902049-7254.jpg",
    title: "Home Decoration",
    offer: "50-75% OFF",
    shop: "Shop Now"
  },
  {
    id: 7,
    image: "https://t3.ftcdn.net/jpg/05/28/57/64/360_F_528576447_j08koWfGyhXMweJzDz6qzx6yYBBKJSnM.jpg",
    title: "Furniture",
    offer: "35-70% OFF",
    shop: "Shop Now"
  },
  {
    id: 8,
    image: "https://cdn.shopify.com/s/files/1/0341/4805/7228/files/banner_f8cf65ef-66ac-4529-86fe-5b82d29dd4e8.jpg?v=1675063439",
    title: "Tops",
    offer: "45-65% OFF",
    shop: "Shop Now"
  },
  {
    id: 9,
    image: "https://images.bestsellerclothing.in/data/Women/Dresses/31-May-2022/232594401_g1.jpg",
    title: "Womens Dresses",
    offer: "60-80% OFF",
    shop: "Shop Now"
  },
  {
    id: 10,
    image: "https://cdn.shopify.com/s/files/1/0360/0817/0994/products/WhiteShoes3_1000x.jpg?v=1674566075",
    title: "Womens Shoes",
    offer: "30-50% OFF",
    shop: "Shop Now"
  },
  {
    id: 11,
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Classicshirt_e0a4eaa4-1b8b-4704-b819-0c6887782c30_1000x.jpg?v=1650369970",
    title: "Mens Shirts",
    offer: "50-70% OFF",
    shop: "Shop Now"
  },
  {
    id: 12,
    image: "https://hips.hearstapps.com/hmg-prod/images/best-white-sneakers-1672868192.jpg",
    title: "Mens Shoes",
    offer: "40-60% OFF",
    shop: "Shop Now"
  },
  {
    id: 13,
    image: "https://www.jiomart.com/images/product/original/rvuvzws6jv/luxur-men-s-fashion-stylish-analog-watch-black-color-product-images-rvuvzws6jv-0-202306120454.jpg?im=Resize=(420,420)",
    title: "Mens Watches",
    offer: "25-50% OFF",
    shop: "Shop Now"
  },
  {
    id: 14,
    image: "https://m.media-amazon.com/images/I/81oe2CMoeNL._AC_UY1100_.jpg",
    title: "Womens Watches",
    offer: "20-40% OFF",
    shop: "Shop Now"
  },
  {
    id: 15,
    image: "https://img.faballey.com/images/Product/HTG01982Z/1.jpg",
    title: "Womens Bags",
    offer: "30-70% OFF",
    shop: "Shop Now"
  },
  {
    id: 16,
    image: "https://assets.ajio.com/medias/sys_master/root/20220617/0U0B/62ac4c55aeb26921afed8bb0/-473Wx593H-463935968-multi-MODEL.jpg",
    title: "Womens Jewellery",
    offer: "40-60% OFF",
    shop: "Shop Now"
  },
  {
    id: 17,
    image: "https://media.gq.com/photos/63e27e90b2fd002d760c24b1/master/pass/Best-Sunglasses-Lead.jpg",
    title: "Sunglasses",
    offer: "50-85% OFF",
    shop: "Shop Now"
  },
  {
    id: 18,
    image: "https://cdn.motor1.com/images/mgl/zAAkN/s1/2024-hyundai-sonata-n-line.jpg",
    title: "Automotive",
    offer: "10-40% OFF",
    shop: "Shop Now"
  },
  {
    id: 19,
    image: "https://media.zigcdn.com/media/model/2022/Oct/2022-ktm-rc-200-in-action_930x620.jpg",
    title: "Motorcycle",
    offer: "15-35% OFF",
    shop: "Shop Now"
  },
  {
    id: 20,
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/02/ledbulbs-2048px-0723.jpg",
    title: "Lighting",
    offer: "30-55% OFF",
    shop: "Shop Now"
  }
];


const Categories = () => {
    return(
        <div>
           {categoryData.map((item) => (
            <Category
            key={item.id}
            image={item.image} 
            title={item.title}
            offer={item.offer}
            shop={item.shop}
            />
           ))}
        </div>
    )
}

export default Categories;