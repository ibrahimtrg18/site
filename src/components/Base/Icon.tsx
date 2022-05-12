import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as PopperJS from "@popperjs/core";
import classNames from "classnames";
import React, { FC, useRef, useState } from "react";
import { Modifier, usePopper } from "react-popper";
import styled, { css } from "styled-components";

import { margin } from "../../styles";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  icon: [IconPrefix, IconName];
  active?: boolean;
  tooltip?: string;
  width?: number;
  height?: number;
  tooltipOptions?: Omit<Partial<PopperJS.Options>, "modifiers"> & {
    createPopper?: typeof PopperJS.createPopper;
    modifiers?: ReadonlyArray<Modifier<any>>;
  };
}

export const IconComponent: FC<Props> = (props) => {
  const {
    icon,
    active,
    tooltip,
    tooltipOptions = {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 0],
          },
        },
      ],
    },
    ...restProps
  } = props;

  const referenceElement = useRef(null);
  const popperElement = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement.current,
    {
      ...tooltipOptions,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );

  const onMouseEnter = () => {
    setShowTooltip(true);
  };

  const onMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <IconContainer
        {...restProps}
        ref={referenceElement}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <FontAwesomeIcon icon={active ? ["fas", icon[1]] : icon} />
        <div
          ref={popperElement}
          className={classNames("tooltip", { "tooltip-hidden": !showTooltip })}
          style={styles.popper}
          {...attributes.popper}
        >
          <p className={classNames("small")}>{tooltip}</p>
        </div>
      </IconContainer>
    </>
  );
};

const IconContainer = styled.span`
  position: relative;
`;

export const Icon = styled(IconComponent)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => props.onClick && "pointer"};

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

  & > .tooltip {
    z-index: 100;
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: initial;

    &.tooltip-hidden {
      opacity: 0;
      visibility: hidden;
    }
  }
`;
