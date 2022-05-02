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
    font-family: ${(props) => props.theme.font.RadioCanada};
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
