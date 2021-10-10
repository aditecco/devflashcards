/* ---------------------------------
MaterialIcon
--------------------------------- */

import * as React from "react";
import { CSSProperties, ReactElement } from "react";
import classNames from "classnames";
import { MaterialIcons } from "../types/material-icons";

interface OwnProps {
  icon: MaterialIcons;
  className?: string;
  style?: CSSProperties;
}

export default function MaterialIcon({
  icon,
  className,
  style,
}: OwnProps): ReactElement {
  return (
    <i
      className={classNames(["material-icons", className ?? ""])}
      style={style ?? {}}
    >
      {icon}
    </i>
  );
}
