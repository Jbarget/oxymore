import React, { Fragment } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  color,
  space,
  typography,
  TypographyProps,
  ColorProps,
  SpaceProps,
} from "styled-system";

type HeadingProps = ColorProps & SpaceProps & TypographyProps;

const Title = styled.h1<HeadingProps>`
${color}
${space}
${typography}
  font-family: SangBleu OG Serif;
  text-align: center;
  font-size: 24px;
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Title color="black" fontSize={3} p={3}>
        {t("page.contact")}
      </Title>
    </Fragment>
  );
};

export default Contact;
