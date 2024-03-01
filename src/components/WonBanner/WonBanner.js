import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ attempts }) {
  return (
    <Banner status={'happy'}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {' '}
          {attempts} {attempts === 1 ? 'guess' : 'guesses'}
        </strong>
        .
      </p>
    </Banner>

    //   {gameStatus === GAME_STATUS.lost && (
    //     <div className="sad banner">
    //       <p>
    //         Sorry, the correct answer is <strong>{answer}</strong>.
    //       </p>
    //     </div>
    //   )}
    // </>
  );
}

export default WonBanner;
