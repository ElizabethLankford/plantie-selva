import React, { useState } from "react";
import PropTypes from "prop-types";
const Context = React.createContext();
function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(newItem) {
    const isItemInCart = cartItems.includes(newItem);
    if (!isItemInCart) {
      newItem["quantity"] = 1;
      setCartItems((prevItems) => [...prevItems, newItem]);
    } else {
      setCartItems((prevItems) => {
        prevItems.map((prod) => {
          if (prod.id === newItem.id) {
            prod.quantity++;
          }
        });
        return [...prevItems];
      });
    }

    alert(`${newItem.name} has been added to your cart.`);
  }
  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }
  return (
    <Context.Provider
      value={{ cartItems, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </Context.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, Context };
