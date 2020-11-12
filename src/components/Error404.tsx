import React from "react";
import styled from "styled-components";
import {
  FlexboxProps,
  flexbox,
  TypographyProps,
  typography,
} from "styled-system";
import { useTranslation } from "react-i18next";

const Flex = styled.div<FlexboxProps>`
  display: flex;
  ${flexbox};
`;

const P = styled.p<TypographyProps>`
  ${typography}
`;

const Error404: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Flex flex="auto" justifyContent="center" alignItems="center">
      <P fontSize={[3, 4, 5, 6]}>{t("errors.page-not-found")}</P>
    </Flex>
  );
};

export default Error404;
