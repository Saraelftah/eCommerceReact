import axios from "axios";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/productList/ProductList";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/productDetails/ProductDetails";
import Register from "./components/register/Register";
import Login from "./components/login/login";
import Wishlist from "./components/wishlist/Wishlist";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://dummyjson.com/products";
  const stopload = useRef(true);

  useEffect(() => {
    if (stopload.current) {
      stopload.current = false;
      axios
        .get(baseUrl)
        .then((response) => {
          const data = response.data.products;
          // console.log(data);
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
          setLoading(false);
        });
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error} </div>;
  // console.log(products);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
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
