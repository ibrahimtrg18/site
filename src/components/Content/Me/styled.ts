import styled from "styled-components";

import { color, margin } from "../../../styles";

export const Content = styled.div`
  position: relative;
  display: flex;
  height: calc(100% - (${(props) => props.theme.appBarHeightMobile} + 16px));
  flex-direction: column;
  align-items: stretch;
  margin-top: calc(${(props) => props.theme.appBarHeightMobile} + 16px);

  @media ${(props) => props.theme.device.mobileL} {
    align-items: center;
    flex-direction: row;
  }
  @media ${(props) => props.theme.device.tablet} {
    justify-content: space-between;
    margin-top: 0;
  }
  @media ${(props) => props.theme.device.laptop} {
    height: 100%;
  }
`;

export const LeftContent = styled.div`
  z-index: 1;
  text-align: center;

  @media ${(props) => props.theme.device.mobileL} {
    text-align: start;
  }
`;

export const Introduction = styled.h1`
  font-size: 2em;
  line-height: 120%;
  text-align: center;

  @media ${(props) => props.theme.device.mobileL} {
    text-align: start;
    font-size: 3em;
    line-height: 115%;
  }

  @media ${(props) => props.theme.device.tablet} {
    text-align: start;
    font-size: 4em;
    line-height: 110%;
  }
`;

export const Profession = styled.p`
  margin-top: 8px;
  line-height: 120%;
`;

export const Name = styled.span`
  color: ${(props) => props.theme.color.primary};
`;

export const Picture = styled.img`
  width: 240px;
  margin: 48px auto;

  @media ${(props) => props.theme.device.tablet} {
    width: unset;
    margin: 50px 0 0;
  }
`;
