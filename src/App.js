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
        cart: [
          ...state.cart,
          {
            sku_id: action.item.sku_id,
            name: action.item.name,
            price: action.item.price,
          },
        ],
      };
    }
    case "remove": {
      // 同一のsku_idを持つcartのitemを探し、最初のindexを返す
      const removeIndex = state.cart
        .map((item) => item.sku_id)
        .indexOf(action.item.sku_id);

      // 同一itemのindex以外で新しいカートを作成する
      let newCart = state.cart.filter((_, index) => index !== removeIndex);

      return {
        cart: newCart,
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
