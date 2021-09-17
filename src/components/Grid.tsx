/* ---------------------------------
Grid
--------------------------------- */

import * as React from "react";
import styled from "@emotion/styled";

type OwnProps = {};

export const Grid = styled.div<OwnProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  grid-gap: 1rem;
  justify-content: center;

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
