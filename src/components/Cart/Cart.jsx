import { useContext } from "react";
import { ShoppingCartContext } from "../../context/cartContext";
import CartItem from "./CartItem/CartItem";

function Cart() {
  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <div className="container-fluid min-vh-100 py-4">
      <h2 className="mb-4 text-center">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center fs-4 text-muted">Your cart is empty 🛒</p>
      ) : (
        <div className="g-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
