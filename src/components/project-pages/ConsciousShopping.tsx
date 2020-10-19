import React from "react";
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
  position,
  PositionProps,
  GridProps,
  grid,
} from "styled-system";
import bag from "../assets/conscious-shopping/bag.jpg";
// import mijal from "../assets/conscious-shopping/mijal.jpg";
import shell from "../assets/project-page/shell.png";
import trex from "../assets/conscious-shopping/t-rex.jpg";
// import lydia from "../assets/conscious-shopping/lydia.jpg";
import boots from "../assets/conscious-shopping/boots.jpg";
// import leSwing from "../assets/conscious-shopping/le-swing.jpg";
import sunglasses from "../assets/conscious-shopping/sunglasses.jpg";
// import nadia from "../assets/conscious-shopping/nadia.jpg";
import concha from "../assets/conscious-shopping/concha.jpg";
// import laia from "../assets/conscious-shopping/laia.jpg";
// import { useTranslation } from "react-i18next";
import Timer from "../Timer";
import { zIndexes } from "../theme";

const Main = styled.main<FlexboxProps & TypographyProps>`
  display: flex;
  height: 100%;
  ${flexbox}
  ${typography};
`;

const Container = styled.div<FlexboxProps & LayoutProps & PositionProps & SpaceProps & GridProps>`
  display: flex;
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  ${grid};
`;

const ProjectIcon = styled.img<LayoutProps & FlexboxProps & GridProps>`
  ${layout};
  ${flexbox};
  ${grid};
`;

const IllustrationImage = styled.img<LayoutProps & FlexboxProps & PositionProps & GridProps>`
  ${layout};
  ${flexbox};
  ${position};
  ${grid};
  opacity: 0.5;
`;



// const H1 = styled.h1<TypographyProps & SpaceProps>`
//   text-transform: uppercase;
//   ${space};
//   ${typography};
// `;

// const H2 = styled.h2<TypographyProps & SpaceProps>`
//   ${space};
//   ${typography};
// `;

// const MainImgCarousel = styled.img<LayoutProps>`
//   ${layout};
// `;

// const SecondaryImgCarousel = styled.img<LayoutProps & FlexboxProps>`
//   ${layout};
//   ${flexbox};
// `;

// const ScrollableText = styled.p<TypographyProps & SpaceProps>`
//   ${typography};
//   ${space};
//   overflow: scroll;
//   text-align: justify;
//   line-height: 1.5;
// `;

// const ProjectIcon = styled.img<LayoutProps & FlexboxProps>`
// ${layout};
// ${flexbox};
// `;

interface CarouselProps {
  mainImg: string;
  secondaryImg: string;
  interviewText: string;
  alt: string;
}


const ConsciousShopping = () => {
  // const { t } = useTranslation();
  // const carousel: CarouselProps[] = [
  //   {
  //     mainImg: mijal,
  //     secondaryImg: trex,
  //     interviewText: t("conscious-shopping.mijal"),
  //     alt: "Mijal image"
  //   }, {
  //     mainImg: lydia,
  //     secondaryImg: boots,
  //     interviewText:  t("conscious-shopping.lydia"),
  //     alt:"Lydia image"
  //   }, {
  //     mainImg: leSwing,
  //     secondaryImg: sunglasses,
  //     interviewText:  t("conscious-shopping.le-swing"),
  //     alt:"Le Swing image"
  //   }, {
  //     mainImg: laia,
  //     secondaryImg: concha,
  //     interviewText:  t("conscious-shopping.laia"),
  //     alt:"Laia image"
  //   }, 
  //   {
  //     mainImg: nadia,
  //     secondaryImg: concha,
  //     interviewText: t("conscious-shopping.nadia"),
  //     alt:"Nadia image"
  //   },
  // ];

//   const [current, setCurrent] = useState(0);
//   const next = (current + 1) % carousel.length;
//   const mainImage = carousel[current].mainImg
//   const secondaryImage = carousel[current].secondaryImg
//   const interviewText = carousel[current].interviewText

//   var Keys = {
//     left: false,
//     right: false
// };

// function onKeyDown(key: { which: number; }) {
//   if (key.which === 37){
//     Keys.left = true;
//   }
//   if (key.which === 39){
//     Keys.right = true;
//   }
// } 

// function onKeyUp(key: { which: number; }) {
//   if (key.which === 37) {
//     Keys.left = false;
//   }
//   if (key.which === 39){
//     Keys.right = false;
//   }
// } 

// function handleClick() {
//   let key = 0;
//   setCurrent(next);
//   onKeyDown({which: key});
//   onKeyUp({which: key});
// } 

  return (
    <Main fontFamily="SangBleuOGSerif-Light"> 
    <Container gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="repeat(5, 20%)"
        display={["flex", "flex", "flex", "grid"]}
        flexDirection={["column", "column", "column", "row"]}
        height="100%"
        alignItems="center"
        >
    <ProjectIcon src={shell} maxWidth="20%" gridColumn={1} gridRow={1} /> 
      <IllustrationImage src={boots} maxWidth="50%"  gridColumn={1} gridRow={2} justifySelf="flex-end" alignSelf="center"/> 
    <IllustrationImage src={bag} maxWidth="50%" gridColumn={2} justifySelf="center" alignSelf="center"/> 
    <Container  zIndex={zIndexes.inFront} gridColumn={2} gridRow="2/4" justifySelf="center" alignSelf="center">
      <Timer endDate="2020-11-20"/> 
      </Container>
      <IllustrationImage src={concha} maxWidth="50%" gridColumn={2} gridRow={4} justifySelf="flex-start" alignSelf="center"/> 
      <IllustrationImage src={trex} maxWidth="50%" gridColumn={2} gridRow={4} justifySelf="flex-end" alignSelf="center"/>
      <IllustrationImage src={sunglasses} maxWidth="50%"  gridColumn={3} gridRow={2} alignSelf="center"/> 
     </Container>
    </Main>
  );
};

export default ConsciousShopping;


//PROJECT VIEW 
// return (
//   <Main justifyContent="center" alignItems="center"  fontFamily="SangBleuOGSerif-Light"
//   >
//     <Container height="100%"
//       flexDirection={["column", "column", "column", "column", "row"]}>
//       {/* <ProjectIconPreview src={shell} maxWidth="30%" /> */}
//       <FirstColumn width={["100%", "100%", "100%", "100%", "30%"]}>
//         <ProjectIcon
//           alt="shell"
//           src={shell}
//           maxWidth={["25%", "25%", "25%", "25%", "15%"]}
//           alignSelf="center"
//         ></ProjectIcon>
//         <H1 my={4}>Conscious Shopping:</H1>
//         <H2 mb={4}>{t("conscious-shopping.subheader")}</H2>
//         <ScrollableText>
//         {interviewText}
//         </ScrollableText>
//       </FirstColumn>
//       <SecondColumn width={["100%", "100%", "100%", "100%", "40%"]} mx={4}>
//       <MainImgCarousel src={mainImage} onClick={() => handleClick()}/>
//       </SecondColumn>
//       <ThirdColumn width={["100%", "100%", "100%", "100%", "30%"]}>
//         <SecondaryImgCarousel
//           alt="t-rex"
//           src={secondaryImage}
//           maxWidth={["75%", "75%", "75%", "75%", "50%"]}
//           justifySelf="start"
//         />
//         <ScrollableText>
//        {interviewText}
//         </ScrollableText>
//       </ThirdColumn>
//     </Container>
//     {/* <Timer endDate="2020-11-20" /> */}
//   </Main>
// );