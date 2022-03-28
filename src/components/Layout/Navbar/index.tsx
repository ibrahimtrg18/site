import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import * as Icon from "react-feather";

import { getInitial } from "../../../helpers/common";
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
  const data = useStaticQuery(query);
  const logo = useMemo(() => getInitial(data.site.siteMetadata.title), []);
  const menus = useMemo(() => ["About", "Project", "Resume"], []);

  const renderMenu = () =>
    menus.map((menu) => <MenuItem key={menu}>{menu}</MenuItem>);

  return (
    <NavbarContainer>
      <AppBar>
        <MenuNav>
          <MenuList>{renderMenu()}</MenuList>
        </MenuNav>
        <Logo>{logo}</Logo>
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

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
