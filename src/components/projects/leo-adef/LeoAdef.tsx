import { LayoutProps, layout } from "styled-system";

import Flex from "../../Flex";
import Grid from "../../Grid";
import LeoAdefPreview from "./LeoAdefPreview";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import Scrollback from "../../Scrollback";
import april from "../../../assets/project-page/leo-adef/04_OXYMORE_CALENDAR.jpg";
import august from "../../../assets/project-page/leo-adef/08_OXYMORE_CALENDAR.jpg";
import december from "../../../assets/project-page/leo-adef/12_OXYMORE_CALENDAR.jpg";
import extra1 from "../../../assets/project-page/leo-adef/zEXTRA1.jpg";
import extra2 from "../../../assets/project-page/leo-adef/zEXTRA2.jpg";
import february from "../../../assets/project-page/leo-adef/02_OXYMORE_CALENDAR.jpg";
import january from "../../../assets/project-page/leo-adef/01_OXYMORE_CALENDAR.jpg";
import july from "../../../assets/project-page/leo-adef/07_OXYMORE_CALENDAR.jpg";
import june from "../../../assets/project-page/leo-adef/06_OXYMORE_CALENDAR.jpg";
import march from "../../../assets/project-page/leo-adef/03_OXYMORE_CALENDAR.jpg";
import may from "../../../assets/project-page/leo-adef/05_OXYMORE_CALENDAR.jpg";
import november from "../../../assets/project-page/leo-adef/11_OXYMORE_CALENDAR.jpg";
import october from "../../../assets/project-page/leo-adef/10_OXYMORE_CALENDAR.jpg";
import september from "../../../assets/project-page/leo-adef/09_OXYMORE_CALENDAR.jpg";
import styled from "styled-components";

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

const calendarImages: CalendarImageProps[] = [
  {
    img: january,
    alt: "January photograph",
  },
  {
    img: february,
    alt: "February photograph",
  },
  {
    img: march,
    alt: "February photograph",
  },
  {
    img: april,
    alt: "April photograph",
  },
  {
    img: may,
    alt: "May photograph",
  },
  {
    img: june,
    alt: "June photograph",
  },
  {
    img: july,
    alt: "July photograph",
  },
  {
    img: august,
    alt: "August photograph",
  },
  {
    img: september,
    alt: "September photograph",
  },
  {
    img: october,
    alt: "October photograph",
  },
  {
    img: november,
    alt: "November photograph",
  },
  {
    img: december,
    alt: "December photograph",
  },
  {
    img: extra1,
    alt: "December photograph",
  },
  {
    img: extra2,
    alt: "December photograph",
  },
];

interface CalendarImageProps {
  img: string;
  alt: string;
}

const CalendarImage = ({ img, alt }: CalendarImageProps) => {
  return (
    <Container key={img}>
      <Image alt={alt} src={img} />
    </Container>
  );
};

const LeoAdefContent: React.FC = () => {
  return (
    <div>
      <Grid
        gridRowGap={3}
        gridColumnGap={3}
        gridTemplateColumns={["repeat(1, 1fr)"]}
      >
        {calendarImages.map(CalendarImage)}
      </Grid>
      <Scrollback bottom={40} left={40} />
    </div>
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
