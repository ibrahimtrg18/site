import styled, { css } from "styled-components";

interface MainContainerProps {
  isScrolled?: boolean;
}

export const MainContainer = styled.main<MainContainerProps>`
  ${(props) => {
    if (props.isScrolled) {
      return css`
        @media ${(props) => props.theme.device.mobileL} {
          padding-left: 80px;
        }
      `;
    }
  }}

  transition: all 0.5s ease-in-out;
`;
