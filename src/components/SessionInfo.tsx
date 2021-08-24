/* ---------------------------------
SessionInfo
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { Flashcard } from "../types";
import dayjs from "dayjs";
import { css, useTheme } from "@emotion/react";

type OwnProps = {
  cards: Flashcard[];
};

export default function SessionInfo({
  cards,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const theme = useTheme();

  return (
    <div
      css={css`
        border-bottom: 1px solid ${theme?.colors?.stroke?.[2]};

        ul {
          display: flex;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        li {
          &:first-child {
            padding-left: 1rem;
          }

          &:last-child {
            padding-right: 1rem;
          }

          padding: 1.25rem 1.5rem;

          + li {
            //padding-left: 1rem;
            border-left: 1px solid ${theme?.colors?.stroke?.[2]};
          }

          h6 {
            margin: 0 0 0.5rem;
            font-size: 0.7rem;
            font-weight: normal;
            color: ${theme?.colors?.typography?.[2]};
            text-transform: uppercase;
          }
        }
      `}
    >
      <ul>
        <li>
          <h6>Your session</h6>
          <span>{dayjs().toString()}</span>
        </li>

        <li>
          <h6>Due today</h6>
          <span>
            {
              cards.filter((c) => dayjs(c.dueDate).unix() === dayjs().unix())
                .length
            }
          </span>
        </li>

        <li>
          <h6>Correct</h6>
          <span></span>
        </li>

        <li>
          <h6>Incorrect</h6>
          <span></span>
        </li>

        <li>
          <h6>Passed</h6>
          <span></span>
        </li>
      </ul>
    </div>
  );
}
