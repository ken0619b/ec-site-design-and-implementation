import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../App";

const CartContainer = styled.div`
  margin-top: 100px;

  .title {
    text-align: center;
    font-weight: 500;
    font-size: 28px;
    line-height: 20px;
    margin-bottom: 16px;
  }

  .cart-description {
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #a9a9a9;
    margin-bottom: 36px;
  }
`;

const CartItem = styled.div`
  // body
  width: 1000px;
  height: 120px;
  background: #ffffff;

  // appearance
  box-shadow: 0px 6px 12px rgba(62, 62, 62, 0.1);
  border-radius: 8px;

  // margin
  margin-bottom: 48px;

  text-align: center;

  .wrapper {
    display: flex;
    flex-direction: row;
    img {
      width: 120px;
    }
    .text-wrapper {
      display: flex;
      flex-direction: column;
      width: 200px;
      .title {
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 20px;
        color: #3e3e3e;
      }
      .maker {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #a9a9a9;
      }
    }
  }
`;

const Cart = () => {
  const { state } = useContext(AppContext);
  const [cart_items, setCartItems] = useState([]);

  useEffect(() => {
    // state.cartが変更される場合にcartの中身から、CartItemで表示させるために集計をする。
    // cartからitemを抜き出し、
    const aggregated_cart_items = state.cart.reduce((result, current_item) => {
      const item_in_bag = result.find(
        (item) => item.sku_id === current_item.sku_id
      );
      // cartからsku_idの一致するitemが存在する場合、countを増やす
      if (item_in_bag) {
        item_in_bag.count++;
      } else {
        // cartからsku_idの一致するitemが存在しない場合、新しくエントリーを作成する
        result.push({
          sku_id: current_item.sku_id,
          count: 1,
          name: current_item.name,
          maker: current_item.maker,
          price: current_item.price
        });
      }
      return result;
    }, []);

    // ローカルなcart_itemsを更新する
    setCartItems(aggregated_cart_items);
  }, [state.cart]);

  return (
    <CartContainer>
      <div className="title">Shopping Cart</div>
      <div className="cart-description">You have {state.cart.length} items in your cart.</div>
      {cart_items.map((item) => (
        <CartItem key={item.sku_id}>
          <div className="wrapper">
            <img
              src={`${
                process.env.PUBLIC_URL
              }/product_images/${item.name
                .replace(/ /g, "_")
                .toLowerCase()}.png`}
              alt={item.name}
            />
            <div className="text-wrapper">
              <div className="title">{item.name}</div>
              <div className="maker">{item.maker}</div>
              <div className="count">{item.count}</div>
            </div>
          </div>
        </CartItem>
      ))}
    </CartContainer>
  );
};

export default Cart;
