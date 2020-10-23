import { useTranslation } from "react-i18next";
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
import shellIcon from "../assets/project-page/shell.png";
import mijalImg from "../assets/conscious-shopping/mijal.jpg";
import trexImg from "../assets/conscious-shopping/t-rex.jpg";
import lydiaImg from "../assets/conscious-shopping/lydia.jpg";
import bootsImg from "../assets/conscious-shopping/boots.jpg";
import leSwingImg from "../assets/conscious-shopping/le-swing.jpg";
import sunglassesImg from "../assets/conscious-shopping/sunglasses.jpg";
import nadiaImg from "../assets/conscious-shopping/nadia.jpg";
import conchaImg from "../assets/conscious-shopping/concha.jpg";
import laiaImg from "../assets/conscious-shopping/laia.jpg";
import ConsciousShoppingPreview from "./ConsciousShoppingPreview";

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

const FirstColumn = styled.div< LayoutProps>`
  display: flex;
  flex-direction: column;
  ${layout};
`;

const SecondColumn = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  ${layout};
`;

const ThirdColumn = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  ${layout};
`;

const H1 = styled.h1<SpaceProps>`
  text-transform: uppercase;
  ${space};
`;

const H2 = styled.h2<SpaceProps>`
  ${space};
`;

const BigImage = styled.img<SpaceProps>`
  ${space};
  cursor: pointer;
`;

const SmallImage = styled.img<LayoutProps & FlexboxProps & SpaceProps>`
  ${layout};
  ${flexbox};
  ${space};
`;

const ScrollableText = styled.p<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
  overflow: scroll;
`;

const ProjectIcon = styled.img<LayoutProps & FlexboxProps>`
${layout};
${flexbox};
`;

interface CarouselProps {
  bigImage: string;
  smallImage: string;
  interviewText: string;
  alt: string;
}


const ConsciousShopping = () => {
  const { t } = useTranslation();
  const carousel: CarouselProps[] = [
    {
      bigImage: mijalImg,
      smallImage: trexImg,
      interviewText: t("conscious-shopping.mijal"),
      alt: "Mijal image"
    }, {
      bigImage: lydiaImg,
      smallImage: bootsImg,
      interviewText:  t("conscious-shopping.lydia"),
      alt:"Lydia image"
    }, {
      bigImage: leSwingImg,
      smallImage: sunglassesImg,
      interviewText:  t("conscious-shopping.le-swing"),
      alt:"Le Swing image"
    }, {
      bigImage: laiaImg,
      smallImage: conchaImg,
      interviewText:  t("conscious-shopping.laia"),
      alt:"Laia image"
    },
    {
      bigImage: nadiaImg,
      smallImage: conchaImg,
      interviewText: t("conscious-shopping.nadia"),
      alt:"Nadia image"
    },
  ];

  const [current, setCurrent] = useState(0);
  const next = (current + 1) % carousel.length;
  const currentCarouselItem = carousel[current];

  const mainImage = currentCarouselItem.bigImage
  const secondaryImage = currentCarouselItem.smallImage
  const interviewText = currentCarouselItem.interviewText
  const altTags = currentCarouselItem.alt

  const handleClick = useCallback(() => setCurrent(next), [next]);

  return (
    <Main justifyContent="center" alignItems="center"  fontFamily="secondary">
      <Container height="100%" flexDirection={["column", "column", "column", "column", "row"]}>
        <FirstColumn width={["100%", "100%", "100%", "100%", "30%"]}>
        <Link to="/projects">
          <ProjectIcon
            alt="shell icon"
            src={shellIcon}
            maxWidth={["25%", "25%", "25%", "25%", "15%"]}
            alignSelf="center"
          ></ProjectIcon>
          </Link>
          <H1 my={4}>Conscious Shopping:</H1>
          <H2 mb={4}>{t("conscious-shopping.subheader")}</H2>
          <ScrollableText textAlign="justify" mb={6}>
          {interviewText}
          </ScrollableText>
        </FirstColumn>
        <SecondColumn width={["100%", "100%", "100%", "100%", "40%"]}>
        <BigImage src={mainImage} alt={altTags} onClick={handleClick} p={4}/>
        </SecondColumn>
        <ThirdColumn width={["100%", "100%", "100%", "100%", "30%"]}>
          <SmallImage
            src={secondaryImage}  alt={altTags}
            maxWidth={["75%", "75%", "75%", "75%", "50%"]}
            justifySelf="start"
            pb={4}
          />
          <ScrollableText textAlign="justify" mb={6}>
         {interviewText}
          </ScrollableText>
        </ThirdColumn>
      </Container>
       {/* <ConsciousShoppingPreview/>  */}
    </Main>
  );
};

export default ConsciousShopping;
