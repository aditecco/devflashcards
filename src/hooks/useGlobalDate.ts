/* ---------------------------------
useGlobalDate
--------------------------------- */

import { useEffect, useState } from "react";
import dayjs from "dayjs";

// Session start
const INITIAL_DATE = dayjs();

export function useGlobalDate() {
  const [currentDate, setCurrentDate] = useState(INITIAL_DATE);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(dayjs()), 1000);

    return () => clearInterval(timer);
  }, []);

  return { initial: INITIAL_DATE, current: currentDate };
}
