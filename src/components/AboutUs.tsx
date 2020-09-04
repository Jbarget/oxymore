import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  color,
  layout,
  space,
  grid,
  typography,
  ColorProps,
  LayoutProps,
  SpaceProps,
  GridProps,
  TypographyProps,
  FlexboxProps,
  flexbox,
} from "styled-system";
import aitor from "./assets/aitor.jpg";

const teamMembers: TeamMemberProps[] = [
  {
    name: "Aitor",
    description: "Aitor blah blah blah blah",
    img: aitor,
  },
  {
    name: "1 Aitor",
    description: "Aitor blah blah blah blah",
    img: aitor,
  },
  {
    name: "2 Aitor",
    description: "Aitor blah blah blah blah",
    img: aitor,
  },
  {
    name: "3 Aitor",
    description: "Aitor blah blah blah blah",
    img: aitor,
  },
  {
    name: "4 Aitor",
    description: "Aitor blah blah blah blah",
    img: aitor,
  },
  {
    name: "5 Aitor",
    description: "Aitor blah blah blah blah",
    img: aitor,
  },
];

const Main = styled.main<ColorProps & SpaceProps>`
  background-color: black;
  min-height: 100vh;
  ${color};
  ${space};
`;

const Grid = styled.div<GridProps & FlexboxProps>`
  display: grid;
  ${grid};
  ${flexbox};
`;

const H1 = styled.h1<ColorProps & TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${color};
  ${space};
  ${typography};
`;

const Img = styled.img<ColorProps & LayoutProps>`
  ${color};
  ${layout};
`;

const TeamMemberContainer = styled.div<LayoutProps & SpaceProps>`
  ${layout};
  ${space};
`;

const TeamMemberDescription = styled.p<ColorProps & SpaceProps>`
  ${color};
  ${space};
`;

interface TeamMemberProps {
  name: string;
  description: string;
  img: string;
}

const TeamMember = ({ name, description, img }: TeamMemberProps) => {
  return (
    <TeamMemberContainer key={name} mb={3}>
      <Img alt={name} src={img} width="100%" />
      <TeamMemberDescription color="white" mb={3}>
        {name}
      </TeamMemberDescription>
      <TeamMemberDescription color="white">{description}</TeamMemberDescription>
    </TeamMemberContainer>
  );
};

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Main bg="black" px={[1, 4, 6]} pt={5}>
      <H1 color="white" fontSize={5} mb={4}>
        {t("about.header")}
      </H1>
      <Grid
        justifyContent="center"
        gridColumnGap={5}
        gridRowGap={4}
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(2, 50% [col-start])",
          "repeat(3, 25% [col-start])",
        ]}
      >
        {teamMembers.map(TeamMember)}
      </Grid>
    </Main>
  );
};

export default AboutUs;
