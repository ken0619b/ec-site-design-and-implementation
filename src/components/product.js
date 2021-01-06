import React, { useContext } from "react";
import { CartContext } from "../App";
import styled from "styled-components";
import Button from "../shared/button";

const LeftButton = styled(Button)`
  margin-right: 12px;
`;

const ProductContainer = styled.div`
  text-align: left;
  background-color: #fefefe;
  width: 320px;

  > div {
    margin-top: 12px;
  }

  > img {
    margin-top: 40px;
  }

  .name {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 20px;
  }

  .maker {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #a9a9a9;
  }

  .description {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #a9a9a9;
  }

  .price {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.05em;
    color: #a9a9a9;

    .label {
      letter-spacing: 0.1em;
    }
  }

  .stock {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #3e3e3e;
    margin-top: 10px;

    .label {
      font-size: 12px;
      line-height: 20px;
      color: #a9a9a9;
    }
  }

  .price-stock-wrapper {
    display: flex;
    flex-direction: column;
  }

  .sub-menu-wrapper,
  .button-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <ProductContainer>
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
          <LeftButton
            onClick={() => dispatch({ type: "remove", item: product })}
          >
            <span className="button-label">-</span>
          </LeftButton>
          <Button onClick={() => dispatch({ type: "add", item: product })}>
            <span className="button-label">+</span>
          </Button>
        </div>
      </div>
    </ProductContainer>
  );
};

export default Product;
