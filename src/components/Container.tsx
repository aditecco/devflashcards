/* ---------------------------------
Container
--------------------------------- */

import styled from "@emotion/styled";

type OwnProps = {
  mw?: number;
};

export const Container = styled.div<OwnProps>`
  max-width: ${(props) => (props?.mw ?? 1024) + "px"};
  margin: 0 auto;
`;
