/* ---------------------------------
Footer
--------------------------------- */

import styled from "@emotion/styled";
import React from "react";
import { Container } from "./Container";

const Footer = styled.footer`
  font-size: small;
  padding: 1.25rem 1rem;
  color: ${(p) => p?.theme?.colors?.typography?.[2]};
  text-align: center;
  border-top: 1px solid ${(p) => p?.theme?.colors?.stroke?.[2]};

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px dashed ${(p) => p?.theme?.colors?.typography?.[2]};

    &:hover {
      color: ${(p) => p?.theme?.colors?.utility?.black};
      border-bottom: 1px dashed ${(p) => p?.theme?.colors?.utility?.black};
    }
  }
`;

export default function ({ children }) {
  return (
    <Footer>
      <Container>{children}</Container>
    </Footer>
  );
}
