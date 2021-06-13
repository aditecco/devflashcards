/* ---------------------------------
CardContent
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { css } from "@emotion/react";
import { rem } from "../lib/css-functions";
import { $backgroundLight, $font } from "../constants/css-vars";
import classNames from "classnames";

type OwnProps = {
  back?: boolean;
};

export default function CardContent({
  children,
  back,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  return (
    <div
      className={classNames(["card-content", back && "card-content--back"])}
      css={css`
        overflow-y: auto;

        > *:not(.card-content-main) {
          padding: 0 1rem;
        }

        .card-content-meta {
          padding: 1rem;
          font-size: small;
          color: #cbcbcb;
          text-transform: uppercase;
          border-bottom: 1px solid #cbcbcb85;
        }

        .card-content-title {
          padding: ${rem(24)} 1rem 0.5rem;

          h4 {
            font-weight: normal;
            font-size: ${rem(18)};
            margin: 0;
          }
        }

        .card-content-main {
          label {
            display: none;
          }

          p {
            text-align: center;
          }

          .option-container {
            padding: 0.25rem 0.5rem;

            code {
              color: ${$font};
              background-color: ${$backgroundLight};
              font-size: small;
              padding: 2px 6px;
              border: 1px solid #e3e3e3;
            }

            input[type="radio"] {
              margin-right: 0.8rem;
            }
          }

          //  overrides
          .gatsby-highlight {
            code {
              font-size: small;
            }
          }

          pre[class*="language-"] {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }

        .card-content-options {
        }

        &.card-content--back {
          color: rebeccapurple;
        }
      `}
    >
      {children}
    </div>
  );
}
