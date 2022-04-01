import { css } from "styled-components";

import { convertColor, ThemeColorInterface } from "../helpers/convert";

interface ColorProps {
  color?: string | ThemeColorInterface;
  backgroundColor?: string | ThemeColorInterface;
}

export const color = css<ColorProps>`
  color: ${(props) => {
    if (props.color) {
      return convertColor(props.color);
    }
  }};
  background-color: ${(props) => {
    if (props.backgroundColor) {
      return convertColor(props.backgroundColor);
    }
  }};
`;
