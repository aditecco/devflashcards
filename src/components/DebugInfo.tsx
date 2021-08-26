/* ---------------------------------
DebugInfo
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useState } from "react";
import { Flashcard } from "../types";
import dayjs from "dayjs";
import { css } from "@emotion/react";
import { Button } from "./Button";

type OwnProps = {
  cards: Flashcard[];
};

export default function DebugInfo({
  cards,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const [visible, setVisible] = useState(false);

  return (
    <div
      css={css`
        position: fixed;
        ${visible ? "bottom: 20px; left: 20px" : "bottom: 0; left: 0"};
        background: rgba(255, 255, 255, 0.9);
        padding: 1rem 1.5rem;
        box-shadow: ${visible ? "0 2px 20px 10px rgba(0, 0, 0, 0.25)" : "none"};
        border-radius: ${visible ? "6px" : "0"};
        font-size: small;
        transition: all 0.15s ease-in-out;
        z-index: 1;

        ul {
          padding-left: 1rem;
        }

        button {
          margin-top: ${visible ? "1.5rem" : "0"};
        }
      `}
    >
      {visible && (
        <ul>
          {cards?.map((c, i) => (
            <li key={i}>
              {c.node.frontmatter.order + 1} | {c.node.id.substr(-5)} |{" "}
              {dayjs(c.dueDate).toString()}
            </li>
          ))}
        </ul>
      )}

      <Button onClick={() => setVisible((v) => !v)}>
        Show/Hide debug info
      </Button>
    </div>
  );
}
