/* ---------------------------------
types
--------------------------------- */

import dayjs from "dayjs";

export * from "./theme";
export * from "./gatsby-support";

export type TimeObject = {
  initial: dayjs.Dayjs;
  current: dayjs.Dayjs;
};
