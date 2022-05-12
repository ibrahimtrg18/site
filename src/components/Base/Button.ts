import styled, { css } from "styled-components";

import {
  backgroundColor,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  ThemeColor,
} from "../../styles";

interface ButtonProps {
  variant?: "text" | "filled" | "outlined";
  colorType?: string | ThemeColor;
}

const ButtonText = css<ButtonProps>`
  color: ${(props) =>
    props.colorType
      ? props.theme.color[props.colorType.toString()]
      : props.theme.color.primary};
  background-color: transparent;
  box-shadow: unset;
`;

const ButtonFilled = css<ButtonProps>`
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.primary};
  box-shadow: inset 0 0 0 2px
    ${(props) =>
      props.colorType
        ? props.theme.color[props.colorType.toString()]
        : props.theme.color.primary};
  ${backgroundColor}

  &:hover {
    background-color: ${(props) => props.theme.color.primary + "CC"};
  }
`;

const ButtonOutline = css<ButtonProps>`
  color: ${(props) =>
    props.colorType
      ? props.theme.color[props.colorType.toString()]
      : props.theme.color.primary};
  background-color: transparent;
  box-shadow: inset 0 0 0 2px
    ${(props) =>
      props.colorType
        ? props.theme.color[props.colorType.toString()]
        : props.theme.color.primary};

  &:hover {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.white};
  }
`;

export const Button = styled.button<ButtonProps & PaddingProps & MarginProps>`
  display: inline-flex;
  font-size: 1em;
  font-weight: 700;
  font-family: ${(props) => props.theme.font.Assistant};
  text-transform: uppercase;
  padding: 8px 12px;
  border: none;
  cursor: pointer;

  ${padding}
  ${margin}

  ${(props) => {
    switch (props.variant) {
      case "text":
        return ButtonText;
      case "filled":
        return ButtonFilled;
      case "outlined":
        return ButtonOutline;
      default:
        return ButtonFilled;
    }
  }}
`;
