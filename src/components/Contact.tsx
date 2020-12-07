import { SpaceProps, TypographyProps, space, typography } from "styled-system";

import Flex from "./Flex";
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

type ContactPageProps = SpaceProps & TypographyProps;

const Container = styled.div<ContactPageProps>`
  ${typography};
  text-transform: uppercase;
`;

const H1 = styled.h1<ContactPageProps>`
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
      <Container>
        <H1 fontSize={[4, 5, 6, 7]} py={3}>
          {t("contact.header")}
        </H1>
        <ContactInfo fontSize={fontSizes} py={3}>
          {t("contact.contact-info")}
        </ContactInfo>
      </Container>
    </Flex>
  );
};

export default Contact;
