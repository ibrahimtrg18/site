import React, { FC } from "react";

import {
  CardContainer,
  CardContent,
  CardImage,
  CardOverlay,
  CardTitle,
} from "./CardProject.styles";

interface CardProps {
  title: string;
  image: string;
  url: string;
}

const CardProject: FC<CardProps> = (props) => {
  const { title, image, url, ...restProps } = props;

  return (
    <CardContainer
      {...restProps}
      href={url}
      target={url ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <CardContent>
        <CardImage src={image} alt={title} />
        <CardOverlay>
          <CardTitle>{title}</CardTitle>
        </CardOverlay>
      </CardContent>
    </CardContainer>
  );
};

export default CardProject;
