import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import styled from "styled-components";
import Button from "../shared/button";

const CartButton = styled(Button)`
  margin-right: 48px;
  > img {
    margin-right: 10px;
  }
`;

const SearchButton = styled(Button)`
  width: 66px;
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
    text-decoration: none;
  }
`;

const Header = () => {
  const { state } = useContext(AppContext);

  return (
    <HeaderContainer>
      <Link to="/" className="title">
        Forest Sound
      </Link>
      <div className="wrapper">
        <Link to="/cart">
          <CartButton>
            <img
              src={`${process.env.PUBLIC_URL}/icon/cart.png`}
              alt="cart"
              className="ml"
            />
            <span className="stock-count-label">{state.cart.length}</span>
          </CartButton>
        </Link>
        <SearchButton>
          <img
            src={`${process.env.PUBLIC_URL}/icon/search.png`}
            alt="search items"
          />
        </SearchButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;
