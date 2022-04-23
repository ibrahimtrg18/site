import styled, { css } from "styled-components";

import { margin, MarginProps, padding } from "../../styles";

interface TextareaProps {
  variant?: "border" | "outlined";
  state?: "normal" | "warning" | "error";
}

const TextareaBorder = css<TextareaProps>`
  background-color: ${(props) => props.theme.color.white};
  border-bottom: 2px solid ${(props) => props.theme.color.gray};

  &:focus {
    border-bottom: 2px solid ${(props) => props.theme.color.primary};
  }
`;

const TextareaOutlined = css<TextareaProps>`
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 0 0 2px ${(props) => props.theme.color.gray};

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.white};
  }

  &:not(:placeholder-shown) {
    background-color: ${(props) => props.theme.color.white};
  }
`;

export const Textarea = styled.textarea.attrs(() => ({
  autoComplete: "off",
}))<TextareaProps & MarginProps>`
  font-family: ${(props) => props.theme.font.Assistant};
  font-size: 1em;
  line-height: 120%;
  display: block;
  width: 100%;
  padding: 8px 12px;
  background-color: ${(props) => props.theme.color.light};
  border: none;

  ${padding}
  ${margin}

  ${(props) => {
    switch (props.variant) {
      case "border":
        return TextareaBorder;
      case "outlined":
        return TextareaOutlined;
      default:
        return TextareaOutlined;
    }
  }}

  &::placeholder {
    color: ${(props) => props.theme.color.placeholder};
  }
`;
