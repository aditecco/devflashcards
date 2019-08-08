

/* ---------------------------------
FlashCard
--------------------------------- */

import React from 'react';

const styles = {
  FlashCard: {
    width: '320px',
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0 4px 40px rgba(0,0,0,.1)',
  },
}


export default function FlashCard(props) {
  return (
    <article className="flashCard" style={styles.FlashCard}>
      <div className="flashCardFront">
        <header className="flashCardTitle">
          {/*  */}
        </header>

        <div className="flashCardBody">
          question here
        </div>

        <footer className="flashCardFooter">
          <a href='#' className="flashCardFlipButton">
            Flip it!
          </a>
        </footer>
      </div>

      <div className="flashCardBack invisible">
        Solution here
      </div>
      
    </article>
  );
}
