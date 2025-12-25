// import { lazy } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const Login = lazy(() => import("./components/login/login"));
// const Register = lazy(() => import("./components/register/Register"));
// const ProductDetails = lazy(() =>
//   import("./components/productDetails/ProductDetails")
// );
// const Wishlist = lazy(() => import("./components/wishlist/Wishlist"));
// const ProductList = lazy(() => import("./components/productList/ProductList"));


// function Approutes() {
//     let router = createBrowserRouter([
//         {path: "register", element:<Register />},
//         {path: "login", element:<Login />},
//         {
//       path: "",
//       element: <Layout />,
//       children: [
//         { index: true, element: <ProductList products={products}/> },
//         {path:"cart", element:<Cart />},
//         {path:"product/:id", element:<ProductDetails />},
//         {path:"wishlist", element:<Wishlist />},
//         {path:"cart", element:<Cart />}
//       ]}


    

//     ])
//   return (
//     <RouterProvider router={router}></RouterProvider>
//   )
// }

// export default Approutes