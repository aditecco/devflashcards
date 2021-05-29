/* ---------------------------------
ContentCard
--------------------------------- */

import * as React from "react";
import CardFooter from "./CardFooter";
import Card from "./Card";
import CardControls from "./CardControls";
import { PropsWithChildren, ReactElement } from "react";

type OwnProps = {};

export default function ContentCard({}: PropsWithChildren<OwnProps>): ReactElement {
  return (
    <Card>
      <h1>Hello world</h1>

      <CardFooter>
        <CardControls>
          <button
            key={"btnSecondaryLeft"}
            className="CardControlsButton"
            type="button"
          >
            Cobaltum
          </button>

          <button
            key={"btnSecondaryLeft"}
            className="CardControlsButton"
            type="button"
          >
            Germanus
          </button>

          <button
            key={"btnSecondaryLeft"}
            className="CardControlsButton"
            type="button"
          >
            Nunquam
          </button>
        </CardControls>
      </CardFooter>
    </Card>
  );
}
