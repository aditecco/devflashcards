/* ---------------------------------
DebugInfo
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useState } from "react";
import { Flashcard } from "../types";
import dayjs from "dayjs";
import { css } from "@emotion/react";
import { Button } from "./Button";
import MaterialIcon from "./MaterialIcon";

type OwnProps = {
  cards: Flashcard[];
};

// TODO extract a UI component from this
export default function DebugInfo({
  cards,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const [visible, setVisible] = useState(false);

  return (
    <div
      css={css`
        position: fixed;
        ${visible ? "bottom: 20px; right: 20px" : "bottom: 5px; right: 5px"};
        background: ${visible ? "rgba(255, 255, 255, 0.9)" : "none"};
        padding: ${visible ? "1rem 1.5rem" : 0};
        box-shadow: ${visible ? "0 2px 20px 10px rgba(0, 0, 0, 0.25)" : "none"};
        border-radius: ${visible ? "6px" : "0"};
        font-size: small;
        transition: all 0.15s ease-in-out;
        z-index: 99;

        ul {
          padding-left: 1rem;
        }

        button {
          ${!visible ? "padding: .25rem" : ""};
          margin-top: ${visible ? "1.5rem" : "0"};
        }
      `}
    >
      {visible && (
        <ul>
          {cards?.map((c, i) => (
            <li key={i}>
              {c?.frontmatter?.order + 1} | {c?.id?.substr?.(-3)} |{" "}
              {dayjs(c.dueDate).format("DD/MM/YYYY HH:mm:ss")}
            </li>
          ))}
        </ul>
      )}

      <Button onClick={() => setVisible((v) => !v)}>
        {visible ? (
          "Show/Hide debug info"
        ) : (
          <MaterialIcon icon={"add"} style={{ margin: 0 }} />
        )}
      </Button>
    </div>
  );
}
