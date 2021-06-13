/** @jsxImportSource @emotion/react */

/* ---------------------------------
InfoSheet
--------------------------------- */

import * as React from "react";
import { ReactElement } from "react";
import { css } from "@emotion/react";
import {
  accent,
  archivo,
  $font,
  fontAlt,
  margin,
  padding,
  workSans,
} from "../constants/css-vars";
import { box } from "../lib/css-functions";

export interface InfoSheetProps {
  title: string;
  info: Record<string, string>;
}

export default function InfoSheet({
  info,
  title,
}: InfoSheetProps): ReactElement {
  return (
    <div
      className="InfoSheetContent"
      css={css`
        height: 100%;
        padding: 40px 0;
        overflow-y: scroll;

        .InfoSheetContentHeader {
          padding: 0 1rem;

          .InfoSheetContentHeaderTitle {
            font-family: ${workSans};
            font-size: 1.1rem;
            font-weight: normal;
            display: inline-block;
            border-bottom: 3px solid ${accent};
            margin: 0 0 0.75rem;
            text-transform: uppercase;
            color: ${fontAlt};
          }
        }

        .InfoSheetDataList {
          ${box(0, 0, true)};
        }

        .InfoSheetDataListItem {
          display: block;
          overflow: hidden;
          padding: 0.75rem 1rem;
          line-height: 1.6rem;
          color: ${$font};

          a {
            text-decoration: none;
            color: inherit;

            > span {
              margin-right: ${margin} / 3;

              &:last-child {
                border-bottom: 1px dashed black;
              }
            }
          }

          &:nth-child(even) {
            background-color: whitesmoke;
          }

          .DataKey {
            display: block;
            text-transform: uppercase;
            color: ${fontAlt};
            padding-right: ${padding} / 2;
            font-family: ${archivo};
            font-size: 0.85rem;
          }
        }
      `}
    >
      <header className="InfoSheetContentHeader">
        <h4 className="InfoSheetContentHeaderTitle">{title}</h4>
      </header>

      <ul className="InfoSheetDataList">
        {Object.keys(info)?.length &&
          Object.entries(info).map(([key, val], i) => {
            return (
              <li key={i} className="InfoSheetDataListItem">
                <span className="DataKey">{key}</span>

                {val}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
