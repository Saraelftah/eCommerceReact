import { lazy, Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/navbar/Navbar";


const Login = lazy(() => import("./components/login/login"));
const Register = lazy(() => import("./components/register/Register"));
const ProductDetails = lazy(() =>
  import("./components/productDetails/ProductDetails")
);
const Wishlist = lazy(() => import("./components/wishlist/Wishlist"));
const ProductList = lazy(() => import("./components/productList/ProductList"));

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense
          fallback={
            <div className="text-center my-5">
              <div
                className="spinner-border text-primary"
                role="status"
                style={{ width: "4rem", height: "4rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

// id
// title
// brand
// description
// rating
// price
// stock
//discountPercentage
// category
// availabilityStatus
