import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useEffect, useMemo, useState } from "react";

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

interface Menu {
  name: string;
  ref: React.RefObject<HTMLElement>;
}
interface SocialMedia {
  iconName: IconName;
  username: string;
  link: string;
}

interface Props {
  navbarMenus?: Array<Menu>;
}

const Navbar: FC<Props> = (props) => {
  const { navbarMenus } = props;
  const data = useStaticQuery(query);

  const [showSidebarMenu, setShowSidebarMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const logo = useMemo(() => getInitial(data.site.siteMetadata.title), []);
  const socialMedias: Array<SocialMedia> = useMemo(
    () => data.site.siteMetadata.socialMedias,
    []
  );

  console.log(navbarMenus);

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

  const onNavbarMenuClick = (menu: Menu): void => {
    if (menu.ref.current)
      menu.ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
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
