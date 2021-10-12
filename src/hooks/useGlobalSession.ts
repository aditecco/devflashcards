/* ---------------------------------
useGlobalSession
--------------------------------- */

import { useState } from "react";
import { SessionObject } from "../types";
import dayjs from "dayjs";

export function useGlobalSession(sessionStart: dayjs.Dayjs) {
  const [session, setSession] = useState<SessionObject>({
    sessionStart,
    currentCard: "",
    reviews: {},
  });

  return [session, setSession];
}
