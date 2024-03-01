function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((item) => (
        <p
          key={item.id}
          className="guess">
          {item.value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
