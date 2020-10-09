import React from "react";
import { useTranslation } from "react-i18next";
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
import mijal from "../../assets/conscious-shopping/mijal.jpg";
import shell from "../../assets/project-page/shell-720.png";
import trex from "../../assets/conscious-shopping/t-rex.jpg";

const Main = styled.main<FlexboxProps & TypographyProps>`
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  ${flexbox}
  ${typography};
`;

const Container = styled.div<FlexboxProps & LayoutProps>`
  display: flex;
  ${flexbox};
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
transition: transform 0.2s;
&:hover {
  transform: scale(1.05);
`;

const ConsciousShopping = () => {
  const { t } = useTranslation();
  return (
    <Main
      justifyContent="center"
      alignItems="center"
      fontFamily="SangBleuOGSerif-Light"
    >
      <Container height="100%">
        <FirstColumn width="30%">
          <ProjectIcon
            alt="shell"
            src={shell}
            maxWidth={["50%", "50%", "50%", "50%", "15%"]}
            alignSelf="center"
          ></ProjectIcon>
          <H1 my={4}>Conscious Shopping:</H1>
          <H2 mb={4}>{t("conscious-shopping.subheader")}</H2>
          <ScrollableText>
            {t("conscious-shopping.scrollable-text")}
          </ScrollableText>
        </FirstColumn>
        <SecondColumn width="40%">
          <MainImgCarousel alt="mijal" src={mijal} />
        </SecondColumn>
        <ThirdColumn width="30%">
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
    </Main>
  );
};

export default ConsciousShopping;
