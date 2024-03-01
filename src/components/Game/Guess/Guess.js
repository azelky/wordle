import { range } from '../../../utils';
import { checkGuess } from '../../../game-helpers';

function Guess({ word, answer }) {
  const result = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          key={index}
          className={`cell${result ? ' ' + result[index].status : ''}`}>
          {word ? word[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
