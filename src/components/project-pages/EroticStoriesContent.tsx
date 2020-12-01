import React, { Fragment } from "react";
import styled from "styled-components";
import {
  FlexboxProps,
  flexbox,
  layout,
  LayoutProps,
  grid,
  GridProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import bellyButtons from "../assets/erotic-stories/belly-buttons.jpg";
import wingsBeating from "../assets/erotic-stories/wings-beating.jpg";
import { useTranslation } from "react-i18next";

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
      img: wingsBeating,
      text: t("erotic-stories.wings"),
      alt: "Erotic story image",
    },
    {
      img: bellyButtons,
      text: t("erotic-stories.bellyButtons"),
      alt: "Erotic story image",
    },
  ];

  const eroticStory1 = eroticStories[0];
  const eroticStory2 = eroticStories[1];

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
          <EroticImage src={eroticStory1.img} alt={eroticStory1.alt} />
        </EroticImageContainer>
        <ScrollableText dangerouslySetInnerHTML={{ __html: eroticStory1.text }}>
          {eroticStory1.text}
        </ScrollableText>
        <EroticImageContainer gridRow={[3, 3, 2]} gridColumn={[1, 1, 2]}>
          <EroticImage src={eroticStory2.img} alt={eroticStory2.alt} />
        </EroticImageContainer>
        <ScrollableText gridColumn={1} gridRow={2}>
          {eroticStory2.text}
        </ScrollableText>
      </Grid>
    </Fragment>
  );
};

export default EroticStoriesContent;
