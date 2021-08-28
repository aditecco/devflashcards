/* ---------------------------------
SmallHeading
--------------------------------- */

import styled from "@emotion/styled";

export const SmallHeading = styled.h6`
  margin: 0 0 0.5rem;
  font-size: 0.7rem;
  font-weight: normal;
  color: ${({ theme }) => theme?.colors?.typography?.[2]};
  text-transform: uppercase;
`;
