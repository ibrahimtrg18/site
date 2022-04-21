import { css } from "styled-components";

import { convertSpacing } from "../helpers/convert";
import { UnitEnum } from "../utils";

export interface PaddingProps {
  pt?: boolean | string | number;
  pr?: boolean | string | number;
  pb?: boolean | string | number;
  pl?: boolean | string | number;
  px?: boolean | string | number;
  py?: boolean | string | number;
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
  options?: {
    unit: UnitEnum;
  };
}

export const padding = css<PaddingProps>`
  padding-top: ${(props) =>
    props.pt && convertSpacing(props.pt, props.options)};
  padding-right: ${(props) =>
    props.pr && convertSpacing(props.pr, props.options)};
  padding-bottom: ${(props) =>
    props.pb && convertSpacing(props.pb, props.options)};
  padding-left: ${(props) =>
    props.pl && convertSpacing(props.pl, props.options)};

  padding: ${(props) => {
    if (props.m) {
      if (Array.isArray(props.m)) {
        return props.m
          .map((v) => {
            return convertSpacing(v, props.options);
          })
          .join(" ");
      } else {
        return convertSpacing(props.m, props.options);
      }
    } else if (props.px && props.py) {
      return (
        convertSpacing(props.px, props.options) +
        " " +
        convertSpacing(props.py, props.options)
      );
    } else if (props.px) {
      return "0 " + convertSpacing(props.px, props.options);
    } else if (props.py) {
      return convertSpacing(props.py, props.options) + " 0";
    }
  }};
`;
