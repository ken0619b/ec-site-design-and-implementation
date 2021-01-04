import React, { useContext } from "react";
import { CartContext } from "../App";

const Header = () => {
  const { state } = useContext(CartContext);
  return (
    <div className="header">
    <div className="title">Forest Sound</div>
    <div className="wrapper">
      <div className="button search">{state.cart.length}</div>
      <div className="button search">検索ボタン</div>
    </div>
  </div>
  );
}

export default Header;
