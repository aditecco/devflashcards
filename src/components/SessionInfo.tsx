/* ---------------------------------
SessionInfo
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { Flashcard } from "../types";
import dayjs from "dayjs";
import { css } from "@emotion/react";

type OwnProps = {
  cards: Flashcard[];
};

export default function SessionInfo({
  cards,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  return <div css={css``}>SessionInfo</div>;
}
