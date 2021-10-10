/* ---------------------------------
Container
--------------------------------- */

import styled from "@emotion/styled";

type OwnProps = {
  mw?: number;
};

export const Container = styled.div<OwnProps>`
  max-width: ${(props) => (props?.mw ?? 900) + "px"};
  width: 100%;
  margin: 0 auto;
`;
