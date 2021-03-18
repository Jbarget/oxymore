import { LayoutProps, PositionProps, layout, position } from "styled-system";

import Flex from "../../styles/Flex";
import Grid from "../../styles/Grid";
import LeoAdefPreview from "./LeoAdefPreview";
import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../../constants/router-urls";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import april from "../../../assets/project-page/leo-adef/04_OXYMORE_CALENDAR.jpg";
import august from "../../../assets/project-page/leo-adef/08_OXYMORE_CALENDAR.jpg";
import december from "../../../assets/project-page/leo-adef/12_OXYMORE_CALENDAR.jpg";
import extra1 from "../../../assets/project-page/leo-adef/zEXTRA1.jpg";
import extra2 from "../../../assets/project-page/leo-adef/zEXTRA2.jpg";
import february from "../../../assets/project-page/leo-adef/02_OXYMORE_CALENDAR.jpg";
import january from "../../../assets/project-page/leo-adef/01_OXYMORE_CALENDAR.jpg";
import july from "../../../assets/project-page/leo-adef/07_OXYMORE_CALENDAR.jpg";
import june from "../../../assets/project-page/leo-adef/06_OXYMORE_CALENDAR.jpg";
import knife from "../../../assets/project-page/project-icons/knife.png";
import march from "../../../assets/project-page/leo-adef/03_OXYMORE_CALENDAR.jpg";
import may from "../../../assets/project-page/leo-adef/05_OXYMORE_CALENDAR.jpg";
import november from "../../../assets/project-page/leo-adef/11_OXYMORE_CALENDAR.jpg";
import october from "../../../assets/project-page/leo-adef/10_OXYMORE_CALENDAR.jpg";
import september from "../../../assets/project-page/leo-adef/09_OXYMORE_CALENDAR.jpg";
import styled from "styled-components";
import theme from "../../theme";

const calendarImages: CalendarImageProps[] = [
  {
    img: january,
    alt: "Oxymore 2021 Calendar by Leo Adef: January",
  },
  {
    img: february,
    alt: "Oxymore 2021 Calendar by Leo Adef: February",
  },
  {
    img: march,
    alt: "Oxymore 2021 Calendar by Leo Adef: March",
  },
  {
    img: april,
    alt: "Oxymore 2021 Calendar by Leo Adef: April",
  },
  {
    img: may,
    alt: "Oxymore 2021 Calendar by Leo Adef: May",
  },
  {
    img: june,
    alt: "Oxymore 2021 Calendar by Leo Adef: June",
  },
  {
    img: july,
    alt: "Oxymore 2021 Calendar by Leo Adef: July",
  },
  {
    img: august,
    alt: "Oxymore 2021 Calendar by Leo Adef: August",
  },
  {
    img: september,
    alt: "Oxymore 2021 Calendar by Leo Adef: September",
  },
  {
    img: october,
    alt: "Oxymore 2021 Calendar by Leo Adef: October",
  },
  {
    img: november,
    alt: "Oxymore 2021 Calendar by Leo Adef: November",
  },
  {
    img: december,
    alt: "Oxymore 2021 Calendar by Leo Adef: December",
  },
  {
    img: extra1,
    alt: "Oxymore 2021 Calendar by Leo Adef: Bonus",
  },
  {
    img: extra2,
    alt: "Oxymore 2021 Calendar by Leo Adef: Bonus",
  },
];

const Container = styled.div<LayoutProps>`
  object-fit: contain;
  height: 100%;
  ${layout};
`;

const Image = styled.img<LayoutProps>`
  height: 100%;
  width: 100%;
  ${layout};
`;

interface CalendarImageProps {
  img: string;
  alt: string;
}

const ReturnToProjectsPage = styled(Link)<LayoutProps & PositionProps>`
  ${layout};
  ${position};
  z-index: ${theme.zIndexes.inFront};
  transition: all 1s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const CalendarImage = ({ img, alt }: CalendarImageProps) => {
  return (
    <Container key={img}>
      <Image alt={alt} src={img} />
    </Container>
  );
};

const LeoAdefContent: React.FC = () => {
  return (
    <Flex flexDirection="column">
      <ReturnToProjectsPage
        to={PROJECTS_URL}
        width={80}
        position="absolute"
        left={40}
        top={100}
        display={["none", "none", "block"]}
      >
        <img src={knife} alt="mask icon" />
      </ReturnToProjectsPage>
      <Grid
        gridRowGap={1}
        gridColumnGap={1}
        gridTemplateColumns={["repeat(1, 1fr)"]}
      >
        {calendarImages.map(CalendarImage)}
      </Grid>
    </Flex>
  );
};

const launchDate = "2021-01-29";

const LeoAdef: React.FC = () => {
  return (
    <Flex flex="auto">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={LeoAdefPreview}
        ProjectPage={LeoAdefContent}
      />
    </Flex>
  );
};

export default LeoAdef;
