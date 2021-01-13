import { LayoutProps, layout } from "styled-system";

import Grid from "../../Grid";
import React from "react";
import april from "../../../assets/project-page/leo-adef/4-APRIL.png";
import august from "../../../assets/project-page/leo-adef/8-AUGUST.png";
import december from "../../../assets/project-page/leo-adef/12-DECEMBER.png";
import january from "../../../assets/project-page/leo-adef/1-JANUARY.png";
import july from "../../../assets/project-page/leo-adef/7-JULY.png";
import june from "../../../assets/project-page/leo-adef/6-JUNE.png";
import march from "../../../assets/project-page/leo-adef/3-MARCH.png";
import may from "../../../assets/project-page/leo-adef/5-MAY.png";
import november from "../../../assets/project-page/leo-adef/11-NOVEMBER.png";
import october from "../../../assets/project-page/leo-adef/10-OCTOBER.png";
import september from "../../../assets/project-page/leo-adef/9-SEPTEMBER.png";
import styled from "styled-components";

const CalendarImageContainer = styled.div<LayoutProps>`
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
    <CalendarImageContainer key={img}>
      <Image alt={alt} src={img} />
    </CalendarImageContainer>
  );
};

const LeoAdefContent = () => {
  return (
    <Grid
      overflow="scroll"
      gridRowGap={3}
      gridColumnGap={3}
      gridTemplateColumns={["repeat(1, 1fr)"]}
    >
      {calendarImages.map(CalendarImage)}
    </Grid>
  );
};

export default LeoAdefContent;
