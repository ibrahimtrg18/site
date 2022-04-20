import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useEffect, useMemo, useState } from "react";

import { getInitial } from "../../../helpers/common";
import { Icon } from "../../Base/Icon";
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

interface Menu {
  name: string;
  icon: [IconPrefix, IconName];
  ref: React.RefObject<HTMLElement>;
}
interface SocialMedia {
  icon: [IconPrefix, IconName];
  username: string;
  link: string;
}

interface Props {
  navbarMenus?: Array<Menu>;
  isScrolled?: boolean;
}

const Navbar: FC<Props> = (props) => {
  const { navbarMenus, isScrolled } = props;
  const data = useStaticQuery(query);

  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  const logo = useMemo(() => getInitial(data.site.siteMetadata.title), []);
  const socialMedias: Array<SocialMedia> = useMemo(
    () => data.site.siteMetadata.socialMedias,
    []
  );

  useEffect(() => {
    if (showSidebarMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [showSidebarMenu]);

  const onNavbarMenuClick = (menu: Menu): void => {
    if (menu.ref.current)
      menu.ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    setShowSidebarMenu(false);
  };

  const renderMenu = useMemo(
    () => () =>
      navbarMenus?.map((menu, i) => (
        <MenuItem key={i} onClick={() => onNavbarMenuClick(menu)}>
          {menu.name}
        </MenuItem>
      )),
    []
  );

  const renderMenuIcon = useMemo(
    () => () =>
      navbarMenus?.map((menu, i) => (
        <Icon
          key={i}
          icon={menu.icon}
          onClick={() => onNavbarMenuClick(menu)}
        />
      )),
    []
  );

  const renderSocialMedia = useMemo(
    () => () =>
      socialMedias.map((social, i) => (
        <SocialMediaItem key={i}>
          <a href={social.link} target="_blank" rel="noreferrer">
            <Icon icon={social.icon} />
          </a>
        </SocialMediaItem>
      )),
    []
  );

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <AppBar>
        <Icon
          icon={["fas", "bars"]}
          width={20}
          height={20}
          mr="16px"
          className={classNames("menu")}
          onClick={() => setShowSidebarMenu(true)}
        />
        <Logo>{logo}</Logo>
        <MenuList>{renderMenu()}</MenuList>
        <SocialMediaList>{renderSocialMedia()}</SocialMediaList>
      </AppBar>
      <Sidebar className={classNames("desktop")}>
        <Logo>{logo}</Logo>
        <MenuList>{renderMenuIcon()}</MenuList>
        <SocialMediaList>{renderSocialMedia()}</SocialMediaList>
      </Sidebar>
      <Sidebar className={classNames("mobile")} show={showSidebarMenu}>
        <MenuList>{renderMenu()}</MenuList>
        <Icon
          icon={["fas", "x"]}
          width={20}
          height={20}
          className={classNames("close-menu")}
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
          icon
          username
          link
        }
      }
    }
  }
`;
