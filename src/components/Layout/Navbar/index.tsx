import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useMemo, useState } from "react";

import { getInitial } from "../../../helpers/common";
import { Icon, IconName } from "../../Base/Icon";
import {
  AppBar,
  Logo,
  MenuItem,
  MenuList,
  NavbarContainer,
  Sidebar,
  SocialMediaItem,
  SocialMediaList,
} from "./styled";

interface SocialMedia {
  iconName: IconName;
  username: string;
  link: string;
}

const Navbar = () => {
  const data = useStaticQuery(query);

  const [showSidebarMenu, setShowSidebarMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const logo = useMemo(() => getInitial(data.site.siteMetadata.title), []);
  const menus = useMemo(() => ["About", "Project", "Resume"], []);
  const socialMedias: Array<SocialMedia> = useMemo(
    () => data.site.siteMetadata.socialMedias,
    []
  );

  const renderMenu = useMemo(
    () => () => menus.map((menu) => <MenuItem key={menu}>{menu}</MenuItem>),
    []
  );

  const renderSocialMedia = useMemo(
    () => () =>
      socialMedias.map((social, i) => (
        <SocialMediaItem key={i}>
          <a href={social.link} target="_blank" rel="noreferrer">
            <Icon name={social.iconName} />
          </a>
        </SocialMediaItem>
      )),
    []
  );

  useEffect(() => {
    const scrollListener = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
  }, []);

  useEffect(() => {
    if (showSidebarMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [showSidebarMenu]);

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <AppBar>
        <Icon
          name="Menu"
          mr="16px"
          className={classNames("menu")}
          onClick={() => setShowSidebarMenu(true)}
        />
        <MenuList>{renderMenu()}</MenuList>
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
