import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInput from './GameInput';
import GuessResults from './GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleGuessSubmit(guessTry) {
    setGuesses([...guesses, guessTry]);
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
      />
      <GameInput handleGuessSubmit={handleGuessSubmit} />
    </>
  );
}

export default Game;
