import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/cartContext";
import "./navbar.css";

function Navbar() {
  const { cartItems } = useContext(ShoppingCartContext);
  const wishlist = useSelector((state) => state.counter.wishList);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4" to="/">
            🛒iShop
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-btn">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item position-relative">
                  <Link className="nav-link" to="/cart">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      size="lg"
                      className="carticon"
                    />

                    {cartItems.length > 0 && (
                      <span
                        className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger"
                        style={{ fontSize: "0.6rem" }}
                      >
                        {cartItems.length}
                      </span>
                    )}
                  </Link>
                </li>

                <li className="nav-item position-relative">
                  <Link className="nav-link" to="/wishlist">
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="lg"
                      to="/wishlist"
                      className="wishlisticon"
                    />

                    {wishlist.length > 0 && (
                      <span
                        className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger"
                        style={{ fontSize: "0.6rem" }}
                      >
                        {wishlist.length}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
