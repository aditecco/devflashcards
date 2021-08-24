/* ---------------------------------
CurrentTime
--------------------------------- */

import * as React from "react";
import { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import dayjs from "dayjs";

type OwnProps = {
  render: (t: dayjs.Dayjs) => ReactElement;
};

export default function CurrentTime({
  render,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  const [currentDate, setCurrentDate] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(dayjs()), 1000);

    return () => clearInterval(timer);
  }, []);

  return <React.Fragment>{render(currentDate)}</React.Fragment>;
}
