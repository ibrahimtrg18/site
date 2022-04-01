import { css } from "styled-components";

import { convertSpacing } from "../helpers/convert";

interface PaddingProps {
  mt?: boolean | string | number;
  mr?: boolean | string | number;
  mb?: boolean | string | number;
  ml?: boolean | string | number;
  mx?: boolean | string | number;
  my?: boolean | string | number;
  m?:
    | boolean
    | [boolean, boolean]
    | [boolean, boolean, boolean]
    | [boolean, boolean, boolean, boolean]
    | string
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | number
    | [number, number]
    | [number, number, number]
    | [number, number, number, number];
}

export const padding = css<PaddingProps>`
  padding-top: ${(props) => props.mt && convertSpacing(props.mt)};
  padding-right: ${(props) => props.mr && convertSpacing(props.mr)};
  padding-bottom: ${(props) => props.mb && convertSpacing(props.mb)};
  padding-left: ${(props) => props.ml && convertSpacing(props.ml)};

  padding: ${(props) => {
    if (props.m) {
      if (Array.isArray(props.m)) {
        return props.m
          .map((v) => {
            return convertSpacing(v);
          })
          .join(" ");
      } else {
        return convertSpacing(props.m);
      }
    } else if (props.mx && props.my) {
      return convertSpacing(props.mx) + " " + convertSpacing(props.my);
    } else if (props.mx) {
      return "0 " + convertSpacing(props.mx);
    } else if (props.my) {
      return convertSpacing(props.my) + " 0";
    }
  }};
`;
