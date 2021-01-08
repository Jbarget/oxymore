import { LayoutProps, layout } from "styled-system";

import Grid from "../../Grid";
import React from "react";
import image1 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-01.jpg";
import image10 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-10.jpg";
import image11 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-11.jpg";
import image12 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-12.jpg";
import image13 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-13.jpg";
import image14 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-14.jpg";
import image15 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-15.jpg";
import image16 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-16.jpg";
import image17 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-17.jpg";
import image18 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-18.jpg";
import image19 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-19.jpg";
import image2 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-02.jpg";
import image20 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-20.jpg";
import image21 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-21.jpg";
import image22 from "../../../assets/project-page/fashion-editorial/amewave-oxymore-22.jpg";
import image23 from "../../../assets/project-page/fashion-editorial/amewave-oxymore-23.jpg";
import image3 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-03.jpg";
import image4 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-04.jpg";
import image5 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-05.jpg";
import image6 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-06.jpg";
import image7 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-07.jpg";
import image8 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-08.jpg";
import image9 from "../../../assets/project-page/fashion-editorial/awewave-oxymore-09.jpg";
import styled from "styled-components";

const EditorialImageContainer = styled.div<LayoutProps>`
  object-fit: contain;
  height: 100%;
  ${layout};
`;

const EditorialImg = styled.img<LayoutProps>`
  height: 100%;
  width: 100%;
  ${layout};
`;

const editorialImages: EditorialImageProps[] = [
  {
    img: image1,
    alt: "Photograh image",
  },
  {
    img: image2,
    alt: "Photograh image",
  },
  {
    img: image3,
    alt: "Photograh image",
  },
  {
    img: image4,
    alt: "Photograh image",
  },
  {
    img: image7,
    alt: "Photograh image",
  },
  {
    img: image8,
    alt: "Photograh image",
  },
  {
    img: image9,
    alt: "Photograh image",
  },
  {
    img: image6,
    alt: "Photograh image",
  },
  {
    img: image11,
    alt: "Photograh image",
  },
  {
    img: image12,
    alt: "Photograh image",
  },
  {
    img: image13,
    alt: "Photograh image",
  },
  {
    img: image14,
    alt: "Photograh image",
  },
  {
    img: image15,
    alt: "Photograh image",
  },
  {
    img: image16,
    alt: "Photograh image",
  },
  {
    img: image17,
    alt: "Photograh image",
  },
  {
    img: image18,
    alt: "Photograh image",
  },
  {
    img: image19,
    alt: "Photograh image",
  },
  {
    img: image20,
    alt: "Photograh image",
  },
  {
    img: image21,
    alt: "Photograh image",
  },
  {
    img: image22,
    alt: "Photograh image",
  },
  {
    img: image10,
    alt: "Photograh image",
  },
  {
    img: image23,
    alt: "Photograh image",
  },
  {
    img: image5,
    alt: "Photograh image",
  },
];

interface EditorialImageProps {
  img: string;
  alt: string;
}

const EditorialImage = ({ img, alt }: EditorialImageProps) => {
  return (
    <EditorialImageContainer key={img}>
      <EditorialImg alt={alt} src={img} />
    </EditorialImageContainer>
  );
};

const FashionEditorialContent = () => {
  return (
    <Grid
      overflow="scroll"
      gridRowGap={3}
      gridColumnGap={3}
      gridTemplateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
    >
      {editorialImages.map(EditorialImage)}
    </Grid>
  );
};

export default FashionEditorialContent;
