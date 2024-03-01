import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';
import { NUM_OF_GUESSES_ALLOWED, GAME_STATUS } from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  // game is runing | won \ lost
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.running);

  function handleGuessSubmit(guessTry) {
    const newGuesses = [...guesses, guessTry];
    setGuesses(newGuesses);

    if (guessTry.toUpperCase() === answer) {
      setGameStatus(GAME_STATUS.won);
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GAME_STATUS.lost);
    }
  }

  return (
    <>
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        gameStatus={gameStatus}
      />
      <GuessResults
        guesses={guesses}
        answer={answer}
      />
      {gameStatus === GAME_STATUS.won && <WonBanner attempts={guesses.length} />}
      {gameStatus === GAME_STATUS.lost && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
