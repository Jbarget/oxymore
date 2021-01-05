import {
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  flexbox,
  layout,
  position,
  space,
  typography,
} from "styled-system";
import React, { useCallback, useState } from "react";
import theme, { zIndexes } from "../theme";

import Flex from "../Flex";
import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../constants/router-urls";
import arrow from "./../../assets/project-page/conscious-shopping/arrow.png";
import bootsImg from "./../../assets/project-page/conscious-shopping/boots.jpg";
import conchaImg from "./../../assets/project-page/conscious-shopping/concha.jpg";
import laiaImg from "./../../assets/project-page/conscious-shopping/laia.jpg";
import leSwingImg from "./../../assets/project-page/conscious-shopping/le-swing.jpg";
import lydiaImg from "./../../assets/project-page/conscious-shopping/lydia.jpg";
import mijalImg from "./../../assets/project-page/conscious-shopping/mijal.jpg";
import nadiaImg from "./../../assets/project-page/conscious-shopping/nadia.jpg";
import shellIcon from "./../../assets/project-page/project-icons/shell.png";
import styled from "styled-components";
import sunglassesImg from "./../../assets/project-page/conscious-shopping/sunglasses.jpg";
import trexImg from "./../../assets/project-page/conscious-shopping/t-rex.jpg";
import { useTranslation } from "react-i18next";

const H1 = styled.h1<SpaceProps>`
  text-transform: uppercase;
  ${space};
`;

const H2 = styled.h2<SpaceProps>`
  ${space};
`;

const BigImage = styled.img<SpaceProps & LayoutProps & PositionProps>`
  ${space};
  ${layout};
  ${position};
`;

const SmallImage = styled.img<LayoutProps & FlexboxProps & SpaceProps>`
  ${layout};
  ${flexbox};
  ${space};
`;

const Arrow = styled.img<LayoutProps & SpaceProps & PositionProps>`
  ${layout};
  ${space};
  ${position};
  z-index: ${zIndexes.inFront};
  cursor: pointer;
  transition: transform 0.2s;
  transform-origin: left;
  &:hover {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    scrollbar-color: ${theme.colors.black} transparent;
  }
`;

const ScrollableText = styled.p<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const ProjectIcon = styled.img<LayoutProps & FlexboxProps>`
  ${layout};
  ${flexbox};
`;

interface CarouselProps {
  title: string;
  bigImage: string;
  smallImage: string;
  interviewTextLeftCol: string;
  interviewTextRightCol: string;
  alt: string;
}

const ConsciousShoppingContent = () => {
  const { t } = useTranslation();
  const carousel: CarouselProps[] = [
    {
      title: t("conscious-shopping.mijal.title"),
      bigImage: mijalImg,
      smallImage: trexImg,
      interviewTextLeftCol: t("conscious-shopping.mijal.interviewP1"),
      interviewTextRightCol: t("conscious-shopping.mijal.interviewP2"),
      alt: "Mijal image",
    },
    {
      title: t("conscious-shopping.lydia.title"),
      bigImage: lydiaImg,
      smallImage: bootsImg,
      interviewTextLeftCol: t("conscious-shopping.lydia.interviewP1"),
      interviewTextRightCol: t("conscious-shopping.lydia.interviewP2"),
      alt: "Lydia image",
    },
    {
      title: t("conscious-shopping.le-swing.title"),
      bigImage: leSwingImg,
      smallImage: sunglassesImg,
      interviewTextLeftCol: t("conscious-shopping.le-swing.interviewP1"),
      interviewTextRightCol: t("conscious-shopping.le-swing.interviewP2"),
      alt: "Le Swing image",
    },
    {
      title: t("conscious-shopping.laia.title"),
      bigImage: laiaImg,
      smallImage: conchaImg,
      interviewTextLeftCol: t("conscious-shopping.laia.interviewP1"),
      interviewTextRightCol: t("conscious-shopping.laia.interviewP2"),
      alt: "Laia image",
    },
    {
      title: t("conscious-shopping.nadia.title"),
      bigImage: nadiaImg,
      smallImage: conchaImg,
      interviewTextLeftCol: t("conscious-shopping.nadia.interviewP1"),
      interviewTextRightCol: t("conscious-shopping.nadia.interviewP2"),
      alt: "Nadia image",
    },
  ];

  const [current, setCurrent] = useState(0);
  const next = (current + 1) % carousel.length;
  const currentCarouselItem = carousel[current];

  const title = currentCarouselItem.title;
  const mainImage = currentCarouselItem.bigImage;
  const secondaryImage = currentCarouselItem.smallImage;
  const interviewTextLeftCol = currentCarouselItem.interviewTextLeftCol;
  const interviewTextRightCol = currentCarouselItem.interviewTextRightCol;
  const altTags = currentCarouselItem.alt;

  const handleClick = useCallback(() => setCurrent(next), [next]);

  return (
    <Flex
      flexDirection={["column", "column", "column", "column", "row"]}
      height={["unset", "unset", "unset", "100vh"]}
      alignItems={["center", "center", "center", "center", "unset"]}
      width="100%"
      overflowX="hidden"
    >
      <Flex
        width={["100%", "100%", "100%", "100%", "40%"]}
        flexDirection="column"
      >
        <Link to={PROJECTS_URL}>
          <ProjectIcon
            alt="shell icon"
            src={shellIcon}
            maxWidth={80}
            alignSelf="center"
          ></ProjectIcon>
        </Link>
        <H1 my={4}>Conscious Shopping</H1>
        <H2 mb={4}>{title}</H2>
        <TextContainer>
          <ScrollableText
            textAlign="justify"
            mb={6}
            mr={2}
            dangerouslySetInnerHTML={{ __html: interviewTextLeftCol }}
          ></ScrollableText>
        </TextContainer>
      </Flex>

      <BigImage src={mainImage} alt={altTags} maxWidth={500} p={4} />
      <Arrow
        src={arrow}
        alt="arrow"
        maxHeight={[80, 80, 80, 80, 40]}
        maxWidth={[80, 80, 80, 80, 40]}
        position={["unset", "unset", "unset", "unset", "relative"]}
        right={72}
        top={280}
        onClick={handleClick}
      ></Arrow>

      <Flex
        width={["100%", "100%", "100%", "100%", "40%"]}
        flexDirection="column"
        alignItems="center"
      >
        <SmallImage
          src={secondaryImage}
          alt={altTags}
          maxWidth={[400, 400, 200]}
        />
        <TextContainer>
          <ScrollableText
            textAlign="justify"
            mb={6}
            mr={2}
            dangerouslySetInnerHTML={{ __html: interviewTextRightCol }}
          ></ScrollableText>
        </TextContainer>
      </Flex>
    </Flex>
  );
};

export default ConsciousShoppingContent;
