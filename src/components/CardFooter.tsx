/* ---------------------------------
CardFooter
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { css } from "@emotion/react";
import { radius } from "../constants/css-vars";

type OwnProps = {};

export default function CardFooter({
  children,
}: PropsWithChildren<OwnProps>): ReactElement {
  return (
    <footer
      className="CardFooter"
      css={css`
        border-bottom-right-radius: ${radius};
        border-bottom-left-radius: ${radius};
        box-shadow: 0 -8px 8px -10px rgba(0, 0, 0, 0.25);
      `}
    >
      {children}
    </footer>
  );
}
