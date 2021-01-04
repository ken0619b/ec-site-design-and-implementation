import React, { createContext, useReducer } from "react";
import Header from "./components/header";
import Story from "./components/story";
import ProductList from "./components/product-list";
import "./App.scss";

const initialState = {
  cart: [],
};

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return {
        cart: [...state.cart, action.item],
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = {
    state,
    dispatch,
  };

  return (
    <CartContext.Provider value={value}>
      <div className="container">
        <Header />
        <Story />
        <ProductList />
      </div>
    </CartContext.Provider>
  );
};

export default App;
