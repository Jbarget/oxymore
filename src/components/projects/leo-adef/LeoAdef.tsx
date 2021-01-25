import { LayoutProps, layout } from "styled-system";

import Flex from "../../Flex";
import Grid from "../../Grid";
import LeoAdefPreview from "./LeoAdefPreview";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import Scrollback from "../../Scrollback";
import april from "../../../assets/project-page/leo-adef/4-APRIL.png";
import august from "../../../assets/project-page/leo-adef/8-AUGUST.png";
import december from "../../../assets/project-page/leo-adef/12-DECEMBER.png";
import february from "../../../assets/project-page/leo-adef/2-FEBRUARY.png";
import january from "../../../assets/project-page/leo-adef/1-JANUARY.png";
import july from "../../../assets/project-page/leo-adef/7-JULY.png";
import june from "../../../assets/project-page/leo-adef/6-JUNE.png";
import march from "../../../assets/project-page/leo-adef/3-MARCH.png";
import may from "../../../assets/project-page/leo-adef/5-MAY.png";
import november from "../../../assets/project-page/leo-adef/11-NOVEMBER.png";
import october from "../../../assets/project-page/leo-adef/10-OCTOBER.png";
import september from "../../../assets/project-page/leo-adef/9-SEPTEMBER.png";
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
