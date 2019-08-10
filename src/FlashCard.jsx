

/* ---------------------------------
FlashCard
--------------------------------- */

import React, { useState } from 'react';


export default function FlashCard(props) {
  // const [state, setState] = useState(initialState);
  let [ flipped, flipper ] = useState(false);

  return (
    <article
    className={`flashCard animated ${flipped ? 'flipInY' : ''}`}
    onAnimationEnd={e => console.log(e)}
    >
      <div
      className={`flashCardFront ${flipped ? 'invisible' : ''}`}
      >
        <header className="flashCardTitle">
          {props.meta}
        </header>

        <div className="flashCardBody">
          {props.question}
        </div>

        <footer className="flashCardFooter">
          <a
          href='#'
          className="flashCardFlipButton"
          onClick={() => flipper(flipped = !flipped)}
          >
            Flip it!
          </a>
        </footer>
      </div>

      {/* flashCardBack */}
      <div
      className={`flashCardBack ${flipped ? '' : 'invisible'}`}
      >
        <header className="flashCardTitle">
          {props.meta}
        </header>

        <div className="flashCardBody">
          {props.answer}
        </div>

        <footer className="flashCardFooter">
          <a
          href='#'
          className="flashCardFlipButton"
          onClick={() => flipper(flipped = !flipped)}
          >
            Flip back
          </a>
        </footer>
      </div>
      
    </article>
  );
}
