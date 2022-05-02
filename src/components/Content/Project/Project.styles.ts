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
  margin-bottom: 32px;

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
  display: flex;
  /* flex-direction: column; */
  flex-direction: row;
  gap: 32px;
  padding: 0;
  overflow: auto;

  @media ${(props) => props.theme.device.tablet} {
    /* flex-direction: row; */
    padding: 40px 20px;
  }
`;
