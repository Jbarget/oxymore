import React from "react";
import styled from "styled-components";
import { FlexboxProps, flexbox, layout, LayoutProps, grid, GridProps, space, SpaceProps, typography, TypographyProps } from "styled-system";
import EroticStoriesPreview from "./EroticStoriesPreview";
import alasImg from "./../assets/erotic-stories/alas-bateando.jpg";
import ombligosImg from "./../assets/erotic-stories/ombligos.jpg";
import { useTranslation } from "react-i18next";


const Main = styled.main<TypographyProps>`
  ${typography};
  height: 100%;
`;

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

const H2 = styled.h1<TypographyProps & SpaceProps>`
  ${space};
  ${typography};
`;


const EroticImageContainer = styled.div<GridProps & SpaceProps>`
  ${grid};
  ${space};
  object-fit: contain;
  height: fit-content;
`;

const EroticImage = styled.img<SpaceProps>`
height: 100%;
width: 100%;
${space};
`;

const ScrollableTextContainer = styled.div<GridProps & SpaceProps>`
  ${grid};
  ${space};
  object-fit: contain;
  overflow: scroll;
`;


const ScrollableText = styled.p<GridProps & SpaceProps>`
  ${grid};
  ${space};
  overflow: scroll;
`;


interface EroticStoryProps {
  title: string;
  img: string;
  text: string;
  alt: string;
}




const EroticStories = () => {
  const { t } = useTranslation();
  const eroticStories: EroticStoryProps[] = [
    {
      title: "Ombligos",
      img: ombligosImg,
      text: t("erotic-stories.poem"),
      alt: "Artwork image",
    },
    {
      title: "Alas Bateando",
      img: ombligosImg,
      text: t("erotic-stories.poem"),
      alt: "Artwork image",
    }
  ];

const eroticStory1 = eroticStories[0]
const eroticStory2 = eroticStories[1]

  return (
    <Main fontFamily="secondary" textAlign="justify">
      <H1 fontSize={5} mb={4}>
       Erotic Stories
      </H1>
      <H2 fontSize={5} mb={4}>
        my wings are beating
      </H2>
      <Grid display={["flex", "flex", "flex", "grid"]}
        height = {["auto", "auto", "auto", "100%"]}
        flexDirection="column"
        justifyContent="center"
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(2, 50% [col-start])",
          "repeat(2, 50% [col-start])",
        ]}
      >
      <EroticImageContainer gridColumn={1} pb={4} pr={[0, 0, 0, 4]} >
      <EroticImage src={eroticStory1.img} alt={eroticStory1.alt}/>
      </EroticImageContainer>
      <ScrollableTextContainer gridColumn={2} pb={4} pl={[0, 0, 0, 4]}>
      <ScrollableText >
        {eroticStories[0].text}
      </ScrollableText>
      </ScrollableTextContainer>
      <EroticImageContainer gridColumn={2} pt={4} pl={[0, 0, 0, 4]}>
      <EroticImage src={eroticStory2.img} alt={eroticStory2.alt}/>
      </EroticImageContainer>
      <ScrollableTextContainer gridColumn={1} gridRow={2} pb={8} pt={4} pr={[0, 0, 0, 4]}>
      <ScrollableText>
        {eroticStories[1].text}
      </ScrollableText>
      </ScrollableTextContainer>
      </Grid>
        {/* <EroticStoriesPreview/> */}
    </Main>
  );
};

export default EroticStories;
