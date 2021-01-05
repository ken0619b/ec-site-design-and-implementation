import React, { useContext } from "react";
import { CartContext } from "../App";
import styled from "styled-components";

const Button = styled.div`
  display: block;
  text-align: center;
  color: #ffffff;
  background: #3e3e3e;
  border-radius: 8px;
  padding: 0.1em;
  font-size: 28px;
  width: 88px;
  height: 44px;
  line-height: 44px;
  .disable {
    background: #a9a9a9;
  }

  // これどうする？
  .ml {
    margin-right: 12px;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;

  .wrapper {
    display: flex;
    flex-direction: row;
  }

  .title {
    font-weight: 500;
    font-size: 36px;
    line-height: 20px;
    color: #3e3e3e;
  }
`;

const Header = () => {
  const { state } = useContext(CartContext);

  return (
    <HeaderContainer>
        <div className="title">Forest Sound</div>
        <div className="wrapper">
          <Button>
            <img
              src={`${process.env.PUBLIC_URL}/icon/cart.png`}
              alt="cart"
              className="ml"
            />
            {state.cart.length}
          </Button>
          <Button>
            <img
              src={`${process.env.PUBLIC_URL}/icon/search.png`}
              alt="search items"
            />
          </Button>
        </div>
    </HeaderContainer>
  );
};

export default Header;
