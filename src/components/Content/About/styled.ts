import styled, { css } from "styled-components";

const contentCss = css`
  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
    margin: calc(72px + ${(props) => props.theme.appBarHeightMobile}) 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 32px;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }
`;

export const IMeMyself = styled.div`
  flex: 1;
  margin-top: calc(32px + ${(props) => props.theme.appBarHeightMobile});
  ${contentCss}
`;

export const StackTechnology = styled.div`
  flex: 1;
  margin-bottom: calc(32px + ${(props) => props.theme.appBarHeightMobile});
  ${contentCss}
`;

export const GridStackTechnology = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 64px));
  grid-template-rows: minmax(auto, 64px);
  justify-content: center;
  align-items: center;
  place-items: center;
  gap: 16px;
  margin-top: 32px;

  @media ${(props) => props.theme.device.mobileS} {
    grid-template-columns: repeat(auto-fit, minmax(auto, 64px));
    gap: 24px;
  }
  @media ${(props) => props.theme.device.mobileL} {
    justify-content: start;
    grid-template-columns: repeat(auto-fit, minmax(auto, 64px));
  }
`;
