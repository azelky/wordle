import { useState } from 'react';

function GameInput({ handleGuessSubmit }) {
  const [guessTry, setGuessTry] = useState('');

  function submitForm(event) {
    event.preventDefault();
    handleGuessSubmit(guessTry);
    setGuessTry('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={submitForm}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guessTry}
        maxLength={5}
        minLength={5}
        // we have to add a pattern as some browsers do not take minLength into account
        pattern="[a-zA-Z]{5}" // equivalent to acceptable characters are letters ([a-zA-Z]) + there should be exactly 5 of them
        title="Enter a 5 letter word"
        onChange={(event) => setGuessTry(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GameInput;
