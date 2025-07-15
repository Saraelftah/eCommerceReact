import { useContext } from "react";
import Rating from "../../ratingStars/Rating";
import toast from "react-hot-toast";
import { ShoppingCartContext } from "../../../context/cartContext";
import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decreament,
  addCart,
  removeFromCart,
} from "../../../store/countSlice";

function CartItem({ item }) {
  const { setCartItems } = useContext(ShoppingCartContext);

  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.counter.cartItem);
  const foundItem = cartitem.find((i) => i?.id === item?.id);

  function handleClick() {
    toast.error("Item removed from cart");
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));
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
        <div className="mt-3 d-flex justify-content-center gap-5">
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              dispatch(increament());
              dispatch(addCart(item));
            }}
          >
            +
          </button>

          <span>{foundItem?.count || 0}</span>

          <button
            className="btn btn-outline-warning"
            onClick={() => {
              dispatch(decreament());
              dispatch(removeFromCart(item));
            }}
          >
            -
          </button>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <button
            className="btn btn btn-outline-warning mt-5"
            onClick={handleClick}
          >
            Remove From Cart
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

export default CartItem;
