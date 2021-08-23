/* ---------------------------------
DebugInfo
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { Flashcard } from "../types";
import dayjs from "dayjs";
import { css } from "@emotion/react";

type OwnProps = {
  cards: Flashcard[];
};

export default function DebugInfo({
  cards,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  return (
    <div
      css={css`
        position: fixed;
        bottom: 25px;
        left: 25px;
        font-size: small;
      `}
    >
      <ul>
        {cards?.map((c, i) => (
          <li key={i}>
            {c.node.frontmatter.order + 1} | {c.node.id.substr(-5)} |{" "}
            {dayjs(c.dueDate).toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
