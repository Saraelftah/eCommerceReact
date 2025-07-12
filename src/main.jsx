import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { Toaster } from "react-hot-toast";
import ShoppingCartContextProvider from "./context/cartContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store = {store}>
      <Toaster />
      <ShoppingCartContextProvider>
        <App />
      </ShoppingCartContextProvider>
    </Provider>
  </StrictMode>
);
