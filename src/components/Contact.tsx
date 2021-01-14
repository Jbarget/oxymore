import { SpaceProps, TypographyProps, space, typography } from "styled-system";

import Flex from "./Flex";
import React from "react";
import styled from "styled-components";

const H1 = styled.h1<SpaceProps & TypographyProps>`
  ${space};
  ${typography};
  text-transform: uppercase;
`;

const ContactInfo = styled.p<SpaceProps & TypographyProps>`
  ${space};
  ${typography};
  text-transform: uppercase;
`;

const EmailLink = styled.a` 
&:hover {
  ::before,
  ::after {
    content: "${" "}+${" "}";
}
`;

const Contact = () => {
  return (
    <Flex flex="auto" alignItems="center">
      <div>
        <H1 fontSize={[4, 5, 6, 7]} py={3}>
          CONTACT
        </H1>
        <ContactInfo fontSize={[4, 4, 4, 5]}>
          FOR INQUIRIES PLEASE CONTACT{" "}
          <EmailLink
            href="mailto:ox@oxymoremagazine.com"
            target="_blank"
            rel="noreferrer noopener"
          >
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
