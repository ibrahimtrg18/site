import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo, useState } from "react";

import { getInitial } from "../../../helpers/common";
import { Icon, IconName } from "../../base/Icon";
import {
  AppBar,
  Logo,
  MenuItem,
  MenuList,
  MenuNav,
  NavbarContainer,
  Sidebar,
  SocialMediaList,
} from "./styled";

interface SocialMedia {
  iconName: IconName;
  username: string;
  link: string;
}

const Navbar = () => {
  const data = useStaticQuery(query);
  const logo = useMemo(() => getInitial(data.site.siteMetadata.title), []);
  const socialMedias: Array<SocialMedia> = useMemo(
    () => data.site.siteMetadata.socialMedias,
    []
  );
  const menus = useMemo(() => ["About", "Project", "Resume"], []);
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  const renderMenu = () =>
    menus.map((menu) => <MenuItem key={menu}>{menu}</MenuItem>);

  const renderSocialMedia = () =>
    socialMedias.map((social, i) => <Icon key={i} name={social.iconName} />);

  return (
    <NavbarContainer>
      <AppBar>
        <Icon
          name="Menu"
          mx="16px"
          className={classNames("menu")}
          onClick={() => setShowSidebarMenu(true)}
        />
        <MenuNav>
          <MenuList>{renderMenu()}</MenuList>
        </MenuNav>
        <Logo>{logo}</Logo>
        <SocialMediaList>{renderSocialMedia()}</SocialMediaList>
      </AppBar>
      <Sidebar show={showSidebarMenu}>
        <MenuList>{renderMenu()}</MenuList>
        <Icon
          name="X"
          className="close-menu"
          onClick={() => setShowSidebarMenu(false)}
        />
      </Sidebar>
    </NavbarContainer>
  );
};

export default Navbar;

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        socialMedias {
          iconName
          username
          link
        }
      }
    }
  }
`;
