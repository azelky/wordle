import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../../constants';
import { range } from '../../../utils';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess
          key={index}
          word={guesses[index]}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessResults;
