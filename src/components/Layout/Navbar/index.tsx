import React from "react";
import * as Icon from "react-feather";

import {
  AppBar,
  Logo,
  MenuItem,
  MenuList,
  MenuNav,
  NavbarContainer,
  Sidebar,
  SocialMediaItem,
  SocialMediaList,
} from "./styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <AppBar>
        <MenuNav>
          <MenuList>
            <MenuItem>About</MenuItem>
            <MenuItem>Project</MenuItem>
            <MenuItem>Resume</MenuItem>
          </MenuList>
        </MenuNav>
        <Logo>IT</Logo>
        <SocialMediaList>
          <SocialMediaItem>
            <Icon.Twitter />
          </SocialMediaItem>
          <SocialMediaItem>
            <Icon.Instagram />
          </SocialMediaItem>
          <SocialMediaItem>
            <Icon.GitHub />
          </SocialMediaItem>
          <SocialMediaItem>
            <Icon.Linkedin />
          </SocialMediaItem>
        </SocialMediaList>
      </AppBar>
      <Sidebar></Sidebar>
    </NavbarContainer>
  );
};

export default Navbar;
