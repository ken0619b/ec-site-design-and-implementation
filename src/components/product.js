import React, { useContext } from "react";
import { CartContext } from "../App";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="product">
      <img
        src={`${process.env.PUBLIC_URL}/product_images/${product.name
          .replace(/ /g, "_")
          .toLowerCase()}.png`}
        alt={product.name}
      />
      <div className="name">{product.name}</div>
      <div className="maker">{product.maker}</div>
      <div className="description">{product.description}</div>
      <div className="sub-menu-wrapper">
        <div className="price-stock-wrapper">
          <div className="price">
            <span className="label">$</span>
            {product.price}
          </div>
          <div className="stock">
            <span className="label">stock: </span>
            {product.stock}
          </div>
        </div>
        <div className="button-wrapper">
          <div className="button ml">
            <span className="button-label">-</span>
          </div>
          <div className="button">
            <span
              className="button-label"
              onClick={() => dispatch({ type: "add", item: product })}
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
