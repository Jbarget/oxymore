import {
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  flexbox,
  layout,
  space,
  typography,
} from "styled-system";

import Flex from "./styles/Flex";
import Grid from "./styles/Grid";
import React from "react";
import aitor from "../assets/about-page/aitor.jpg";
import gloria from "../assets/about-page/gloria.jpg";
import juancamilo from "../assets/about-page/juancamilo.jpg";
import micaela from "../assets/about-page/micaela.jpg";
import nil from "../assets/about-page/nil.jpg";
import olga from "../assets/about-page/olga.jpg";
import rodri from "../assets/about-page/rodri.jpg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const teamMembers: TeamMemberProps[] = [
  {
    name: "Aitor",
    img: aitor,
    alt: "Aitor",
  },
  {
    name: "Micaela",
    img: micaela,
    alt: "Micaela",
  },
  {
    name: "Rodri",
    img: rodri,
    alt: "Rodri",
  },
  {
    name: "Olga",
    img: olga,
    alt: "Olga",
  },
  {
    name: "Gloria",
    img: gloria,
    alt: "Gloria",
  },
  {
    name: "Juancamilo",
    img: juancamilo,
    alt: "Juancamilo",
  },
  {
    name: "Nil",
    img: nil,
    alt: "Nil",
  },
];

const H1 = styled.h1<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${space};
  ${typography};
`;

const P = styled.p<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  text-align: justify;
  ${space};
  ${typography};
`;

const TeamMemberImg = styled.img`
  height: 100%;
  width: 100%;
`;

const TeamMemberContainer = styled.div`
  object-fit: contain;
  height: 100%;
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
  alt: string;
}

const TeamMember = ({ name, img, alt }: TeamMemberProps) => {
  return (
    <TeamMemberContainer key={name}>
      <TeamMemberImg alt={alt} src={img} />
    </TeamMemberContainer>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <Flex flex="auto" flexDirection="column" height="100vh">
      <H1 fontSize={[4, 5, 5, 6]} my={4}>
        {t("about.header")}
      </H1>
      <P fontSize={[4, 4, 4, 5]} mb={4} lineHeight={1.5}>
        {t("about.summary")}
      </P>
      <Grid
        gridRowGap={[1, 1, 1, 0]}
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
          lineHeight={1.5}
          textAlign="justify"
          mt={6}
          mx={[0, 0, 0, 6]}
        >
          <P>{t("about.team")}</P>
        </GridCell>
      </Grid>
    </Flex>
  );
};

export default About;
