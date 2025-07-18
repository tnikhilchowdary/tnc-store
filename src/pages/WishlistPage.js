import { useContext } from "react";
import { WishListContext } from "../context/WishList";

const WishlistPage = () => {
  const { wishList } = useContext(WishListContext);

  return (
    <div>
      <h1>WishList Page</h1>
      {wishList.length === 0 ? (
        <p>No items in wishList</p>
      ) : (
        wishList.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} width={100} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default WishlistPage;
