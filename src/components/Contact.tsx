import { SpaceProps, TypographyProps, space, typography } from "styled-system";

import Flex from "./Flex";
import React from "react";
import styled from "styled-components";
import theme from "./theme";
import { useTranslation } from "react-i18next";

type ContactPageProps = SpaceProps & TypographyProps;

const H1 = styled.h1<ContactPageProps>`
  ${space};
  ${typography};
  text-transform: uppercase;
`;

const ContactInfo = styled.p<ContactPageProps>`
  ${space};
  ${typography};
  text-transform: uppercase;
`;

const EmailLink = styled.a<ContactPageProps>`
  transition: 2s;
  &:hover {
    ::before,
    ::after {
      content: "${" "}+${" "}";
    }
  }
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Flex flex="auto" alignItems="center">
      <div>
        <H1 fontSize={[4, 5, 6, 7]} py={3}>
          CONTACT
        </H1>
        <ContactInfo fontSize={[4, 4, 4, 5]}>
          FOR INQUIRIES PLEASE CONTACT{" "}
          <EmailLink href="mailto:ox@oxymoremagazine.com" target="_blank">
            OX@OXYMOREMAGAZINE.COM
          </EmailLink>
        </ContactInfo>
        <ContactInfo fontSize={[4, 4, 4, 5]}>
          BASED IN GÓTICO, BARCELONA
        </ContactInfo>
      </div>
    </Flex>
  );
};

export default Contact;
