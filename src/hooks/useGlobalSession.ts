/* ---------------------------------
useGlobalSession
--------------------------------- */

import { useState } from "react";
import { SessionObject } from "../types";
import dayjs from "dayjs";
import { PERSISTED_SESSION_KEY } from "../constants/constants";

export function useGlobalSession(sessionStart: dayjs.Dayjs) {
  const persistedSession =
    typeof window !== "undefined"
      ? sessionStorage?.getItem?.(PERSISTED_SESSION_KEY)
      : null;

  const [session, setSession] = useState<SessionObject>(
    JSON.parse(persistedSession) ?? {
      sessionStart,
      activeCard: undefined,
      reviews: {},
    }
  );

  return [session, setSession];
}
