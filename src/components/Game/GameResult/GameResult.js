import React from 'react';
import { GAME_STATUS } from '../../../constants';

function GameResult({ gameStatus, attempts, answer }) {
  return (
    <>
      {gameStatus === GAME_STATUS.won && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {' '}
              {attempts} {attempts === 1 ? 'guess' : 'guesses'}
            </strong>
            .
          </p>
        </div>
      )}

      {gameStatus === GAME_STATUS.lost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GameResult;
