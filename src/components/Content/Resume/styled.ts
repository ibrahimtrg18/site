import styled, { css } from "styled-components";

const contentCss = css`
  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  ${contentCss}

  text-align: center;
`;
