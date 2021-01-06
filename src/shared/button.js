import styled from "styled-components";

const Button = styled.button`
// initialize button design
  background-color: transparent;
  outline: none;
  appearance: none;
  border: none;
  display: block;
  text-align: center;
  color: #ffffff;
  background: ${(props) => (props.out_of_stock ? "#A9A9A9" : "#3e3e3e")};
  border-radius: 8px;
  padding: 0.1em;
  font-size: 28px;
  width: 88px;
  height: 44px;
  line-height: 44px;
`;

export default Button;
