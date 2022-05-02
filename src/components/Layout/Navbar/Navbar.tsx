import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useEffect, useMemo, useState } from "react";

import { getInitial } from "../../../helpers/common";
import { Button } from "../../Base/Button";
import { Icon } from "../../Base/Icon";
import {
  AppBar,
  Logo,
  MenuItem,
  MenuList,
  NavbarContainer,
  Sidebar,
} from "./Navbar.styles";

interface Menu {
  name: string;
  icon: [IconPrefix, IconName];
  ref: React.RefObject<HTMLElement>;
}

interface Props {
  navbarMenus?: Array<Menu>;
  pageYOffset?: number;
}

const Navbar: FC<Props> = (props) => {
  const { navbarMenus, pageYOffset } = props;
  const data = useStaticQuery(query);

  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  const logo = useMemo(() => getInitial(data.site.siteMetadata.title), []);

  useEffect(() => {
    if (showSidebarMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [showSidebarMenu]);

  const onNavbarMenuClick = (menu: Menu): void => {
    if (menu.ref.current) {
      // menu.ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollTo({
        top: menu.ref.current.offsetTop,
        behavior: "smooth",
      });
    }
    setShowSidebarMenu(false);
  };

  const onGoTopClick = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderMenu = () =>
    navbarMenus?.map((menu, i) => (
      <MenuItem
        key={i}
        onClick={() => onNavbarMenuClick(menu)}
        className={classNames({
          active: Boolean(
            pageYOffset !== undefined &&
              menu.ref.current &&
              Math.ceil(pageYOffset) >= menu.ref.current.offsetTop &&
              Math.ceil(pageYOffset) + 1 <=
                menu.ref.current.offsetTop + menu.ref.current.clientHeight
          ),
        })}
      >
        {menu.name}
      </MenuItem>
    ));

  const renderMenuIcon = useMemo(
    () => () =>
      navbarMenus?.map((menu, i) => (
        <Icon
          key={i}
          active={Boolean(
            pageYOffset !== undefined &&
              menu.ref.current &&
              Math.ceil(pageYOffset) >= menu.ref.current.offsetTop &&
              Math.ceil(pageYOffset) + 1 <=
                menu.ref.current.offsetTop + menu.ref.current.clientHeight
          )}
          onClick={() => onNavbarMenuClick(menu)}
          icon={menu.icon}
          tooltip={menu.name}
          tooltipOptions={{ placement: "right" }}
        />
      )),
    [pageYOffset, navbarMenus]
  );

  return (
    <NavbarContainer isScrolled={Boolean(pageYOffset)}>
      <AppBar>
        <Logo>{logo}</Logo>
        <Icon
          icon={["fas", "bars"]}
          width={20}
          height={20}
          mr="16px"
          className={classNames("menu")}
          onClick={() => setShowSidebarMenu(true)}
        />
        <MenuList>{renderMenu()}</MenuList>
      </AppBar>
      <Sidebar className={classNames("desktop")}>
        <Logo>{logo}</Logo>
        <MenuList>{renderMenuIcon()}</MenuList>
        <Button
          variant="text"
          mt="auto"
          colorType="text"
          onClick={onGoTopClick}
        >
          <Icon icon={["fas", "chevron-up"]} width={20} height={20} />
        </Button>
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
