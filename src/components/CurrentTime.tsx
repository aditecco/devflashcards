/* ---------------------------------
CurrentTime
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import dayjs from "dayjs";
import { TimeObject } from "../types";

type OwnProps = {
  render: (t: TimeObject) => ReactElement;
};

// Session start
const INITIAL_TIME = dayjs();

export default function CurrentTime({
  render,
}: PropsWithChildren<OwnProps>): ReactElement {
  const [currentDate, setCurrentDate] = useState(INITIAL_TIME);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(dayjs()), 1000);

    return () => clearInterval(timer);
  }, []);

  return render({ initial: INITIAL_TIME, current: currentDate });
}
