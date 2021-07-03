/* ---------------------------------
Layout
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import Navbar from "./Navbar";
import { css } from "@emotion/react";
import { $navbarHeight } from "../constants/css-vars";

type OwnProps = {};

export default function Layout({
  children,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  return (
    <div
      className={"layout"}
      css={css`
        > main {
          margin-top: ${$navbarHeight};
        }
      `}
    >
      <Navbar />

      <main>{children}</main>
    </div>
  );
}
