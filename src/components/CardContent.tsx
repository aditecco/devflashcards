/* ---------------------------------
CardContent
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { css } from "@emotion/react";
import { rem } from "../lib/css-functions";
import { $backgroundLight, $font } from "../constants/css-vars";
import classNames from "classnames";
import theme from "../theme";

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
          display: flex;
          justify-content: space-between;
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
          p {
            text-align: center;
          }

          .option-container {
            padding: 0.25rem 0.5rem;

            code {
              color: ${$font};
              font-size: small;
              padding: 2px 6px;
              // TODO extract from theme
              background-color: ${theme.colors.background.yellow["1"]};
              border: 1px solid ${theme.colors.background.yellow["2"]};
            }

            input[type="radio"] {
              margin-right: 0.8rem;
            }
          }

          //  overrides
          .gatsby-highlight {
            // this would be the
            // <p> containing a
            // single option block.
            + p {
              margin-top: 2rem;
            }

            ~ p:last-child {
              margin-bottom: 3rem;
            }

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

        // different styles for
        // the back of the card
        &.card-content--back {
          .card-content-title {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #cbcbcb85;
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
              padding: 0.5rem 1rem;
              border-radius: 4px;
              background: none;
              border: 2px solid whitesmoke;
              cursor: pointer;
            }
          }

          .card-content-main {
            padding: 0.5rem 1.5rem 1rem;
            line-height: 1.9;
            font-size: 0.9rem;

            p {
              text-align: left;
            }

            code {
              color: ${$font};
              font-size: small;
              padding: 2px 6px;
              background-color: ${$backgroundLight};
              border: 1px solid #e3e3e3;
              // background-color: ${theme.colors.background.yellow["1"]};
              // border: 1px solid ${theme.colors.background.yellow["2"]};
            }
          }
        }
      `}
    >
      {children}
    </div>
  );
}
