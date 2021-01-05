import {
  FlexboxProps,
  GridProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  flexbox,
  grid,
  layout,
  space,
  typography,
} from "styled-system";
import React, { Fragment } from "react";

import Flex from "../Flex";
import { Link } from "react-router-dom";
import bellyButtonsImg from "./../../assets/project-page/erotic-stories/belly-buttons.jpg";
import statue from "./../../assets/project-page/project-icons/statue.png";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import wingsBeatingImg from "./../../assets/project-page/erotic-stories/wings-beating.jpg";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProjectIcon = styled.img<LayoutProps & FlexboxProps>`
  ${layout};
  ${flexbox};
`;

const H1 = styled.h1<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${space};
  ${typography};
`;

const H2 = styled.h2<TypographyProps & SpaceProps>`
  ${space};
  ${typography};
`;

const IconContainer = styled.div<FlexboxProps & LayoutProps & SpaceProps>`
  ${flexbox};
  ${layout};
  ${space};
`;

const ScrollableText = styled.p<GridProps & TypographyProps>`
  ${grid};
  ${typography};
`;

interface EroticStoryProps {
  img: string;
  text: string;
  alt: string;
}

const EroticStoriesContent = () => {
  const { t } = useTranslation();
  const eroticStories: EroticStoryProps[] = [
    {
      img: wingsBeatingImg,
      text: t("erotic-stories.wings"),
      alt: "Erotic story image",
    },
    {
      img: bellyButtonsImg,
      text: t("erotic-stories.bellyButtons"),
      alt: "Erotic story image",
    },
  ];

  const wingsBeating = eroticStories[0];
  const bellyButtons = eroticStories[1];

  return (
    <Fragment>
      <Flex flexDirection={["column", "column", "column", "row"]}>
        <Flex
          width={["100%", "100%", "100%", "50%"]}
          minWidth={["100%", "100%", "100%", "50%"]}
          flexDirection="column"
          p={6}
          pl="0"
          pr={[0, 0, 0, 6]}
        >
          <IconContainer p={4}>
            <Link to="/projects">
              <ProjectIcon
                src={statue}
                alt="project icon"
                maxWidth="15%"
              ></ProjectIcon>
            </Link>
          </IconContainer>
          <H1 fontSize={[2, 3, 4, 5]} mb={4}>
            Erotic Stories
          </H1>
          <H2 fontSize={[2, 3, 4, 5]} mb={4}>
            {t("erotic-stories.wingsTitle")}
          </H2>
          <ScrollableText
            textAlign="left"
            dangerouslySetInnerHTML={{ __html: wingsBeating.text }}
          />
        </Flex>
        <Flex
          width={["100%", "100%", "100%", "50%"]}
          minWidth={["100%", "100%", "100%", "50%"]}
          position={["unset", "unset", "unset", "sticky"]}
          height={["unset", "unset", "unset", "100vh"]}
          top="0"
        >
          <Img src={wingsBeating.img} alt={wingsBeating.alt} />
        </Flex>
      </Flex>
      <Flex flexDirection={["column", "column", "column", "row-reverse"]}>
        <Flex
          width={["100%", "100%", "100%", "50%"]}
          minWidth={["100%", "100%", "100%", "50%"]}
          flexDirection="column"
          overflowY="auto"
          p={6}
          pl={[0, 0, 0, 6]}
          pr="0"
        >
          <H2 fontSize={[2, 3, 4, 5]} mb={4}>
            {t("erotic-stories.bellyButtonsTitle")}
          </H2>
          <ScrollableText
            textAlign="left"
            dangerouslySetInnerHTML={{ __html: bellyButtons.text }}
          />
        </Flex>
        <Flex
          width={["100%", "100%", "100%", "50%"]}
          minWidth={["100%", "100%", "100%", "50%"]}
          position={["unset", "unset", "unset", "sticky"]}
          height={["unset", "unset", "unset", "100vh"]}
          top="0"
        >
          <Img src={bellyButtons.img} alt={bellyButtons.alt} />
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default EroticStoriesContent;
