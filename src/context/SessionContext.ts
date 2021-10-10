/* ---------------------------------
Session context
--------------------------------- */

import { createContext } from "react";
import { SessionObject } from "../types";

const initialSession: SessionObject = {};

export const SessionContext = createContext<SessionObject>(initialSession);
