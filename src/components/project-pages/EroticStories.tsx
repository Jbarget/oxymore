import React from "react";
import styled from "styled-components";
import { FlexboxProps, flexbox, layout, LayoutProps, grid, GridProps, space, SpaceProps, typography, TypographyProps } from "styled-system";
import EroticStoriesPreview from "./EroticStoriesPreview";
import alasImg from "./../assets/erotic-stories/alas-bateando.jpg";
import ombligosImg from "./../assets/erotic-stories/ombligos.jpg";


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


const EroticImageContainer = styled.div<GridProps>`
  ${grid};
  object-fit: contain;
  height: 100%;
`;

const EroticImage = styled.img`
  height: 100%;
  width: 100%;
`;

const ScrollableText = styled.p<GridProps>`
  ${grid};
  overflow: scroll;
  height: 100%;
`;


interface EroticStoryProps {
  title: string;
  img: string;
  text: string;
  alt: string;
}

const eroticStories: EroticStoryProps[] = [
  {
    title: "Ombligos",
    img: ombligosImg,
    text: "some text",
    alt: "Artwork image",
  },
  {
    title: "Alas Bateando",
    img: ombligosImg,
    text: "some more text",
    alt: "Artwork image",
  }
];


const EroticStories = () => {

  return (
    <Main fontFamily="secondary">
      <H1 fontSize={5} mb={4}>
       Erotic Stories
      </H1>
      <H2 fontSize={5} mb={4}>
        my wings are beating
      </H2>
      <Grid display={["flex", "flex", "flex", "grid"]}
        flexDirection="column"
        justifyContent="center"
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(2, 50% [col-start])",
          "repeat(2, 50% [col-start])",
        ]}
      >
      <EroticImageContainer gridColumn={1}>
      <EroticImage src={eroticStories[0].img}/>
      </EroticImageContainer>
      <ScrollableText gridColumn={2}>
        {eroticStories[0].text}
      </ScrollableText>
      <EroticImageContainer gridColumn={2}>
      <EroticImage src={eroticStories[1].img}/>
      </EroticImageContainer>
      <ScrollableText gridColumn={1} gridRow={2}>
        {eroticStories[1].text}
      </ScrollableText>
      </Grid>
        {/* <EroticStoriesPreview/> */}
    </Main>
  );
};

export default EroticStories;
