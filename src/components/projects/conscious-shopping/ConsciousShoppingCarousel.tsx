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
import React, { useEffect, useState } from "react";

import Flex from "../../Flex";
import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../../constants/router-urls";
import arrow from "../../../assets/project-page/conscious-shopping/arrow.png";
import bagImg from "../../../assets/project-page/conscious-shopping/bag.jpg";
import bootsImg from "../../../assets/project-page/conscious-shopping/boots.jpg";
import conchaImg from "../../../assets/project-page/conscious-shopping/concha.jpg";
import laiaImg from "../../../assets/project-page/conscious-shopping/laia.jpg";
import leSwingImg from "../../../assets/project-page/conscious-shopping/le-swing.jpg";
import lydiaImg from "../../../assets/project-page/conscious-shopping/lydia.jpg";
import mijalImg from "../../../assets/project-page/conscious-shopping/mijal.jpg";
import nadiaImg from "../../../assets/project-page/conscious-shopping/nadia.jpg";
import shellIcon from "../../../assets/project-page/project-icons/shell.png";
import styled from "styled-components";
import sunglassesImg from "../../../assets/project-page/conscious-shopping/sunglasses.jpg";
import theme from "../../theme";
import trexImg from "../../../assets/project-page/conscious-shopping/t-rex.jpg";
import { useTranslation } from "react-i18next";

const ColumnOne = styled(Flex)``;
const ColumnTwo = styled(Flex)`
  text-align: center;
`;
const ColumnThree = styled(Flex)``;

const H1 = styled.h1<SpaceProps & TypographyProps>`
  text-transform: uppercase;
  ${space};
  ${typography};
`;

const H2 = styled.h2<SpaceProps & TypographyProps>`
  ${space};
  ${typography};
`;

const BigImage = styled.img<SpaceProps & LayoutProps & PositionProps>`
  transition: all 1s ease-out;
  ${space};
  ${layout};
  ${position};
`;

const SmallImage = styled.img<LayoutProps & FlexboxProps & SpaceProps>`
  ${layout};
  ${flexbox};
  ${space};
`;

const RightArrow = styled.img<LayoutProps & SpaceProps & PositionProps>`
  ${layout};
  ${space};
  ${position};
  z-index: ${theme.zIndexes.inFront};
  cursor: pointer;
  transition: all 1s ease-out;
  transform-origin: left;
  transform: scaleX(1);
  &:hover {
    transform: scaleX(1.2);
  }
`;

const LeftArrow = styled(RightArrow)`
  transform: scaleX(-1);
  &:hover {
    transform: scaleX(-1.2);
  }
`;

const TextContainer = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    scrollbar-color: ${theme.colors.black};
    background-color: transparent;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: none !important;
    background-color: transparent;
  }
`;

const ImageContainer = styled.div<LayoutProps>`
  ${layout};
`;

const ScrollableText = styled.p<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const ReturnToProjectsPage = styled(Link)<LayoutProps & PositionProps>`
  ${layout};
  ${position};
  transition: all 1s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

interface CarouselProps {
  title: string;
  bigImage: string;
  smallImage: string;
  interviewTextLeftCol: string;
  interviewTextRightCol: string;
  alt: string;
}

