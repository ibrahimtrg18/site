import styled from "styled-components";

export const CardResumeContainer = styled.div`
  display: block;
  margin: 32px auto;
  max-width: 100%;

  @media ${(props) => props.theme.device.tablet} {
    display: flex;
    align-items: flex-start;
    gap: 32px;
  }
`;

export const CardResumeWrapperTitle = styled.div`
  margin-top: 16px;
  flex-basis: 300px;
`;

export const CardResumeCompany = styled.h4`
  color: ${(props) => props.theme.color.textTitle};
  margin-bottom: 8px;
`;

export const CardResumeTitle = styled.h5`
  color: ${(props) => props.theme.color.textSubTitle};
  margin-bottom: 8px;
`;

export const CardResumeFrom = styled.p.attrs(() => ({ className: "small" }))`
  color: ${(props) => props.theme.color.textParagraphSmall};
  margin-bottom: 8px;
`;

export const CardResumeContent = styled.div`
  flex: 1;
  padding: 16px;
  background-color: ${(props) => props.theme.color.secondary}33;
  border: 1px solid ${(props) => props.theme.color.borderColor};
`;

export const CardResumeContentTitle = styled.h6`
  margin-bottom: 8px;
`;

export const CardResumeContentBody = styled.p`
  margin-bottom: 8px;
`;
