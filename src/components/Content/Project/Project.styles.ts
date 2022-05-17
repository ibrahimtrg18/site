import styled from "styled-components";

export const Content = styled.div`
  padding: 32px 0;

  & > .title {
    margin-bottom: 16px;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  & > .title {
    width: 100%;
  }

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;

    & > .title {
      width: 150px;
      min-width: 150px;
      max-width: 150px;
    }
  }
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  grid-auto-rows: minmax(0, 1fr);
  flex-direction: row;
  padding: 0;

  @media ${(props) => props.theme.device.mobileS} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media ${(props) => props.theme.device.mobileL} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;
