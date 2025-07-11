import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { Toaster } from "react-hot-toast";
import ShoppingCartContextProvider from "../context/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <ShoppingCartContextProvider>
      <App />
    </ShoppingCartContextProvider>
  </StrictMode>
);
