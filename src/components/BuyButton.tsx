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
import { useTranslation } from "react-i18next";

const Button = styled.button<
  SpaceProps & TypographyProps & BorderProps & BackgroundProps & LayoutProps
>`
  width: auto;
  white-space: nowrap;
  z-index: ${theme.zIndexes.inFront};
  text-transform: uppercase;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.01);
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

  return (
    <Fragment>
      {error && <p>{error}</p>}
      <Button
        role="link"
        onClick={redirectToCheckout(setError)}
        fontSize={[0, 1, 3]}
        background="transparent"
        fontStyle="uppercase"
        border={1}
        borderRadius={3}
        borderStyle="solid"
        height="fit-content"
        width="fit-content"
        py={[1, 2, 3]}
        px={[1, 2, 3]}
      >
        {t("buy-button.text")}
      </Button>
    </Fragment>
  );
};
export default BuyButton;
