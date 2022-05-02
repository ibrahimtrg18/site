import { css } from "styled-components";

import { convertColor } from "../helpers/convert";
import { ThemeColor } from ".";

interface BackgroundColorProps {
  backgroundColor?: string | ThemeColor;
}

export const backgroundColor = css<BackgroundColorProps>`
  background-color: ${(props) => {
    if (props.backgroundColor) {
      return convertColor(props.backgroundColor);
    }
  }};
`;
