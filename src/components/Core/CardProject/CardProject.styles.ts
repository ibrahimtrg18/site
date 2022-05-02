import styled from "styled-components";

export const CardContainer = styled.a`
  flex: 0 0 112px;
  transition: all 0.5s ease-in-out;
  border-radius: 20px;
  overflow: hidden;

  &:hover {
    flex: 0 0 224px;
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
  transform: translate(-50%, -50%) rotate(-90deg);

  font-family: ${(props) => props.theme.font.Lora};
  text-transform: uppercase;
  color: ${(props) => props.theme.color.white};
  font-weight: 700;
  transition: all 0.5s ease-in-out;
`;

export const CardContent = styled.div`
  position: relative;
  height: 224px;

  &:hover {
    & ${CardTitle} {
      transform: translate(-50%, -50%) rotate(0);
      color: ${(props) => props.theme.color.white};
    }

    & ${CardOverlay} {
      background-color: ${(props) => props.theme.color.black}40;
    }
  }
`;
