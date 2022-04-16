import React, { FC } from "react";

import { MainContainer } from "./styled";

interface Props {
  children: React.ReactNode;
  isScrolled?: boolean;
}

const Main: FC<Props> = (props) => {
  const { children, isScrolled } = props;

  return <MainContainer isScrolled={isScrolled}>{children}</MainContainer>;
};

export default Main;
