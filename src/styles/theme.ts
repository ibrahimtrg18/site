import { EnumFont } from "../utils";

const size = {
  mobileS: "321px",
  mobileM: "376px",
  mobileL: "426px",
  tablet: "769px",
  laptop: "1025px",
  laptopL: "1441px",
  desktop: "2561px",
};

const fontSize = {
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
};

const color = {
  primary: "#5C8F6A",
  secondary: "#C3DAE1",
  tertiary: "#DFB0D8",

  black: "#000000",
  dark: "#333333",
  gray: "#d4d4d4",
  light: "#f5f5f5",
  white: "#ffffff",

  text: "#333333",
  textTitle: "#333333",
  textSubTitle: "#757575",
  textParagraph: "#555555",
  textParagraphSmall: "#555555",
  bodyBackground: "#ffffff",
  borderColor: "#757575",

  placeholder: "#979797",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export type ThemeColor = typeof color & {
  [key: string]: string | undefined;
};

export type Theme = {
  font: typeof EnumFont;
  fontSize: typeof fontSize;
  color: ThemeColor;
  device: typeof device;
  appBarHeightMobile: string;
  appBarHeightTablet: string;
  appBarHeightDesktop: string;
};

export const theme: Theme = {
  font: EnumFont,
  fontSize: fontSize,
  color: color,
  device: device,
  appBarHeightMobile: "64px",
  appBarHeightTablet: "96px",
  appBarHeightDesktop: "124px",
};
