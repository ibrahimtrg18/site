import React, { FC } from "react";

import { MainContainer } from "./styled";

interface Props {
  children: React.ReactNode;
}

const Main: FC<Props> = (props) => {
  const { children } = props;

  return <MainContainer>{children}</MainContainer>;
};

export default Main;
