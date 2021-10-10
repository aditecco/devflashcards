/* ---------------------------------
Session context
--------------------------------- */

import { createContext } from "react";
import { InitialSessionContext } from "../types";

const initialSession: InitialSessionContext = [{}, () => {}];

export const SessionContext =
  createContext<InitialSessionContext>(initialSession);

SessionContext.displayName = "SessionContext";
