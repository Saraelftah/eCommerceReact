import {createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});

let initialCartItems = [];

try {
  const stored = localStorage.getItem("cartItems");
  if (stored) {
    initialCartItems = JSON.parse(stored);
  }
} catch (error) {
  console.error("Error parsing cartItems:", error);
}

function ShoppingCartContextProvider({children}) {

  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);

  return <ShoppingCartContext.Provider value={{cartItems, setCartItems}}>
    {children}
  </ShoppingCartContext.Provider>
}

export default ShoppingCartContextProvider;
