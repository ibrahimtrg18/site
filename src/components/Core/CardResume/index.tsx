import React, { FC } from "react";

import {
  CardResumeContainer,
  CardResumeContent,
  CardResumeContentBody,
  CardResumeContentTitle,
  CardResumeSubTitle,
  CardResumeTitle,
} from "./styles";

interface CardResumeProps {
  title?: string;
  subTitle?: string;
  contents?: Array<{
    title?: string;
    body?: string;
  }>;
}

const CardResume: FC<CardResumeProps> = (props) => {
  const { title, subTitle, contents } = props;

  return (
    <CardResumeContainer>
      <CardResumeTitle>{title}</CardResumeTitle>
      <CardResumeSubTitle>{subTitle}</CardResumeSubTitle>
      <CardResumeContent>
        {contents?.map((c, i) => (
          <React.Fragment key={i}>
            <CardResumeContentTitle>{c.title}</CardResumeContentTitle>
            <CardResumeContentBody>{c.body}</CardResumeContentBody>
          </React.Fragment>
        ))}
      </CardResumeContent>
    </CardResumeContainer>
  );
};

export default CardResume;
