import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../App";
import Button from "../shared/button";

const CardButton = styled(Button)`
  width: 44px;
  height: 44px;
  margin-right: 16px;
`;

const DeleteButton = styled(CardButton)`
  background: #f2f2f2;
`;

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

  .wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .card-img {
      margin-top: 20px;
      margin-left: 48px;
      width: 120px;
      height: 80px;
    }
    .text-wrapper {
      display: flex;
      flex-direction: column;
      width: 200px;
      margin-top: 20px;
      margin-left: 16px;

      .card-title {
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 20px;
        color: #3e3e3e;
        margin-bottom: 16px;
      }
      .card-maker {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #a9a9a9;
      }
    }
    .button-wrapper,
    .subtotal-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 180px;
      margin-top: 20px;

      .stock {
        width: 44px;
        height: 44px;
        margin-right: 16px;
        background: #ffffff;
        border: 1px solid #f2f2f2;
        box-sizing: border-box;
        border-radius: 8px;
        line-height: 44px;
        text-align: center;
      }

      .subtotal {
        margin-top: 15px;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.05em;
        color: #a9a9a9;
      }
    }
  }
`;

const Cart = () => {
  const { state } = useContext(AppContext);
  const [cart_items, setCartItems] = useState([]);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    console.log("useEffect has been called");
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
          price: current_item.price,
        });
      }
      return result;
    }, []);

    // cartに含まれるitemに依存する並びになってしまうので、sku_idの昇順にソートすることで、
    // cartの商品に依存せずに集計結果を表示できる
    const sorted_cart_items = aggregated_cart_items.sort((a, b) => {
      return a.sku_id < b.sku_id ? 1 : -1;
    });

    // ローカルなcart_itemsを更新する
    setCartItems(sorted_cart_items);
  }, [state.cart]);

  return (
    <CartContainer>
      <div className="title">Shopping Cart</div>
      <div className="cart-description">
        You have {state.cart.length} items in your cart.
      </div>
      {cart_items.map((item) => (
        <CartItem key={item.sku_id}>
          <div className="wrapper">
            <img
              className="card-img"
              src={`${
                process.env.PUBLIC_URL
              }/product_images/${item.name
                .replace(/ /g, "_")
                .toLowerCase()}.png`}
              alt={item.name}
            />
            <div className="text-wrapper">
              <div className="card-title">{item.name}</div>
              <div className="card-maker">{item.maker}</div>
            </div>
            <div className="button-wrapper">
              <CardButton
                onClick={() => {
                  dispatch({ type: "REMOVE_ITEM_FROM_CART", item: item });
                }}
              >
                -
              </CardButton>
              <div className="stock">{item.count}</div>
              <CardButton
                onClick={() => {
                  dispatch({ type: "ADD_ITEM_TO_CART", item: item });
                }}
              >
                +
              </CardButton>
            </div>
            <div className="subtotal-wrapper">
              <div className="subtotal">
                ${(item.count * item.price).toFixed(2)}
              </div>
              <DeleteButton>
                <img
                  src={`${process.env.PUBLIC_URL}/icon/delete.png`}
                  alt="delete item"
                />
              </DeleteButton>
            </div>
          </div>
        </CartItem>
      ))}
    </CartContainer>
  );
};

export default Cart;
