import styled from "styled-components";

export const NavbarContainer = styled.header``;

export const AppBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 124px;
  background-color: transparent;
`;

export const Sidebar = styled.nav``;

export const MenuNav = styled.nav`
  margin: 48px 0 48px 96px;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 4.5em;
`;

export const MenuItem = styled.li`
  font-family: ${(props) => props.theme.font.Lora};
  font-size: ${(props) => props.theme.fontSize.menu};
  font-weight: 700;
  cursor: pointer;
`;

export const Logo = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: ${(props) => props.theme.font.Lora};
  font-size: ${(props) => props.theme.fontSize.logo};
`;

export const SocialMediaList = styled.ul`
  list-style: none;
  display: flex;
  margin: 48px 96px 48px 0;
  gap: 4.5em;
`;

export const SocialMediaItem = styled.li`
  display: inline-flex;
`;
