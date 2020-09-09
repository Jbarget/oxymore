import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  layout,
  space,
  grid,
  typography,
  LayoutProps,
  SpaceProps,
  GridProps,
  TypographyProps,
  FlexboxProps,
  flexbox,
} from "styled-system";

import aitor from "./assets/about-page/aitor-720.jpg";
import juancamilo from "./assets/about-page/juancamilo-720.jpg";
import micaela from "./assets/about-page/micaela-720.jpg";
import nil from "./assets/about-page/nil-720.jpg";
import olga from "./assets/about-page/olga-720.jpg";
import rodri from "./assets/about-page/rodri-720.jpg";

const teamMembers: TeamMemberProps[] = [
  {
    name: "Aitor",

    img: aitor,
  },
  {
    name: "Micaela",

    img: micaela,
  },
  {
    name: "Rodri",

    img: rodri,
  },
  {
    name: "3 Aitor",

    img: olga,
  },
  {
    name: "Juancamilo",

    img: juancamilo,
  },
  {
    name: "Nil",

    img: nil,
  },
];

const Main = styled.main<SpaceProps>`
  min-height: 100vh;
  ${space};
`;

const Grid = styled.div<GridProps & FlexboxProps & SpaceProps>`
  display: grid;
  ${grid};
  ${flexbox};
  ${space};
`;

const H1 = styled.h1<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${space};
  ${typography};
`;

const H2 = styled.h1<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${space};
  ${typography};
`;

const Img = styled.img<LayoutProps>`
  ${layout};
`;

const TeamMemberContainer = styled.div<LayoutProps>`
  ${layout};
`;

const GridCell = styled.div<
  LayoutProps & SpaceProps & FlexboxProps & TypographyProps
>`
  ${layout};
  ${space};
  ${flexbox};
  ${typography}
`;

interface TeamMemberProps {
  name: string;
  img: string;
}

const TeamMember = ({ name, img }: TeamMemberProps) => {
  return (
    <TeamMemberContainer key={name}>
      <Img alt={name} src={img} width="100%" />
    </TeamMemberContainer>
  );
};

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Main p={8} pt={5}>
      <H1 fontSize={5} mb={4}>
        {t("about.header")}
      </H1>
      <H2 fontSize={5} mb={4}>
        {t("about.subheader")}
      </H2>
      <Grid
        justifyContent="center"
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(2, 50% [col-start])",
          "repeat(4, 25% [col-start])",
        ]}
      >
        {teamMembers.map(TeamMember)}
        <GridCell
          display="flex"
          justifyContent="center"
          p={6}
          lineHeight={1.5}
          textAlign="justify"
        >
          <p>
            OUR TEAM AITOR COSTA EDITOR-IN-CHIEF MICAELA RUIZ MANAGING EDITOR
            RODRIGO AGUDO HEAD OF COMMUNICATION OLGA PIPNIK ART DIRECTOR JUAN
            CAMILO RODRIGUEZ FASHION EDITOR GLORIA FERRER EXECUTIVE EDITOR NIL
            FERNÁNDEZ GRAPHIC DESIGNER
          </p>
        </GridCell>
      </Grid>
    </Main>
  );
};

export default AboutUs;
