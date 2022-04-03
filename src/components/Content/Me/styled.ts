import styled from "styled-components";

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

export const Name = styled.span`
  color: ${(props) => props.theme.color.primary};
`;

export const Introduction = styled.h1`
  z-index: 1;
  font-size: 2em;
  line-height: 120%;
  text-align: center;

  @media ${(props) => props.theme.device.mobileL} {
    text-align: start;
    font-size: 3em;
    line-height: 150%;
  }

  @media ${(props) => props.theme.device.tablet} {
    text-align: start;
    font-size: 4em;
    line-height: 150%;
  }
`;

export const Picture = styled.img`
  /* position: absolute;
  right: 0;
  transform: translate(0, 50px); */
  width: 240px;
  margin: 48px auto;

  @media ${(props) => props.theme.device.tablet} {
    width: unset;
    margin: 50px 0 0;
  }
`;
