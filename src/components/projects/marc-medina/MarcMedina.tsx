import {
  GridProps,
  LayoutProps,
  PositionProps,
  grid,
  layout,
  position,
} from "styled-system";

import Flex from "../../Flex";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import MarcMedinaPreview from "./MarcMedinaPreview";
import { PROJECTS_URL } from "../../../constants/router-urls";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import image1 from "../../../assets/project-page/marc-medina/Mani_AntiVox_3.jpg";
import image10 from "../../../assets/project-page/marc-medina/Mani_AntiVox_15.jpg";
import image11 from "../../../assets/project-page/marc-medina/Mani_AntiVox_16.jpg";
import image12 from "../../../assets/project-page/marc-medina/Mani_AntiVox_17.jpg";
import image13 from "../../../assets/project-page/marc-medina/Mani_AntiVox_18.jpg";
import image14 from "../../../assets/project-page/marc-medina/Mani_AntiVox_19.jpg";
import image15 from "../../../assets/project-page/marc-medina/Mani_AntiVox_20.jpg";
import image16 from "../../../assets/project-page/marc-medina/Mani_AntiVox_23.jpg";
import image17 from "../../../assets/project-page/marc-medina/Mani_AntiVox_24.jpg";
import image18 from "../../../assets/project-page/marc-medina/Mani_AntiVox_25.jpg";
import image19 from "../../../assets/project-page/marc-medina/Mani_AntiVox_26.jpg";
import image2 from "../../../assets/project-page/marc-medina/Mani_AntiVox_4.jpg";
import image20 from "../../../assets/project-page/marc-medina/Mani_AntiVox_27.jpg";
import image21 from "../../../assets/project-page/marc-medina/Mani_AntiVox_28.jpg";
import image22 from "../../../assets/project-page/marc-medina/Mani_AntiVox_29.jpg";
import image3 from "../../../assets/project-page/marc-medina/Mani_AntiVox_5.jpg";
import image4 from "../../../assets/project-page/marc-medina/Mani_AntiVox_6.jpg";
import image5 from "../../../assets/project-page/marc-medina/Mani_AntiVox_8.jpg";
import image6 from "../../../assets/project-page/marc-medina/Mani_AntiVox_9.jpg";
import image7 from "../../../assets/project-page/marc-medina/Mani_AntiVox_10.jpg";
import image8 from "../../../assets/project-page/marc-medina/Mani_AntiVox_11.jpg";
import image9 from "../../../assets/project-page/marc-medina/Mani_AntiVox_14.jpg";
import mask from "../../../assets/project-page/project-icons/mask.png";
import styled from "styled-components";
import theme from "../../theme";

const images: ImageProps[] = [
  {
    img: image1,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image2,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image3,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image7,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image4,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "1/3"],
  },
  {
    img: image5,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image8,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image6,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "1/3"],
  },
  {
    img: image10,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image11,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image9,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "1/3"],
  },
  {
    img: image12,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image13,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image14,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image15,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image16,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image18,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image19,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image20,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image21,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image17,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image22,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
];

const Div = styled.div<GridProps & LayoutProps>`
  overflow-y: scroll;
  ${layout};
  ${grid};
`;

const ImgContainer = styled(LazyLoad)<GridProps>`
  object-fit: contain;
  height: 100%;
  ${grid};
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const ReturnToProjectsPage = styled(Link)<LayoutProps & PositionProps>`
  ${layout};
  ${position};
  z-index: ${theme.zIndexes.inFront};
  transition: all 1s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

interface ImageProps {
  img: string;
  alt: string;
  gridColumn: string | string[];
}

const Image = ({ img, alt, gridColumn }: ImageProps) => {
  return (
    <ImgContainer key={img} gridColumn={gridColumn}>
      <Img alt={alt} src={img} />
    </ImgContainer>
  );
};

const MarcMedinaContent: React.FC = () => {
  return (
    <Flex flexDirection="column">
      <ReturnToProjectsPage
        to={PROJECTS_URL}
        width={80}
        position="absolute"
        left={40}
        top={80}
        display={["none", "none", "block"]}
      >
        <img src={mask} alt="mask icon" />
      </ReturnToProjectsPage>
      <Div
        display={["inline-table", "inline-table", "inline-table", "grid"]}
        gridRowGap={1}
        gridColumnGap={1}
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
      >
        {images.map(Image)}
      </Div>
    </Flex>
  );
};

const launchDate = "2021-02-19";
const MarcMedina: React.FC = () => {
  return (
    <Flex flex="auto">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={MarcMedinaPreview}
        ProjectPage={MarcMedinaContent}
      />
    </Flex>
  );
};

export default MarcMedina;
