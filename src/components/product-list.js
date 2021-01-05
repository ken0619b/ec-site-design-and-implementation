import React, { useState } from "react";
import Product from "./product";
import styled from "styled-components";

const ProductListContainer = styled.div`
  margin-top: 100px;

  .title {
    text-align: center;
    font-weight: 500;
    font-size: 28px;
    line-height: 20px;
    /* identical to box height, or 71% */
  }

  .product-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const ProductList = () => {
  // 今回は定数から流し込みます。本来は、API等で会部から持ってくるような処理になる想定。
  const products = [
    {
      sku_id: 1,
      name: "WH-1000XM4",
      description:
        "Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo. Up to 30-hour battery life with quick charging (10 min charge for 5 hours of playback)...",
      maker: "Sony",
      price: "278",
      stock: "4",
    },
    {
      sku_id: 2,
      name: "N700NC",
      description:
        "Great ideas are born in silence.Optimized for travel and blending first class Adaptive Noise Cancelling technology with sleek and elegant design accents, the AKG N700NC Wireless...",
      maker: "AKG",
      price: "349",
      stock: "2",
    },
    {
      sku_id: 3,
      name: "Mini Plug Cable",
      description:
        "Connect speakers, car or headphones with smartphones, tablets, PCs, CD players, Mp3 players and other 3.5mm output devices. Compatible with all digital...",
      maker: "Millso",
      price: "18",
      stock: "42",
    },
    {
      sku_id: 4,
      name: "Amazon Basics Cable",
      description:
        "Connect speakers, car or headphones with smartphones, tablets, PCs, CD players, Mp3 players and other 3.5mm output devices. Compatible with all digital...",
      maker: "Amazon",
      price: "10.2",
      stock: "55",
    },
    {
      sku_id: 5,
      name: "Surface Headphones2",
      description:
        "Experience your favorite music and shows like never before. Designed for all-day comfort, improved...",
      maker: "Microsoft",
      price: "249",
      stock: "0",
    },
    {
      sku_id: 6,
      name: "WH-CH510",
      description:
        "Listen to your music throughout the day without interruptions. The WH-CH510 are wireless, lightweight, and have a battery life long enough to keep up....",
      maker: "Sony",
      price: "59",
      stock: "14",
    },
  ];

  const [currentProducts, setProducts] = useState(products);

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
