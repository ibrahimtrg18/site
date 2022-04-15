import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  html, body {
    font-size: 16px;
    line-height: 130%;
    font-family: ${(props) => props.theme.font.Assistant};
    color: ${(props) => props.theme.color.text}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.font.Lora};
    font-weight: 700;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize.h1};
    font-weight: 700;
    line-height: 110%;
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
    font-weight: 700;
    line-height: 110%;
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
    font-weight: 700;
    line-height: 120%;
  }
  h4 {
    font-size: ${(props) => props.theme.fontSize.h4};
    font-weight: 700;
    line-height: 120%;
  }
  h5 {
    font-size: ${(props) => props.theme.fontSize.h5};
    font-weight: 700;
    line-height: 130%;
  }
  h6 {
    font-size: ${(props) => props.theme.fontSize.h6};
    font-weight: 700;
    line-height: 130%;
  }

  p {
    font-family: ${(props) => props.theme.font.Assistant};
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 300;
    line-height: 130%;
  }

  p {
    &.small {
      font-size: ${(props) => props.theme.fontSize.sm};
      font-weight: 200;
      line-height: 130%;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

enum FontType {
  "Lora" = "Lora",
  "Assistant" = "Assistant",
}

const size = {
  mobileS: "321px",
  mobileM: "376px",
  mobileL: "426px",
  tablet: "769px",
  laptop: "1025px",
  laptopL: "1441px",
  desktop: "2561px",
};

export const theme = {
  font: FontType,
  fontSize: {
    xs: "0.75em", // 12
    sm: "0.875em", // 14
    md: "1em", // 16
    lg: "1.125em", // 18
    xl: "1.25em", // 20
    xl2: "1.5em", // 24
    xl3: "2em", // 32
    xl4: "3em", // 48

    h1: "3em",
    h2: "2.5em",
    h3: "2em",
    h4: "1.5em",
    h5: "1.25em",
    h6: "1.125em",

    menuSm: "1em",
    menuMd: "1.125em",
    menuLg: "1.25em",
    menuXl: "1.75em",
    menuXl2: "2.5em",
    logoSm: "2.25em",
    logoMd: "2.5em",
    logoLg: "3em",
  },
  color: {
    primary: "#5C8F6A",
    secondary: "#C3DAE1",
    tertiary: "#DFB0D8",

    black: "#000000",
    dark: "#333333",
    light: "#e5e5e5",
    white: "#ffffff",

    text: "#333333",
    textTitle: "#333333",
    textSubTitle: "#757575",
    textParagraph: "#555555",
    textParagraphSmall: "#555555",
    bodyBackground: "#ffffff",
    borderColor: "#757575",
  },
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  },
  appBarHeightMobile: "64px",
  appBarHeightTablet: "96px",
  appBarHeightDesktop: "124px",
};
