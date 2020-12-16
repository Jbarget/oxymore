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

import { Link } from "react-router-dom";
import React from "react";
import bellyButtonsImg from "../assets/erotic-stories/belly-buttons.jpg";
import statue from "../assets/project-page/statue.png";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import wingsBeatingImg from "../assets/erotic-stories/wings-beating.jpg";

const Grid = styled.div<GridProps & FlexboxProps & LayoutProps>`
  ${grid};
  ${flexbox};
  ${layout};
`;

const GridSquare = styled(Grid)<SpaceProps>`
  ${space};
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

const Div = styled.div<FlexboxProps & LayoutProps & SpaceProps>`
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
    <Grid
      display="grid"
      height={["auto", "auto", "100%"]}
      flexDirection="column"
      justifyContent="center"
      gridRowGap={3}
      gridColumnGap={3}
      gridTemplateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
    >
      <GridSquare
        gridColumn={1}
        gridRow={1}
        px={[0, 0, 4]}
        height="140vh"
        overflow="scroll"
      >
        <Div display="flex" justifyContent="center" p={4}>
          <Link to="/projects">
            <ProjectIcon
              src={statue}
              alt="project icon"
              maxWidth="15%"
            ></ProjectIcon>
          </Link>
        </Div>
        <H1 fontSize={[2, 3, 4, 5]} mb={4}>
          Erotic Stories
        </H1>

        <H2 fontSize={[2, 3, 4, 5]} mb={4}>
          {t("erotic-stories.wingsTitle")}
        </H2>
        <ScrollableText
          gridColumn={1}
          gridRow={1}
          textAlign="left"
          dangerouslySetInnerHTML={{ __html: wingsBeating.text }}
        />
      </GridSquare>
      <GridSquare gridColumn={[1, 1, 1, 2]} gridRow={[2, 2, 1]}>
        <img src={wingsBeating.img} alt={wingsBeating.alt} />
      </GridSquare>

      <GridSquare gridColumn={1} gridRow={[4, 4, 2]} px={[0, 0, 4]}>
        <img src={bellyButtons.img} alt={bellyButtons.alt} />
      </GridSquare>
      <GridSquare height="140vh" overflow="scroll">
        <H2 fontSize={[2, 3, 4, 5]} mb={4}>
          {t("erotic-stories.bellyButtonsTitle")}
        </H2>
        <ScrollableText
          gridColumn={[1, 1, 1, 2]}
          gridRow={2}
          textAlign="left"
          dangerouslySetInnerHTML={{ __html: bellyButtons.text }}
        />
      </GridSquare>
    </Grid>
  );
};

export default EroticStoriesContent;
