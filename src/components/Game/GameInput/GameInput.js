import { useState } from 'react';

export default function GameInput() {
  const [guess, setGuess] = useState('');

  function submitForm(event) {
    event.preventDefault();
    console.log('%c guess = ', 'background-color: #607AFF; color: #FFF', guess);
    setGuess('');
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
        value={guess}
        maxLength={5}
        minLength={5}
        // we have to add a pattern as some browsers do not take minLength into account
        pattern="[a-zA-Z]{5}" // equivalent to acceptable characters are letters ([a-zA-Z]) + there should be exactly 5 of them
        title="Enter a 5 letter word"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}
