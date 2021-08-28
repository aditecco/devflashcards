/* ---------------------------------
Navbar
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { css, useTheme } from "@emotion/react";
import MaterialIcon from "./MaterialIcon";
import { Container } from "./Container";
import Logo from "./Logo";

type OwnProps = {};

export default function Navbar({}: PropsWithChildren<OwnProps>): ReactElement | null {
  const theme = useTheme();

  return (
    <nav
      className={"navbar"}
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0.9rem 1rem;
        color: ${theme.colors.typography[1]};
        //box-shadow: ${theme.shadows[1]};
        //z-index: 1;
        background-color: white;
        border-bottom: 1px solid ${theme?.colors?.stroke?.[2]};
      `}
    >
      <Container>
        <Logo />
      </Container>
    </nav>
  );
}
