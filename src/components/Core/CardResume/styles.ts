import styled from "styled-components";

export const CardResumeContainer = styled.div`
  margin: 32px auto;
  max-width: 70%;
`;

export const CardResumeTitle = styled.h4`
  color: ${(props) => props.theme.color.textTitle};
  margin-bottom: 8px;
`;

export const CardResumeSubTitle = styled.h5`
  color: ${(props) => props.theme.color.textSubTitle};
  margin-bottom: 16px;
`;

export const CardResumeContent = styled.div`
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
