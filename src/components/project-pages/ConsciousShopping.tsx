import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Timer from "../Timer";
import {
  FlexboxProps,
  flexbox,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import mijal from "../assets/conscious-shopping/mijal.jpg";
import shell from "../assets/project-page/shell-720.png";
import trex from "../assets/conscious-shopping/t-rex.jpg";
import lydia from "../assets/conscious-shopping/lydia.jpg";
import boots from "../assets/conscious-shopping/boots.jpg";
import leSwing from "../assets/conscious-shopping/le-swing.jpg";
import sunglasses from "../assets/conscious-shopping/sunglasses.jpg";
import nadia from "../assets/conscious-shopping/nadia.jpg";
import concha from "../assets/conscious-shopping/concha.jpg";
import laia from "../assets/conscious-shopping/laia.jpg";
import { useTranslation } from "react-i18next";

const Main = styled.main<FlexboxProps & TypographyProps>`
  display: flex;
  height: 100%;
  ${flexbox}
  ${typography};
`;

const Container = styled.div<FlexboxProps & LayoutProps>`
  display: flex;
  ${flexbox};
  ${layout};
`;

//Loading View 
const ProjectIconPreview = styled.img<LayoutProps>`
  ${layout};
`;

const FirstColumn = styled.div<FlexboxProps & LayoutProps>`
  display: flex;
  flex-direction: column;
  ${layout};
  ${flexbox};
`;

const SecondColumn = styled.div<FlexboxProps & LayoutProps>`
  display: flex;
  flex-direction: column;
  ${flexbox};
  ${layout};
`;

const ThirdColumn = styled.div<FlexboxProps & LayoutProps>`
  display: flex;
  flex-direction: column;
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

const MainImgCarousel = styled.img<LayoutProps>`
  ${layout};
`;

const SecondaryImgCarousel = styled.img<LayoutProps & FlexboxProps>`
  ${layout};
  ${flexbox};
`;

const ScrollableText = styled.p<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
  overflow: scroll;
  text-align: justify;
  line-height: 1.5;
`;

const ProjectIcon = styled.img<LayoutProps & FlexboxProps>`
${layout};
${flexbox};
`;

interface CarouselImageProps {
  mainImg: string;
  secondaryImg: string;
  interviewText: string;
  alt: string;
}

const carouselImages: CarouselImageProps[] = [
  {
    mainImg: mijal,
    secondaryImg: trex,
    interviewText: "",
    alt: "mijal"
  }, {
    mainImg: lydia,
    secondaryImg: boots,
    interviewText: "",
    alt:"lydia"
  }, {
    mainImg: leSwing,
    secondaryImg: sunglasses,
    interviewText: "",
    alt:"le-swing"
  }, {
    mainImg: laia,
    secondaryImg: concha,
    interviewText: "",
    alt:"laia"
  }, 
  {
    mainImg: nadia,
    secondaryImg: concha,
    interviewText: "",
    alt:"nadia"
  },
];


const ConsciousShopping = () => {
  const { t } = useTranslation();
  const mainImg = carouselImages[0].mainImg

  const [current, setCurrent] = useState(0);

   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
    // Update the main carousel image using the browser API
    console.log('this works')
  });
  
  return (
    <Main justifyContent="center" alignItems="center"  fontFamily="SangBleuOGSerif-Light"
    >
      <Container height="100%"
        flexDirection={["column", "column", "column", "column", "row"]}>
        {/* <ProjectIconPreview src={shell} maxWidth="30%" /> */}
        <FirstColumn width={["100%", "100%", "100%", "100%", "30%"]}>
          <ProjectIcon
            alt="shell"
            src={shell}
            maxWidth={["25%", "25%", "25%", "25%", "15%"]}
            alignSelf="center"
          ></ProjectIcon>
          <H1 my={4}>Conscious Shopping:</H1>
          <H2 mb={4}>{t("conscious-shopping.subheader")}</H2>
          <ScrollableText>
            {t("conscious-shopping.scrollable-text")}
          </ScrollableText>
        </FirstColumn>
        <SecondColumn width={["100%", "100%", "100%", "100%", "40%"]}>
        <MainImgCarousel src={mainImg} onClick={() => setCurrent(current + 1)}/>
        </SecondColumn>
        <ThirdColumn width={["100%", "100%", "100%", "100%", "30%"]}>
          <SecondaryImgCarousel
            alt="t-rex"
            src={trex}
            maxWidth={["75%", "75%", "75%", "75%", "50%"]}
            justifySelf="start"
          />
          <ScrollableText>
            {t("conscious-shopping.scrollable-text")}
          </ScrollableText>
        </ThirdColumn>
      </Container>
      {/* <Timer endDate="2020-11-20" /> */}
    </Main>
  );
};

export default ConsciousShopping;
