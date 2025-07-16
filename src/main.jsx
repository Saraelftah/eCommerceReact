import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import App from "./App.jsx";
import ShoppingCartContextProvider from "./context/cartContext.jsx";
import "./index.css";
import { store } from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <ShoppingCartContextProvider>
        <App />
      </ShoppingCartContextProvider>
    </Provider>
  </StrictMode>
);
