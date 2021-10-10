/* ---------------------------------
CardFlipControls
--------------------------------- */

import * as React from "react";
import { css } from "@emotion/react";
import { flex } from "../lib/css-functions";
import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";
import MaterialIcon from "./MaterialIcon";

type OwnProps = {
  onFlip: () => React.Dispatch<boolean>;
  back?: boolean;
};

export default function CardFlipControls({
  onFlip,
  back,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  return (
    <div
      className={classNames(["CardFlipControls", back && "back"])}
      css={css`
        position: absolute;
        z-index: 1;
        ${flex({ justify: "flex-end", align: "center" })}
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          transparent 30%
        );
        border-radius: 6px;

        .CardFlipAreaButton {
          height: 100%;
          flex-basis: 30%;
          cursor: pointer;

          .material-icons {
            float: right;
            width: 30px;
            height: 30px;
            margin-top: 0.8rem;
            margin-right: 0.6rem;
            font-size: 1.25rem;
            color: white;
            text-align: center;
            // text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
          }
        }

        .back {
          display: block;
          height: auto;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) -250%,
            transparent
          );

          button {
            // TODO DRY
            float: right;
            width: 30px;
            height: 30px;
            margin-top: 0.8rem;
            margin-right: 0.6rem;
            // browser overrides
            border: 0;
            background-color: transparent;
            outline: none;
          }

          .material-icons {
            color: rgba($fontAlt, 0.25);
            font-size: 1.25rem;
            text-align: center;
          }
        }
      `}
    >
      <div className="CardFlipAreaButton" onClick={onFlip}>
        <MaterialIcon icon="info" />
      </div>
    </div>
  );
}
