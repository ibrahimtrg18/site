import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.span`
  color: ${(props) => props.theme.color.primary};
`;

export const Introduction = styled.h1`
  font-size: 64px;
  line-height: 150%;
`;

export const Picture = styled.img`
  position: absolute;
  right: 0;
  transform: translate(0, 50px);
`;
