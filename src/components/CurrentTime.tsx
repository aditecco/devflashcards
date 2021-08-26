/* ---------------------------------
CurrentTime
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import dayjs from "dayjs";

type OwnProps = {
  render: (t0: dayjs.Dayjs, t: dayjs.Dayjs) => ReactElement;
};

export default function CurrentTime({
  render,
}: PropsWithChildren<OwnProps>): ReactElement {
  const INITIAL_TIME = dayjs();
  const [currentDate, setCurrentDate] = useState(INITIAL_TIME);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(dayjs()), 1000);

    return () => clearInterval(timer);
  }, []);

  return render(INITIAL_TIME, currentDate);
}
