import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { margin } from "../../styles";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  width?: number;
  height?: number;
  icon: [IconPrefix, IconName];
}

export const IconComponent: FC<Props> = (props) => {
  const { icon, width, height, ...restProps } = props;

  return (
    <IconContainer {...restProps}>
      <FontAwesomeIcon icon={icon} />
    </IconContainer>
  );
};

const IconContainer = styled.span``;

export const Icon = styled(IconComponent)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${margin}

  & > svg {
    ${(props) => {
      if (props.width)
        return css`
          width: ${props.width}px !important;
        `;
    }}

    ${(props) => {
      if (props.height) {
        return css`
          height: ${props.height}px !important;
        `;
      }
    }}
  }
`;
