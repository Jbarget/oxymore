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
import Flex from "./Flex";

const Container = styled.div<TypographyProps & LayoutProps>`
  ${typography};
  ${layout};
  text-transform: uppercase;
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
    <Flex flex="auto" alignItems="center">
      <Container
        textAlign={["center", "center", "center", "justify"]}
        height="50%"
      >
        <ul>
          <H1 fontSize={[4, 5, 6, 7]} py={3}>
            {t("contact.header")}
          </H1>
          <H2 fontSize={fontSizes} py={3}>
            {t("contact.subheader")}
          </H2>
          <ContactInfo fontSize={fontSizes} py={1}>
            <a
              href="mailto:ox@oxymore.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contact.email")}
            </a>
          </ContactInfo>
          <ContactInfo fontSize={fontSizes}>
            {t("contact.location")}
          </ContactInfo>
        </ul>
      </Container>
    </Flex>
  );
};

export default Contact;
