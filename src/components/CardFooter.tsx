/* ---------------------------------
CardFooter
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { css } from "@emotion/react";
import { radius } from "../css-vars";

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
      `}
    >
      {children}
    </footer>
  );
}
