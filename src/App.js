
/* ---------------------------------
App
--------------------------------- */

// deps
import React from 'react';
import FlashCard from './FlashCard';

// assets
import data from './data.json';

// styles
import './index.scss';

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
      question={data.card_01.question}
      answer={data.card_01.answer}
      
      />
    </div>
  );
}

export default App;
