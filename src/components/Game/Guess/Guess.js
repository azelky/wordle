import { range } from '../../../utils';

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          key={index}
          className="cell">
          {word ? word.value[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
