import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/cartContext";
import {
  addCart,
  addToWishlist,
  decreament,
  increament,
  removeFromCart,
  removeFromWishlist
} from "../../store/countSlice";
import Rating from "../ratingStars/Rating";

function Product({ product }) {

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.counter.cartItem);
 
  const foundEle = cartItem?.find((el) => el?.id === product?.id);
  // console.log("foundEle",foundEle);

  // get dispatch and selector for wishlist
  const wishlist = useSelector ((state)=> state.counter.wishList);
  const isInWishlist = wishlist.some((item)=>item?.id === product.id)


  const { cartItems, setCartItems } = useContext(ShoppingCartContext);


  const inCart = cartItems.some((item) => item.id === product.id);

  function handleClick() {
    if (inCart) {
      setCartItems((prev) => prev.filter((item) => item.id !== product.id));
      toast.error("Item Removed from cart");
    } else {
      setCartItems((prev) => [...prev, product]);
      toast.success("Item added to cart");
    }
  }

  function handleWishlist() {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product))
      toast.error("Item removed from wishlist");
    }else{
      dispatch(addToWishlist(product));
      toast.success("Item added to wishlist");
    }
  }

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
      <div className="card w-100 shadow p-3 mb-5 bg-body-tertiary rounded">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            className="card-img-top"
            alt={product.title}
          />
        </Link>

        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {" "}
            <Rating value={product.rating} />{" "}
          </p>

          <p className="card-text">
            {" "}
            Price:<strong> ${product.price}</strong>{" "}
          </p>

          <div className="d-flex align-items-center justify-content-between">
            <button
              className={`btn ${inCart ? "btn-danger" : "btn-outline-warning"}`}
              onClick={handleClick}
            >
              {inCart ? "Remove From Cart" : "Add To Cart"}
            </button>

            <button onClick={handleWishlist} className="btn">
              <FontAwesomeIcon
                icon={isInWishlist ? faHeartSolid : faHeartRegular}
                style={{ color: isInWishlist ? "#8A0000" : "#8A0000" }}
                className="fs-4"
              />
            </button>
          </div>
          
          <div className="mt-3 d-flex justify-content-center gap-5">
            <button
              className="btn btn-outline-warning"
              onClick={() => {
                dispatch(increament());
                dispatch(addCart(product));
              }}
            >
              +
            </button>

            <span>{foundEle?.count || 0}</span>

            <button
              className="btn btn-outline-warning"
              onClick={() => {
                dispatch(decreament());
                dispatch(removeFromCart(product));
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
