import { useDispatch } from "react-redux";
import Rating from "../../ratingStars/Rating";
import toast from "react-hot-toast";
import { removeFromWishlist } from "../../../store/countSlice";

function WishlistItem({ item }) {
  const dispatch = useDispatch();
//   const wishlist = useSelector((state) => state.counter.wishList);

  function handleClick() {
    dispatch(removeFromWishlist(item));
    toast.error("Item removed from wishList");
  }

  return (
    <div className="container p-4 bg-light mt-5 rounded-4 d-flex justify-content-between">
      <div>
        <h5>{item.title}</h5>
        <p className="w-50">{item.description}</p>
        <p>
          {" "}
          <Rating value={item.rating} />{" "}
        </p>

        <p>
          {" "}
          Price:<strong> ${item.price}</strong>{" "}
        </p>

        <div className="d-flex align-items-center justify-content-between">
          <button
            className="btn btn btn-outline-warning mt-5"
            onClick={handleClick}
          >
            Remove From Wishlist
          </button>
        </div>
      </div>

      <img
        src={item.images[0]}
        className=""
        alt={item.title}
        style={{ maxWidth: "300px" }}
      />
    </div>
  );
}

export default WishlistItem;
