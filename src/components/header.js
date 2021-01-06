import React, { useContext } from "react";
import { CartContext } from "../App";
import styled from "styled-components";
import Button from "../shared/button";

const HeaderButton = styled(Button)`
  width: 66px;
`;

const LeftButton = styled(HeaderButton)`
  margin-right: 12px;
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
        <LeftButton>
          <img
            src={`${process.env.PUBLIC_URL}/icon/cart.png`}
            alt="cart"
            className="ml"
          />
          {state.cart.length}
        </LeftButton>
        <HeaderButton>
          <img
            src={`${process.env.PUBLIC_URL}/icon/search.png`}
            alt="search items"
          />
        </HeaderButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;
