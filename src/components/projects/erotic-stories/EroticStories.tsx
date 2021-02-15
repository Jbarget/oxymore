import {
  GridProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  grid,
  layout,
  space,
  typography,
} from "styled-system";

import EroticStoriesPreview from "./EroticStoriesPreview";
import Flex from "../../Flex";
import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../../constants/router-urls";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import bellyButtonsImg from "../../../assets/project-page/erotic-stories/belly-buttons.jpg";
import statue from "../../../assets/project-page/project-icons/statue.png";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import wingsBeatingImg from "../../../assets/project-page/erotic-stories/wings-beating.jpg";

const ReturnToProjectsPage = styled(Link)<LayoutProps>`
  ${layout};
  transition: all 1s ease;
  &:hover {
    transform: scale(1.05);
  }
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

const EroticImg = styled.img`
  width: 100%;
  height: 100%;
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

const EroticStoriesContent: React.FC = () => {
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
  const gridCellWidths = ["100%", "100%", "100%", "100%", "50%"];
  const heights = ["unset", "unset", "unset", "unset", "100vh"];

  return (
    <Flex flexDirection="column">
      <Flex flexDirection={["column", "column", "column", "column", "row"]}>
        <Flex
          width={gridCellWidths}
          minWidth={gridCellWidths}
          flexDirection="column"
          pt={[0, 0, 0, 0, 2]}
          pr={[0, 0, 0, 0, "40px"]}
        >
          <ReturnToProjectsPage to={PROJECTS_URL} width={90}>
            <img src={statue} alt="statue icon" />
          </ReturnToProjectsPage>
          <H1 fontSize={[2, 3, 4, 5]} my={4} fontFamily="secondary">
            Erotic Stories
          </H1>
          <H2 fontSize={[3, 4, 4, 5]} mb={4} fontFamily="secondary">
            {t("erotic-stories.wingsTitle")}
          </H2>
          <ScrollableText
            dangerouslySetInnerHTML={{ __html: wingsBeating.text }}
            fontFamily="secondary"
          />
        </Flex>
        <Flex
          width={gridCellWidths}
          minWidth={gridCellWidths}
          position={["unset", "unset", "unset", "sticky"]}
          height={heights}
          top={0}
          mb={[4, 4, 4, 4, 0]}
        >
          <EroticImg src={wingsBeating.img} alt={wingsBeating.alt} />
        </Flex>
      </Flex>
      <Flex
        flexDirection={["column", "column", "column", "column", "row-reverse"]}
      >
        <Flex
          width={gridCellWidths}
          minWidth={gridCellWidths}
          flexDirection="column"
          overflowY="auto"
          p={[0, 0, 0, 0, "60px"]}
        >
          <H2 fontSize={[3, 4, 4, 5]} mb={4} fontFamily="secondary">
            {t("erotic-stories.bellyButtonsTitle")}
          </H2>
          <ScrollableText
            dangerouslySetInnerHTML={{ __html: bellyButtons.text }}
            fontFamily="secondary"
          />
        </Flex>
        <Flex
          width={gridCellWidths}
          minWidth={gridCellWidths}
          position={["unset", "unset", "unset", "sticky"]}
          height={heights}
          top={0}
        >
          <EroticImg src={bellyButtons.img} alt={bellyButtons.alt} />
        </Flex>
      </Flex>
    </Flex>
  );
};

const launchDate = "2021-02-05";
const EroticStories: React.FC = () => {
  return (
    <Flex flex="auto">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={EroticStoriesPreview}
        ProjectPage={EroticStoriesContent}
      />
    </Flex>
  );
};

export default EroticStories;
