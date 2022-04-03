import styled, { css } from "styled-components";

export const containerCss = css`
  padding: 0 16px;

  @media ${(props) => props.theme.device.mobileS} {
    padding: 0 16px;
  }
  @media ${(props) => props.theme.device.mobileM} {
    padding: 0 24px;
  }
  @media ${(props) => props.theme.device.mobileL} {
    padding: 0 32px;
  }
  @media ${(props) => props.theme.device.tablet} {
    padding: 0 48px;
  }
  @media ${(props) => props.theme.device.laptop} {
    padding: 0 64px;
  }
  @media ${(props) => props.theme.device.laptopL} {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  ${containerCss}
`;
