import React, { createContext, useState } from "react";

// ✅ Rename to PascalCase
export const WishListContext = createContext();

const WishList = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const addToWishList = (product) => {
    const exists = wishList.find((item) => item.id === product.id);
    if (!exists) {
      setWishList([...wishList, product]);
    }
  };

  const removeFromWishList = (id) => {
    setWishList(wishList.filter((item) => item.id !== id));
  };

  return (
    <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export default WishList;
