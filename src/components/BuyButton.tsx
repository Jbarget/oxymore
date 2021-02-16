import {
  BackgroundProps,
  BorderProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  background,
  border,
  layout,
  space,
  typography,
} from "styled-system";
import React, { Fragment, useState } from "react";

import redirectToCheckout from "../helpers/redirectToCheckout";
import styled from "styled-components";
import theme from "./theme";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Button = styled.button<
  SpaceProps & TypographyProps & BorderProps & BackgroundProps & LayoutProps
>`
  width: auto;
  white-space: nowrap;
  z-index: ${theme.zIndexes.inFront};
  text-transform: uppercase;
  transition: transform 0.5s;
  box-shadow: 0 28px 28px rgba(0, 0, 0, 0.2);
  transition: all 1s ease;
  &:hover {
    transform: scale(1.03);
    color: white;
  }
  ${space};
  ${typography};
  ${border};
  ${background};
  ${layout};
`;

const BuyButton: React.FC = () => {
  const [error, setError] = useState<string>();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <Fragment>
      {error && <p>{error}</p>}
      <Button
        role="link"
        onClick={redirectToCheckout(setError, pathname)}
        fontSize={[0, 1, 3]}
        background="transparent"
        fontStyle="uppercase"
        border={1}
        borderRadius={3}
        borderStyle="solid"
        height="fit-content"
        width="fit-content"
        py={[1, 2, 2, 3]}
        px={[1, 2, 2, 3]}
      >
        {t("buy-button.text")}
      </Button>
    </Fragment>
  );
};
export default BuyButton;
