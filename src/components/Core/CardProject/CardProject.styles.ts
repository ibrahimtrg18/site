import styled from "styled-components";

export const CardContainer = styled.a`
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.black}60;
  transition: all 0.5s ease-in-out;
`;

export const CardTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: ${(props) => props.theme.font.RadioCanada};
  text-transform: uppercase;
  color: ${(props) => props.theme.color.white};
  font-weight: 700;
`;

export const CardContent = styled.div`
  position: relative;
  height: 224px;

  &:hover {
    & ${CardTitle} {
      color: ${(props) => props.theme.color.white};
    }

    & ${CardOverlay} {
      background-color: ${(props) => props.theme.color.black}40;
    }
  }
`;
