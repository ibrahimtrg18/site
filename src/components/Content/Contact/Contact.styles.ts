import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px 0;
  gap: 32px;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }
`;

export const Form = styled.form`
  flex: 1;
`;

export const Maps = styled.div`
  flex: 1;
`;

export const Detail = styled.div`
  margin-top: 32px;

  & > table {
    border-spacing: 16px 10px;
    & tr {
      vertical-align: top;

      & > td:first-child {
        color: ${(props) => props.theme.color.primary};
        font-weight: 700;
      }
    }
  }
`;
