import styled, { css } from "styled-components";

const contentCss = css`
  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
    margin: calc(72px + ${(props) => props.theme.appBarHeightMobile}) 0 0 0;
  }
`;

export const Content = styled.div`
  ${contentCss}

  text-align: center;
`;
