import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import Rating from "../ratingStars/Rating";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../../context/cartContext";

function Product({ product }) {
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);

  // state for wishlist
  const [inWishList, setInWishList] = useState(false);

  const inCart = cartItems.some((item) => item.id === product.id);

  function handleClick() {
    if (inCart) {
      setCartItems((prev) => prev.filter((item) => item.id !== product.id));
      toast("Item Removed from cart");
    } else {
      setCartItems((prev) => [...prev, product]);
      toast("Item added to cart");
    }
  }

  function handleWishlist() {
    toast("Item added to wishlist");
    setInWishList(!inWishList);
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
                icon={inWishList ? faHeartSolid : faHeartRegular}
                style={{ color: inWishList ? "#8A0000" : "#8A0000" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
