/* ---------------------------------
Layout
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import Navbar from "./Navbar";
import { css } from "@emotion/react";
import { $navbarHeight } from "../constants/css-vars";
import { motion } from "framer-motion";

type OwnProps = {
  bare?: boolean;
};

export default function Layout({
  bare,
  children,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  return (
    <motion.div
      className={"layout"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        > main {
          ${!bare ? "margin-top: " + $navbarHeight + "px" : ""};
          flex-grow: 1;
        }
      `}
    >
      {!bare && <Navbar />}

      <main>{children}</main>

      {!bare && <footer>TODO create a footer</footer>}
    </motion.div>
  );
}
