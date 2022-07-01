import styled from "styled-components";

import type { ButtonProps } from "./button.types";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div<ButtonProps>`
  padding: 20px;
  margin: 5px;
  background-color: skyblue;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const IconElement = styled.img`
  margin-right: 5px;
`;

const ButtonStyled = { InnerWrapper, Button, IconElement };

export default ButtonStyled;
