import { useSelector  } from "react-redux";
import WishlistItem from "./wishlistItem/WishlistItem";

function Wishlist() {
    const wishlist = useSelector((state) => state.counter.wishList);

  return (

      <div className="container-fluid min-vh-100 py-4">
      <h2 className="mb-4 text-center">🛒 ❤ Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-center fs-4 text-muted">Your wishlist is empty 💔 🛒</p>
      ) : (
        <div className="g-4">
          {wishlist.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
   
  )
}

export default Wishlist