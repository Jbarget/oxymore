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

import bellyButtonsImg from "../assets/erotic-stories/belly-buttons.jpg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import wingsBeatingImg from "../assets/erotic-stories/wings-beating.jpg";

const Grid = styled.div<GridProps & FlexboxProps & LayoutProps>`
  ${grid};
  ${flexbox};
  ${layout};
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

const EroticImageContainer = styled.div<GridProps>`
  ${grid};
`;

const EroticImage = styled.img``;

const ScrollableText = styled.p<GridProps>`
  overflow: scroll;
  ${grid};
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
      <H1 fontSize={5} mb={4}>
        Erotic Stories
      </H1>
      <H2 fontSize={5} mb={4}>
        my wings are beating
      </H2>
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
        <EroticImageContainer>
          <EroticImage src={wingsBeating.img} alt={wingsBeating.alt} />
        </EroticImageContainer>
        <ScrollableText
          dangerouslySetInnerHTML={{ __html: wingsBeating.text }}
        />

        <EroticImageContainer gridRow={[3, 3, 2]} gridColumn={[1, 1, 2]}>
          <EroticImage src={bellyButtons.img} alt={bellyButtons.alt} />
        </EroticImageContainer>
        <ScrollableText
          gridColumn={1}
          gridRow={2}
          dangerouslySetInnerHTML={{ __html: bellyButtons.text }}
        />
      </Grid>
    </Fragment>
  );
};

export default EroticStoriesContent;
