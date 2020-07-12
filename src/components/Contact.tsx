import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  color,
  layout,
  space,
  typography,
  border,
  flexbox,
  background,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  BorderProps,
  FlexboxProps,
  BackgroundProps,
} from "styled-system";

const Main = styled.main<
  ColorProps & SpaceProps & BackgroundProps & FlexboxProps & LayoutProps
>`
  min-height: 100vh;
  overflow: hidden;
  ${color};
  ${space};
  ${background};
  ${flexbox};
  ${layout};
`;

const Container = styled.div<
  SpaceProps & BorderProps & LayoutProps & FlexboxProps & TypographyProps
>`
  ${space};
  ${border};
  ${layout};
  ${flexbox};
  ${typography}
`;

const H1 = styled.h1<ColorProps & SpaceProps & TypographyProps>`
  text-transform: uppercase;
  ${color};
  ${space};
  ${typography};
`;

const Email = styled.a<
  ColorProps & SpaceProps & TypographyProps & BorderProps & LayoutProps
>`
  ${color};
  ${space};
  ${typography};
  ${border};
  ${layout};
  &:hover {
    background-color: #f4f4f6;
    color: #000000;
    transition-duration: 0.4s;
  }
`;

const ContactUs = () => {
  const textSizes = [1, 2, 3, 4];

  const { t } = useTranslation();
  const handleClick = () => {
    var email = "xyz@abc.com";
    window.location.href = "mailto:" + email;
  };

  return (
    <Main
      bg="black"
      px={[1, 4, 6]}
      pt={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container
        width={[200, 200, 300, 600]}
        height={[200, 300, 400]}
        borderWidth={1}
        borderStyle="solid"
        borderColor="athensGray"
        p={5}
      >
        <H1 color="athensGray" fontSize={textSizes} pb={4}>
          {t("contact.header")}
        </H1>

        <Email
          fontSize={textSizes}
          p={1}
          onClick={handleClick}
          width={[70, 100]}
          backgroundColor="transparent"
          color="athensGray"
          border="none"
        >
          oxymore@oxymore.com
        </Email>
      </Container>
    </Main>
  );
};

export default ContactUs;
