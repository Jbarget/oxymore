import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  color,
  space,
  typography,
  layout,
  flexbox,
  ColorProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
} from "styled-system";

const Main = styled.main<
  LayoutProps & FlexboxProps & SpaceProps & TypographyProps
>`
  background-color: black;
  display: flex;
  min-height: 100vh;
  text-transform: uppercase;
  ${layout};
  ${flexbox};
  ${space};
  ${typography};
`;

const H1 = styled.h1<ColorProps & SpaceProps & FlexboxProps & TypographyProps>`
  ${color};
  ${space};
  ${flexbox};
  ${typography};
`;

const H2 = styled.h2<ColorProps & SpaceProps & FlexboxProps & TypographyProps>`
  ${color};
  ${space};
  ${flexbox};
  ${typography};
`;

const ContactInfo = styled.p<SpaceProps & FlexboxProps & TypographyProps>`
  ${space};
  ${flexbox};
  ${typography};
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Main
      p={6}
      display="flex"
      alignItems="center"
      textAlign={["center", "start"]}
    >
      <ul>
        <H1 fontSize={[4, 5, 6, 7]} py={3}>
          {t("contact.header")}
        </H1>
        <H2 fontSize={[2, 3, 4, 5]} py={3}>
          {t("contact.subheader")}
        </H2>
        <ContactInfo fontSize={[2, 3, 4, 5]} py={1}>
          <a href="mailto:ox@oxymore.com" target="_blank">
            {t("contact.email")}
          </a>
        </ContactInfo>
        <ContactInfo fontSize={[2, 3, 4, 5]}>
          {t("contact.location")}
        </ContactInfo>
      </ul>
    </Main>
  );
};

export default Contact;
