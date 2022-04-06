import { css } from "styled-components";

import { convertSpacing } from "../helpers/convert";
import { UnitEnum } from "../utils";

interface MarginProps {
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
  options?: {
    unit: UnitEnum;
  };
}

export const margin = css<MarginProps>`
  margin-top: ${(props) => props.mt && convertSpacing(props.mt, props.options)};
  margin-right: ${(props) =>
    props.mr && convertSpacing(props.mr, props.options)};
  margin-bottom: ${(props) =>
    props.mb && convertSpacing(props.mb, props.options)};
  margin-left: ${(props) =>
    props.ml && convertSpacing(props.ml, props.options)};

  margin: ${(props) => {
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
    } else if (props.mx && props.my) {
      return (
        convertSpacing(props.mx, props.options) +
        " " +
        convertSpacing(props.my, props.options)
      );
    } else if (props.mx) {
      return "0 " + convertSpacing(props.mx, props.options);
    } else if (props.my) {
      return convertSpacing(props.my, props.options) + " 0";
    }
  }};
`;
