/* ---------------------------------
MaterialIcon
--------------------------------- */

import * as React from "react";
import { ReactElement } from "react";
import classNames from "classnames";
import { MaterialIcons } from "../types/material-icons";

interface OwnProps {
  icon: MaterialIcons;
  className?: string;
}

export default function MaterialIcon({
  icon,
  className,
}: OwnProps): ReactElement {
  return (
    <i className={classNames(["material-icons", className ?? ""])}>{icon}</i>
  );
}
