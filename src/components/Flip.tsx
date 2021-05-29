/* ---------------------------------
Flip
--------------------------------- */

import * as React from "react";
import {
  PropsWithChildren,
  ReactChild,
  ReactChildren,
  ReactElement,
  useContext,
  useState,
} from "react";
import { animated, useSpring } from "react-spring";

export type FlippableState = {
  flipped?: boolean;
  setFlipped?: React.Dispatch<boolean>;
};

export type FlipProps = {} & { children };

// FlipContext
const FlipContext = React.createContext<FlippableState>({
  flipped: false,
  setFlipped(s) {},
});

/**
 * Flip
 * @param children
 * @constructor
 */
const Flip = ({ children }: FlipProps) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <FlipContext.Provider value={{ flipped, setFlipped, transform, opacity }}>
      <div style={{ position: "relative" }}>{children}</div>
    </FlipContext.Provider>
  );
};

/**
 * Front
 * @param children
 * @constructor
 */
function Front({ children }: PropsWithChildren<{}>): ReactElement {
  const { flipped, setFlipped, transform, opacity } = useContext(FlipContext);

  return (
    <animated.div
      className="animatedFrame"
      style={{
        position: "absolute",
        zIndex: !flipped ? 1 : "auto",
        opacity: opacity.interpolate((o) => 1 - o),
        transform,
      }}
    >
      {children({ flipped, setFlipped })}
    </animated.div>
  );
}

/**
 * Back
 * @param children
 * @constructor
 */
function Back({ children }: PropsWithChildren<{}>): ReactElement {
  const { flipped, setFlipped, transform, opacity } = useContext(FlipContext);
  return (
    <animated.div
      className="animatedFrame"
      style={{
        position: "absolute",
        opacity,
        transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
      }}
    >
      {children({ flipped, setFlipped })}
    </animated.div>
  );
}

// export
Flip.Front = Front;
Flip.Back = Back;

export default Flip;
