import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  space,
  typography,
  layout,
  flexbox,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
} from "styled-system";

const Main = styled.main<
  LayoutProps & FlexboxProps & SpaceProps & TypographyProps
>`
  display: flex;
  text-transform: uppercase;
  height: 80vh;
  ${layout};
  ${flexbox};
  ${space};
  ${typography};
`;

const H1 = styled.h1<SpaceProps & TypographyProps>`
  ${space};
  ${typography};
`;

const H2 = styled.h2<SpaceProps & TypographyProps>`
  ${space};
  ${typography};
`;

const ContactInfo = styled.p<SpaceProps & TypographyProps>`
  ${space};
  ${typography};
`;

const Contact = () => {
  const { t } = useTranslation();
  const fontSizes = [2, 3, 4, 5];
  return (
    <Main p={6} alignItems="center" textAlign={["center", "start"]}>
      <ul>
        <H1 fontSize={[4, 5, 6, 7]} py={3}>
          {t("contact.header")}
        </H1>
        <H2 fontSize={fontSizes} py={3}>
          {t("contact.subheader")}
        </H2>
        <ContactInfo fontSize={fontSizes} py={1}>
          <a href="mailto:ox@oxymore.com" target="_blank">
            {t("contact.email")}
          </a>
        </ContactInfo>
        <ContactInfo fontSize={fontSizes}>{t("contact.location")}</ContactInfo>
      </ul>
    </Main>
  );
};

export default Contact;
