import { useContext } from "react";
import { ShoppingCartContext } from "../../../../context/cartContext";
import Rating from "../../ratingStars/Rating";
import toast from "react-hot-toast";

function CartItem({ item }) {

    const { setCartItems } = useContext(ShoppingCartContext);

  function handleClick() {
    toast("Item removed from cart");
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));


  }

  return (
    <div className="container p-4 bg-light mt-5 rounded-4 d-flex justify-content-between">

        <div>
          <h5 >{item.title}</h5>
          <p className="w-50">{item.description}</p>
          <p >
            {" "}
            <Rating value={item.rating} />{" "}
          </p>

          <p >
            {" "}
            Price:<strong> ${item.price}</strong>{" "}
          </p>

          <div className="d-flex align-items-center justify-content-between">
            <button
              className="btn btn btn-outline-warning mt-5"
              onClick={ handleClick}
            >
              Remove From Cart
            </button>
          </div>
        </div>

         <img src={item.images[0]} className="" alt={item.title} style={{ maxWidth: "300px" }}/>
    </div>
  
  );
}

export default CartItem;
