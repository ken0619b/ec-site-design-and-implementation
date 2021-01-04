import React, { useContext } from "react";
import { CartContext } from "../App";

const Header = () => {
  const { state } = useContext(CartContext);
  return (
    <div className="header">
      <div className="title">Forest Sound</div>
      <div className="wrapper">
        <div className="button search ml">
          <img
            src={`${process.env.PUBLIC_URL}/icon/cart.png`}
            alt="cart"
            className="ml"
          />
          {state.cart.length}
        </div>
        <div className="button search">
          <img
            src={`${process.env.PUBLIC_URL}/icon/search.png`}
            alt="search items"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
