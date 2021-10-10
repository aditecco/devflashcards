/* ---------------------------------
Button
--------------------------------- */

import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: none;
  border: 2px solid ${(props) => props?.theme.colors.utility.offWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => props?.theme.colors.typography[3]};

  &:hover {
    color: ${(props) => props?.theme.colors.utility.black};
    border: 2px solid ${(props) => props?.theme.colors.utility.black};
  }

  > .material-icons {
    margin-right: 6px;
    margin-top: 2px;
    font-size: 1.25rem;
  }
`;
