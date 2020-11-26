import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { space, typography, SpaceProps, TypographyProps } from "styled-system";
import Flex from "./Flex";

type ContactPageProps = SpaceProps & TypographyProps;

const Container = styled.div<ContactPageProps>`
  ${typography};
  text-transform: uppercase;
`;

const H1 = styled.h1<ContactPageProps>`
  ${space};
  ${typography};
`;

const H2 = styled.h2<ContactPageProps>`
  ${space};
  ${typography};
`;

const ContactInfo = styled.p<ContactPageProps>`
  ${space};
  ${typography};
`;

const Contact = () => {
  const { t } = useTranslation();
  const fontSizes = [2, 3, 4, 5];
  return (
    <Flex flex="auto" alignItems="center">
      <Container textAlign="justify">
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
        <ContactInfo fontSize={fontSizes}>{t("contact.location")}</ContactInfo>
      </Container>
    </Flex>
  );
};

export default Contact;
