import { FC } from "react";

/* Types */
import type { ButtonProps } from "./button.types";

/* Styles */
import ButtonStyled from "./button.styles";

export const Button: FC<ButtonProps> = ({ onClick, btnText }) => {
  return (
    <>
      <ButtonStyled.Button onClick={onClick}>
        <ButtonStyled.InnerWrapper>{btnText}</ButtonStyled.InnerWrapper>
      </ButtonStyled.Button>
    </>
  );
};
