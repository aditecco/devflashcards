/* ---------------------------------
Footer
--------------------------------- */

import styled from "@emotion/styled";
import React from "react";
import { Container } from "./Container";

const Footer = styled.footer`
  font-size: small;
  padding: 0.6rem 1rem;
`;

export default function ({ children }) {
  return (
    <Footer>
      <Container>{children}</Container>
    </Footer>
  );
}
