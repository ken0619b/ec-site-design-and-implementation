import React, { createContext, useReducer, Fragment } from "react";
import Header from "./components/header";
import Story from "./components/story";
import ProductList from "./components/product-list";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
body {
  font-family: 'Roboto', sans-serif;
  color: #3E3E3E;
  background: #FFFFFF;
  width: 1024px;
  margin: 0 auto;
}`;

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
    <Fragment>
      <GlobalStyle />
      <CartContext.Provider value={value}>
        <div className="container">
          <Header />
          <Story />
          <ProductList />
        </div>
      </CartContext.Provider>
    </Fragment>
  );
};

export default App;
