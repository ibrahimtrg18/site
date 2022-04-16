import styled, { css } from "styled-components";

const contentCss = css`
  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  ${contentCss}

  & .title {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  & > .title {
    width: 150px;
    min-width: 150px;
    max-width: 150px;
  }
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 40px 20px;
  overflow: auto;
`;
