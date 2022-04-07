import styled, { css } from "styled-components";

import { DeviceEnum } from "../../utils";

interface DividerProps {
  direction?: "vertical" | "horizontal";
  breakpoints?: DeviceEnum;
}

const verticalCss = css`
  min-width: unset;
  width: 4px;
  min-height: 100%;
  height: auto;
  background: ${(props) => props.theme.color.secondary};
`;

const horizontalCss = css`
  min-width: 100%;
  width: auto;
  min-height: unset;
  height: 4px;
  background: ${(props) => props.theme.color.secondary};
`;

const verticalCssBreakpoints = css<DividerProps>`
  ${horizontalCss}

  ${(props) => {
    switch (props.breakpoints) {
      case DeviceEnum.MOBILES:
        return css`
          @media ${props.theme.device.mobileL} {
            ${verticalCss}
          }
        `;
      case DeviceEnum.MOBILEM:
        return css`
          @media ${props.theme.device.mobileL} {
            ${verticalCss}
          }
        `;
      case DeviceEnum.MOBILEL:
        return css`
          @media ${props.theme.device.mobileL} {
            ${verticalCss}
          }
        `;
      case DeviceEnum.TABLET:
        return css`
          @media ${props.theme.device.tablet} {
            ${verticalCss}
          }
        `;
      case DeviceEnum.LAPTOP:
        return css`
          @media ${props.theme.device.laptop} {
            ${verticalCss}
          }
        `;
      case DeviceEnum.LAPTOPL:
        return css`
          @media ${props.theme.device.laptop} {
            ${verticalCss}
          }
        `;
      case DeviceEnum.DESKTOP:
        return css`
          @media ${props.theme.device.laptop} {
            ${verticalCss}
          }
        `;
    }
  }}
`;

export const horizontalCssBreakpoints = css<DividerProps>`
  ${verticalCss}

  ${(props) => {
    switch (props.breakpoints) {
      case DeviceEnum.MOBILES:
        return css`
          @media ${props.theme.device.mobileL} {
            ${horizontalCss}
          }
        `;
      case DeviceEnum.MOBILEM:
        return css`
          @media ${props.theme.device.mobileL} {
            ${horizontalCss}
          }
        `;
      case DeviceEnum.MOBILEL:
        return css`
          @media ${props.theme.device.mobileL} {
            ${horizontalCss}
          }
        `;
      case DeviceEnum.TABLET:
        return css`
          @media ${props.theme.device.tablet} {
            ${horizontalCss}
          }
        `;
      case DeviceEnum.LAPTOP:
        return css`
          @media ${props.theme.device.laptop} {
            ${horizontalCss}
          }
        `;
      case DeviceEnum.LAPTOPL:
        return css`
          @media ${props.theme.device.laptop} {
            ${horizontalCss}
          }
        `;
      case DeviceEnum.DESKTOP:
        return css`
          @media ${props.theme.device.laptop} {
            ${horizontalCss}
          }
        `;
    }
  }}
`;

export const Divider = styled.div<DividerProps>`
  ${(props) => {
    if (props.direction === "horizontal") {
      return horizontalCss;
    } else {
      return verticalCssBreakpoints;
    }
  }}
`;
