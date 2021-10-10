/* ---------------------------------
Date context
--------------------------------- */

import { createContext } from "react";
import { DateObject } from "../types";

export const DateContext = createContext<DateObject | null>(null);

DateContext.displayName = "DateContext";
