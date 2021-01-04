import React, { useState } from "react";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "WH-1000XM4",
      description:
        "Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo. Up to 30-hour battery life with quick charging (10 min chargefor 5 hours of playback)...",
      maker: "Sony",
      price: "278",
      stock: "4",
    },
    {
      id: 2,
      name: "N700NC",
      description:
        "Great ideas are born in silence.Optimized for travel and blending first class Adaptive Noise Cancelling technology with sleek and elegant design accents, the AKG N700NC Wireless...",
      maker: "AKG",
      price: "349",
      stock: "2",
    },
    {
      id: 3,
      name: "Surface Headphones2",
      description:
        "Experience your favorite music and shows like never before. Designed for all-day comfort, improved...",
      maker: "Microsoft",
      price: "249",
      stock: "0",
    },
    {
      id: 4,
      name: "Mini Plug Cable",
      description:
        "Connect speakers, car or headphones with smartphones, tablets, PCs, CD players, Mp3 players and other 3.5mm output devices. Compatible with all digital...",
      maker: "Millso",
      price: "18",
      stock: "42",
    },
    {
      id: 5,
      name: "Amazon Basics Cable",
      description:
        "Connect speakers, car or headphones with smartphones, tablets, PCs, CD players, Mp3 players and other 3.5mm output devices. Compatible with all digital...",
      maker: "Amazon",
      price: "10.2",
      stock: "55",
    },
    {
      id: 6,
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
    <div className="products">
      <div className="title">Products</div>
      <div className="product-list">
        {currentProducts.map((product) => (
          <div className="product">
            <img
              src={`${
                process.env.PUBLIC_URL
              }/product_images/${product.name
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
                  <span className="button-label">+</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
