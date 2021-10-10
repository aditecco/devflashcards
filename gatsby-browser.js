/* ---------------------------------
gatsby-browser
--------------------------------- */

import React from "react";

// fonts
import "@fontsource/material-icons/index.css";
import "@fontsource/open-sans/index.css";
import "@fontsource/lato/index.css";
import "@fontsource/lato/400-italic.css";

// 3rd party CSS
import "normalize.css/normalize.css";
import "prismjs/themes/prism-tomorrow.css";
import { App } from "./src/App";

export const wrapRootElement = ({ element }) => <App>{element}</App>;