const ConsciousShoppingCarousel = () => {
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
      smallImage: bagImg,
      interviewTextLeftCol: t("conscious-shopping.nadia.interviewP1"),
      interviewTextRightCol: t("conscious-shopping.nadia.interviewP2"),
      alt: "Nadia image",
    },
  ];

  let [currentPosition, setCurrentPosition] = useState(0);
  let currentCarouselItem = carousel[currentPosition];

  const title = currentCarouselItem.title;
  const mainImage = currentCarouselItem.bigImage;
  const secondaryImage = currentCarouselItem.smallImage;
  const interviewTextLeftCol = currentCarouselItem.interviewTextLeftCol;
  const interviewTextRightCol = currentCarouselItem.interviewTextRightCol;
  const altTags = currentCarouselItem.alt;

  const arrowRightClick = () => {
    currentPosition !== carousel.length - 1 // Check index length
      ? setCurrentPosition(currentPosition + 1)
      : setCurrentPosition((currentPosition = 0));
    return false;
  };

  const arrowLeftClick = () => {
    currentPosition !== 0 // Check index length
      ? setCurrentPosition(currentPosition - 1)
      : setCurrentPosition((currentPosition = carousel.length - 1));
    return false;
  };

  useEffect(() => {
    const right = (e: KeyboardEvent) => {
      if (currentPosition !== carousel.length - 1 && e.key === "ArrowRight") {
        setCurrentPosition(currentPosition + 1);
      } else if (
        currentPosition === carousel.length - 1 &&
        e.key === "ArrowRight"
      ) {
        setCurrentPosition(0);
      }
    };
    window.addEventListener("keydown", right);
    return () => window.removeEventListener("keydown", right);
  }, [currentPosition, carousel]);

  useEffect(() => {
    const left = (e: KeyboardEvent) => {
      if (currentPosition !== 0 && e.key === "ArrowLeft") {
        setCurrentPosition(currentPosition - 1);
      } else if (currentPosition === 0 && e.key === "ArrowLeft") {
        setCurrentPosition(carousel.length - 1);
      }
    };
    window.addEventListener("keydown", left);
    return () => window.removeEventListener("keydown", left);
  }, [currentPosition, carousel]);

  const MoveRight = ({ onClick }: { onClick: () => void }) => {
    return (
      <RightArrow
        src={arrow}
        alt="arrow"
        position={["unset", "unset", "unset", "unset", "relative"]}
        right={50}
        height={40}
        minHeight={40}
        onClick={onClick}
      ></RightArrow>
    );
  };

  const MoveLeft = ({ onClick }: { onClick: () => void }) => {
    return (
      <LeftArrow
        src={arrow}
        alt="arrow"
        position={["unset", "unset", "unset", "unset", "relative"]}
        left={-440}
        height={40}
        minHeight={40}
        onClick={onClick}
      ></LeftArrow>
    );
  };

  return (
    <Flex
      flexDirection={["column", "column", "column", "column", "row"]}
      height={["unset", "unset", "unset", "unset", "100vh"]}
      alignItems={["center", "center", "center", "center", "unset"]}
      overflowX="hidden"
      justifyContent="center"
    >
      <Flex flexDirection={["column", "column", "column", "column", "row"]}>
        <Flex
          flexDirection={["column", "column", "column", "row", "row"]}
          width="100%"
        >
          <ColumnOne
            width={["100%", "100%", "100%", "100%", "40%"]}
            flexDirection="column"
          >
            <ReturnToProjectsPage
              to={PROJECTS_URL}
              width={60}
              zIndex={theme.zIndexes.inFront}
            >
              <img src={shellIcon} alt="shell icon" />
            </ReturnToProjectsPage>
            <H1 my={4} fontFamily="secondary">
              Conscious Shopping
            </H1>
            <H2 mb={4} fontFamily="secondary">
              {title}
            </H2>
            <TextContainer>
              <ScrollableText
                fontFamily="secondary"
                mb={6}
                dangerouslySetInnerHTML={{ __html: interviewTextLeftCol }}
              ></ScrollableText>
            </TextContainer>
          </ColumnOne>
          <ColumnTwo
            alignItems="center"
            width={["100%", "100%", "100%", "100%", "60%"]}
            flexDirection={["column", "column", "column", "column", "row"]}
          >
            <ImageContainer width="100%">
              <BigImage
                src={mainImage}
                alt={altTags}
                minWidth={[320, 320, 320, 420, 420]}
                p={4}
              />
            </ImageContainer>
            <Flex
              flexDirection={["column", "column", "column", "column", "row"]}
            >
              <MoveLeft onClick={arrowLeftClick} />
              <MoveRight onClick={arrowRightClick} />
            </Flex>
          </ColumnTwo>
        </Flex>
        <ColumnThree
          width={["100%", "100%", "100%", "100%", "40%"]}
          flexDirection="column"
          alignItems="center"
          ml={[0, 0, 0, 5]}
        >
          <SmallImage
            src={secondaryImage}
            alt={altTags}
            minWidth={240}
            width={240}
          />
          <TextContainer>
            <ScrollableText
              fontFamily="secondary"
              mb={6}
              dangerouslySetInnerHTML={{ __html: interviewTextRightCol }}
            ></ScrollableText>
          </TextContainer>
        </ColumnThree>
      </Flex>
    </Flex>
  );
};

export default ConsciousShoppingCarousel;
