import {
  GridProps,
  LayoutProps,
  PositionProps,
  grid,
  layout,
  position,
} from "styled-system";

import FashionEditorialPreview from "./FashionEditorialPreview";
import Flex from "../../Flex";
import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../../constants/router-urls";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import image1 from "../../../assets/project-page/fashion-editorial/001-awewave-oxymore.jpg";
import image10 from "../../../assets/project-page/fashion-editorial/010-awewave-oxymore.jpg";
import image11 from "../../../assets/project-page/fashion-editorial/011-awewave-oxymore.jpg";
import image12 from "../../../assets/project-page/fashion-editorial/012-awewave-oxymore.jpg";
import image13 from "../../../assets/project-page/fashion-editorial/013-awewave-oxymore.jpg";
import image14 from "../../../assets/project-page/fashion-editorial/014-awewave-oxymore.jpg";
import image15 from "../../../assets/project-page/fashion-editorial/015-awewave-oxymore.jpg";
import image16 from "../../../assets/project-page/fashion-editorial/016-awewave-oxymore.jpg";
import image17 from "../../../assets/project-page/fashion-editorial/017-awewave-oxymore.jpg";
import image18 from "../../../assets/project-page/fashion-editorial/018-awewave-oxymore.jpg";
import image19 from "../../../assets/project-page/fashion-editorial/019-awewave-oxymore.jpg";
import image2 from "../../../assets/project-page/fashion-editorial/002-awewave-oxymore.jpg";
import image20 from "../../../assets/project-page/fashion-editorial/020-awewave-oxymore.jpg";
import image21 from "../../../assets/project-page/fashion-editorial/021-awewave-oxymore.jpg";
import image22 from "../../../assets/project-page/fashion-editorial/022-awewave-oxymore.jpg";
import image3 from "../../../assets/project-page/fashion-editorial/003-awewave-oxymore.jpg";
import image4 from "../../../assets/project-page/fashion-editorial/004-awewave-oxymore.jpg";
import image5 from "../../../assets/project-page/fashion-editorial/005-awewave-oxymore.jpg";
import image6 from "../../../assets/project-page/fashion-editorial/006-awewave-oxymore.jpg";
import image7 from "../../../assets/project-page/fashion-editorial/007-awewave-oxymore.jpg";
import image8 from "../../../assets/project-page/fashion-editorial/008-awewave-oxymore.jpg";
import image9 from "../../../assets/project-page/fashion-editorial/009-awewave-oxymore.jpg";
import stairs from "../../../assets/project-page/project-icons/stairs.png";
import styled from "styled-components";
import theme from "../../theme";

const editorialImages: EditorialImageProps[] = [
  {
    img: image1,
    alt: "Photograh image",
    gridColumn: "1/3",
  },
  {
    img: image2,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image3,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image4,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image5,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image7,
    alt: "Photograh image",
    gridColumn: "1/3",
  },
  {
    img: image6,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image8,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image9,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image10,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image11,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image13,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image12,
    alt: "Photograh image",
    gridColumn: "1/3",
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
    img: image17,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image18,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image19,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image20,
    alt: "Photograh image",
    gridColumn: "1",
  },
  {
    img: image21,
    alt: "Photograh image",
    gridColumn: ["1", "1", "1", "2"],
  },
  {
    img: image22,
    alt: "Photograh image",
    gridColumn: "1",
  },
];

const Div = styled.div<GridProps & LayoutProps>`
  overflow-y: scroll;
  ${layout};
  ${grid};
`;

const ImgContainer = styled.div<GridProps>`
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
  transition: all 1s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

interface EditorialImageProps {
  img: string;
  alt: string;
  gridColumn: string | string[];
}

const EditorialImage = ({ img, alt, gridColumn }: EditorialImageProps) => {
  return (
    <ImgContainer key={img} gridColumn={gridColumn}>
      <Img alt={alt} src={img} />
    </ImgContainer>
  );
};

const FashionEditorialContent: React.FC = () => {
  return (
    <Flex flexDirection="column">
      <ReturnToProjectsPage
        to={PROJECTS_URL}
        width={80}
        position="absolute"
        left={40}
        top={80}
        zIndex={theme.zIndexes.inFront}
        display={["none", "none", "block"]}
      >
        <img src={stairs} alt="mask icon" />
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
        {editorialImages.map(EditorialImage)}
      </Div>
    </Flex>
  );
};

const launchDate = "2021-02-05";
const FashionEditorial: React.FC = () => {
  return (
    <Flex flex="auto">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={FashionEditorialPreview}
        ProjectPage={FashionEditorialContent}
      />
    </Flex>
  );
};

export default FashionEditorial;
