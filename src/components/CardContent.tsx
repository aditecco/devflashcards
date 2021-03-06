/* ---------------------------------
CardContent
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { css, useTheme } from "@emotion/react";
import { rem } from "../lib";
import { $font } from "../constants/css-vars";
import classNames from "classnames";
import { CardProps } from "./Card";

type OwnProps = {
  back?: boolean;
} & Omit<CardProps, "style" | "i">;

export default function CardContent({
  children,
  back,
  isDragging,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const theme = useTheme();

  return (
    <div
      className={classNames(["card-content", back && "card-content--back"])}
      css={css`
        overflow-y: ${isDragging ? "hidden" : "auto"};
        position: relative;

        > *:not(.card-content-main) {
          padding: 0 1rem;
        }

        .card-content-title {
          padding: ${rem(22)} 1rem;
          border-left: 4px solid ${theme?.colors?.accent?.["1"]};

          h4 {
            font-weight: normal;
            font-size: ${rem(20)};
            margin: 0;
          }
        }

        .card-content-main {
          label {
            font-style: italic;
            font-family: ${theme?.fonts?.lato};
            font-size: 1.1rem;
            letter-spacing: -1px;
            color: ${theme?.colors?.typography?.[1]};
            text-transform: lowercase;

            &::after {
              content: ")";
            }
          }

          // the generated container that
          // hosts the list of answer options.
          .option-container {
            padding: 0.25rem 0.5rem;
            line-height: 1.8;
            font-family: ${theme?.fonts?.lato};
            color: ${theme?.colors?.typography?.[1]};
            font-size: 1rem;

            code {
              color: ${$font};
              font-size: small;
              padding: 2px 6px;
              margin: 0 4px;
              background-color: ${theme?.colors?.background?.blue?.["1"]};
              border: 1px solid ${theme?.colors?.stroke?.["1"]};
            }

            input[type="radio"] {
              margin-right: 0.5rem;
            }
          }

          //  overrides
          .gatsby-highlight {
            // this would be the
            // <p>s containing a
            // single option block.
            ~ p {
              margin: 0;
              padding: 1.5rem 1rem;
              // keep stuff aligned
              display: flex;
              align-items: center;
              justify-content: flex-start;
            }

            ~ p:nth-of-type(even) {
              background: ${theme?.colors?.background?.blue?.["2"]};
            }

            ~ p:last-child {
              margin: 0 0 3rem;
            }

            + p {
              //border: 0;
            }

            code {
              font-size: small;
              white-space: pre-wrap;
            }
          }

          pre[class*="language-"] {
            padding-top: 2rem;
            padding-bottom: 2rem;
            margin: 0;
          }
        }

        .card-content-debug-info {
          display: block;
          padding: 1rem 1rem 2rem;
          font-size: small;
          text-align: center;
          color: ${theme?.colors?.typography?.["2"]};
          border-top: 1px dashed ${theme?.colors?.typography?.["2"]};
        }

        .card-content-options {
        }

        // ad-hoc styles for the card's
        // front only
        &:not(.card-content--back) {
        }

        // different styles for
        // the back of the card
        &.card-content--back {
          .card-content-title {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid ${theme?.colors?.stroke?.[2]};
            border-left: none;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h4 {
              font-size: 1.25rem;
            }

            &-answer-wrapper {
              // display: inline-block;
              // padding: 0 2px;
              // width: 30px;
              // height: 30px;
              // border: 2px solid ${theme.colors.accent[1]};
              // border-radius: 6px;
              // text-align: center;
              // margin-left: 2px;
              // letter-spacing: 1px;
              position: relative;
              top: -1px;
              color: ${theme.colors.accent[1]};
              font-size: 1.25rem;
              vertical-align: text-bottom;
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
              margin: 0 4px;
              background-color: ${theme?.colors?.background?.blue?.["1"]};
              border: 1px solid ${theme?.colors?.stroke?.["1"]};
            }
          }
        }
      `}
    >
      {children}
    </div>
  );
}
