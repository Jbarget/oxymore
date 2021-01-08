import { LayoutProps, layout } from "styled-system";

import Grid from "../Grid";
import React from "react";
import image1 from "./../../assets/project-page/belledejour/belledejour-1.jpg";
import image10 from "./../../assets/project-page/belledejour/belledejour-10.jpg";
import image11 from "./../../assets/project-page/belledejour/belledejour-11.jpg";
import image12 from "./../../assets/project-page/belledejour/belledejour-12.jpg";
import image13 from "./../../assets/project-page/belledejour/belledejour-13.jpg";
import image14 from "./../../assets/project-page/belledejour/belledejour-14.jpg";
import image15 from "./../../assets/project-page/belledejour/belledejour-15.jpg";
import image16 from "./../../assets/project-page/belledejour/belledejour-16.jpg";
import image2 from "./../../assets/project-page/belledejour/belledejour-2.jpg";
import image3 from "./../../assets/project-page/belledejour/belledejour-3.jpg";
import image4 from "./../../assets/project-page/belledejour/belledejour-4.jpg";
import image5 from "./../../assets/project-page/belledejour/belledejour-5.jpg";
import image6 from "./../../assets/project-page/belledejour/belledejour-6.jpg";
import image7 from "./../../assets/project-page/belledejour/belledejour-7.jpg";
import image8 from "./../../assets/project-page/belledejour/belledejour-8.jpg";
import image9 from "./../../assets/project-page/belledejour/belledejour-9.jpg";
import styled from "styled-components";

const BelledejourImageContainer = styled.div<LayoutProps>`
  object-fit: contain;
  height: 100%;
  ${layout};
`;

const BelledejourImg = styled.img<LayoutProps>`
  height: 100%;
  width: 100%;
  ${layout};
`;

const alt = "Belledejour x Grupo Amás photography";

const belledejourImages: BelledejourImageProps[] = [
  {
    img: image1,
    alt: `${alt}`,
  },
  {
    img: image2,
    alt: `${alt}`,
  },
  {
    img: image3,
    alt: `${alt}`,
  },
  {
    img: image4,
    alt: `${alt}`,
  },
  {
    img: image5,
    alt: `${alt}`,
  },
  {
    img: image6,
    alt: `${alt}`,
  },
  {
    img: image7,
    alt: `${alt}`,
  },
  {
    img: image8,
    alt: `${alt}`,
  },
  {
    img: image9,
    alt: `${alt}`,
  },
  {
    img: image10,
    alt: `${alt}`,
  },
  {
    img: image11,
    alt: `${alt}`,
  },
  {
    img: image12,
    alt: `${alt}`,
  },
  {
    img: image13,
    alt: `${alt}`,
  },
  {
    img: image14,
    alt: `${alt}`,
  },
  {
    img: image15,
    alt: `${alt}`,
  },
  {
    img: image16,
    alt: `${alt}`,
  },
];

interface BelledejourImageProps {
  img: string;
  alt: string;
}

const BelledejourImage = ({ img, alt }: BelledejourImageProps) => {
  return (
    <BelledejourImageContainer key={img}>
      <BelledejourImg alt={alt} src={img} />
    </BelledejourImageContainer>
  );
};

const BelledejourContent = () => {
  return (
    <Grid
      overflow="scroll"
      gridRowGap={3}
      gridColumnGap={3}
      gridTemplateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
    >
      {belledejourImages.map(BelledejourImage)}
    </Grid>
  );
};

export default BelledejourContent;
