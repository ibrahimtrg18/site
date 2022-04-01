/* eslint-disable import/namespace */
import React, { FC } from "react";
import * as Icons from "react-feather";
import styled from "styled-components";

import { margin } from "../../styles";

export type IconName = keyof typeof Icons;

interface Props extends React.SVGAttributes<SVGElement>, Icons.IconProps {
  name: IconName;
}

export const IconComponent: FC<Props> = (props) => {
  const { name, ...restProps } = props;

  const IconComponent = Icons[name];

  return <IconComponent {...restProps} />;
};

export const Icon = styled(IconComponent)`
  ${margin}
`;
