import { css } from "styled-components";

import { convertColor } from "../helpers/convert";
import { ThemeColor } from "./styled-components";

interface ColorProps {
  color?: string | ThemeColor;
  backgroundColor?: string | ThemeColor;
}

export const color = css<ColorProps>`
  color: ${(props) => {
    if (props.color) {
      return convertColor(props.color);
    }
  }};
`;
