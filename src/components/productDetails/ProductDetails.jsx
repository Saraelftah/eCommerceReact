import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../ratingStars/Rating";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCartContext } from "../../context/cartContext";
import {
  addCart,
  addToWishlist,
  decreament,
  increament,
  removeFromCart,
  removeFromWishlist,
} from "../../store/countSlice";
import toast from "react-hot-toast";
import { faHeart as faHeartRegular, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Faild to fetch product");
        setLoading(false);
      });
  }, [id]);

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.counter.cartItem);

  const foundEle = cartItem?.find((el) => el?.id === product?.id);

  const wishlist = useSelector((state) => state.counter.wishList);
  const isInWishlist = wishlist.some((item) => item?.id === product?.id);

  const { cartItems, setCartItems } = useContext(ShoppingCartContext);

  const inCart = cartItems.some((item) => item.id === product?.id);

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
      dispatch(removeFromWishlist(product));
      toast.error("Item removed from wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Item added to wishlist");
    }
  }

  if (loading) return <div>Loadind...</div>;
  if (error) return <div>{error}</div>;
  if (!product) {
    return (
      <div className="text-center py-5">
        <FontAwesomeIcon icon={faBoxOpen} size="5x" style={{ color: "#ccc" }} />
        <p className="mt-3 text-muted">No product found.</p>
      </div>
    );
  }

  return (
    <div className="container py-4 bg-light mt-5 rounded d-flex justify-content-between">
      <div className="w-50">
        <div className="d-flex align-items-center gap-3 mb-4 ">
          <h2 className="fw-bold">{product.title}</h2>
          <button onClick={handleWishlist} className="btn">
            <FontAwesomeIcon
              icon={isInWishlist ? faHeartSolid : faHeartRegular}
              style={{ color: isInWishlist ? "#8A0000" : "#8A0000" }}
              className="fs-4"
            />
          </button>
        </div>

        <p className="mt-3">{product.description}</p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Rating:</strong> <Rating value={product.rating} />{" "}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand}{" "}
        </p>
        <p>
          <strong>Category:</strong> {product.category}{" "}
        </p>
        <div className="d-flex gap-3 align-items-baseline justify-content-start">
          {/* counter */}
          <div className="mt-3 d-flex justify-content-center gap-4">
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

          <button
            className={`btn ${inCart ? "btn" : "btn-outline-warning"}`}
            onClick={handleClick}
          >
            {inCart ?  <FontAwesomeIcon
              icon={faTrashCan}
              style={{ color:"#8A0000" }}
              className="fs-4"
            /> : "Add To Cart"}
          </button>
        </div>
      </div>

      <img
        src={product.images[0]}
        alt={product.title}
        style={{ maxWidth: "300px" }}
      />
    </div>
  );
}

export default ProductDetails;
