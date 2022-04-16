import styled, { css } from "styled-components";

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
  padding: 16px 0 0;

  @media ${(props) => props.theme.device.mobileS} {
    padding: 16px 0 0;
  }
  @media ${(props) => props.theme.device.mobileM} {
    padding: 32px 0 0;
  }
  @media ${(props) => props.theme.device.mobileL} {
    padding: 48px 0 0;
  }
  @media ${(props) => props.theme.device.tablet} {
    padding: 64px 0;
  }
  @media ${(props) => props.theme.device.laptop} {
    padding: 80px 0;
  }
`;

export const StackTechnology = styled.div`
  flex: 1;
  padding: 0 0 16px;

  @media ${(props) => props.theme.device.mobileS} {
    padding: 0 0 16px;
  }
  @media ${(props) => props.theme.device.mobileM} {
    padding: 0 0 32px;
  }
  @media ${(props) => props.theme.device.mobileL} {
    padding: 0 0 48px;
  }
  @media ${(props) => props.theme.device.tablet} {
    padding: 64px 0;
  }
  @media ${(props) => props.theme.device.laptop} {
    padding: 80px 0;
  }
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
