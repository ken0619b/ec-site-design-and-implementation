import React, { useState } from "react";
import Product from "./product";
import styled from "styled-components";

import products from '../product_data'

const ProductListContainer = styled.div`
  margin-top: 100px;

  .title {
    text-align: center;
    font-weight: 500;
    font-size: 28px;
    line-height: 20px;
  }

  .product-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const ProductList = () => {
  const [currentProducts] = useState(products);

  return (
    <ProductListContainer>
      <div className="title">Products</div>
      <div className="product-list">
        {currentProducts.map((p) => (
          <Product product={p} key={p.sku_id} />
        ))}
      </div>
    </ProductListContainer>
  );
};

export default ProductList;
