
/* ---------------------------------
FlashCards
--------------------------------- */

import React from 'react';
import FlashCard from './FlashCard';

import './styles.css';

const styles = {
  App: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '60%',
    height: '100vh',
    margin: '0 auto',
  },
}


function App() {
  return (
    <div className="App" style={styles.App}>
      <div className="flashCardsControls">
        <a href="#">&larr; prev</a>
        <a href="#">next &rarr;</a>
      </div>

      <FlashCard
      meta=''
      question='Explain the behavior of this in JavaScript'
      answer=''
      />
    </div>
  );
}

export default App;
