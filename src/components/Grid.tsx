/* ---------------------------------
Grid
--------------------------------- */

import * as React from "react";
import styled from "@emotion/styled";

// TODO configurable grid
type OwnProps = {};

export const Grid = styled.div<OwnProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-gap: 1rem;
  justify-content: center;

  @media (min-width: ${(p) =>
      p?.theme?.breakpoints?.md && p.theme.breakpoints.md + "px"}) {
    grid-template-columns: repeat(auto-fill, 16rem);
  }

  > * {
    list-style: none;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  > * > * {
    height: 100%;
  }
`;
