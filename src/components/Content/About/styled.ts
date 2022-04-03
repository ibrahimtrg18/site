import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: calc(32px + ${(props) => props.theme.appBarHeightMobile});

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
    margin-top: calc(72px + ${(props) => props.theme.appBarHeightMobile});
  }
`;

export const IMeMyself = styled.div`
  flex: 1;
`;

export const StackTechnology = styled.div`
  flex: 1;
`;
