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
import shell from "../assets/project-page/shell.png";
import trex from "../assets/conscious-shopping/t-rex.jpg";
import lydia from "../assets/conscious-shopping/lydia.jpg";
import boots from "../assets/conscious-shopping/boots.jpg";
import leSwing from "../assets/conscious-shopping/le-swing.jpg";
import sunglasses from "../assets/conscious-shopping/sunglasses.jpg";
import nadia from "../assets/conscious-shopping/nadia.jpg";
import concha from "../assets/conscious-shopping/concha.jpg";
import laia from "../assets/conscious-shopping/laia.jpg";
import { useTranslation } from "react-i18next";
import theme from "../theme";

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

const SecondColumn = styled.div<FlexboxProps & LayoutProps & SpaceProps>`
  display: flex;
  flex-direction: column;
  ${flexbox};
  ${layout};
  ${space};
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

interface CarouselProps {
  mainImg: string;
  secondaryImg: string;
  interviewText: string;
  alt: string;
}


const ConsciousShopping = () => {
  const { t } = useTranslation();
  const carousel: CarouselProps[] = [
    {
      mainImg: mijal,
      secondaryImg: trex,
      interviewText: t("conscious-shopping.mijal"),
      alt: "Mijal image"
    }, {
      mainImg: lydia,
      secondaryImg: boots,
      interviewText:  t("conscious-shopping.lydia"),
      alt:"Lydia image"
    }, {
      mainImg: leSwing,
      secondaryImg: sunglasses,
      interviewText:  t("conscious-shopping.le-swing"),
      alt:"Le Swing image"
    }, {
      mainImg: laia,
      secondaryImg: concha,
      interviewText:  t("conscious-shopping.laia"),
      alt:"Laia image"
    }, 
    {
      mainImg: nadia,
      secondaryImg: concha,
      interviewText: t("conscious-shopping.nadia"),
      alt:"Nadia image"
    },
  ];

  const [current, setCurrent] = useState(0);
  const next = (current + 1) % carousel.length;
  const mainImage = carousel[current].mainImg
  const secondaryImage = carousel[current].secondaryImg
  const interviewText = carousel[current].interviewText

  var Keys = {
    left: false,
    right: false
};

function onKeyDown(key: { which: number; }) {
  if (key.which == 37){Keys.left = true;}
  if (key.which == 39){Keys.right = true;}
} 

function onKeyUp(key: { which: number; }) {
  if (key.which == 37){Keys.left = false;}
  if (key.which == 39){Keys.right = false;}
} 

function handleClick() {
  setCurrent(next);
  onKeyDown({which: 0});
  onKeyUp({which: 0});
} 

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
          {interviewText}
          </ScrollableText>
        </FirstColumn>
        <SecondColumn width={["100%", "100%", "100%", "100%", "40%"]} mx={4}>
        <MainImgCarousel src={mainImage} onClick={() => handleClick()}/>
        </SecondColumn>
        <ThirdColumn width={["100%", "100%", "100%", "100%", "30%"]}>
          <SecondaryImgCarousel
            alt="t-rex"
            src={secondaryImage}
            maxWidth={["75%", "75%", "75%", "75%", "50%"]}
            justifySelf="start"
          />
          <ScrollableText>
         {interviewText}
          </ScrollableText>
        </ThirdColumn>
      </Container>
      {/* <Timer endDate="2020-11-20" /> */}
    </Main>
  );
};

export default ConsciousShopping;
