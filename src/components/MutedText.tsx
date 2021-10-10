/* ---------------------------------
MutedText
--------------------------------- */

import styled from "@emotion/styled";

type OwnProps = {
  size?: number;
};

export const MutedText = styled.span<OwnProps>`
  font-size: ${(p) => (p?.size ? p.size + "px" : "small")};
  color: ${(p) => p?.theme?.colors?.typography?.[2]};
`;
