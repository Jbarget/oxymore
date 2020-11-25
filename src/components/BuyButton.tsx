import React, { useState, Fragment } from "react";
import {
  SpaceProps,
  TypographyProps,
  BorderProps,
  BackgroundProps,
  space,
  typography,
  border,
  background,
  LayoutProps,
  layout,
} from "styled-system";
import styled from "styled-components";

import { zIndexes } from "./theme";
import { useTranslation } from "react-i18next";
import redirectToCheckout from "../helpers/redirectToCheckout";

const Button = styled.button<
  SpaceProps & TypographyProps & BorderProps & BackgroundProps & LayoutProps
>`
  width: auto;
  white-space: nowrap;
  z-index: ${zIndexes.inFront};
  text-transform: uppercase;
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
        borderStyle="solid"
        height="fit-content"
        width="fit-content"
        py={[1, 1, 2, 3]}
        px={[1, 1, 2, 3]}
      >
        {t("buy-button.text")}
      </Button>
    </Fragment>
  );
};
export default BuyButton;
