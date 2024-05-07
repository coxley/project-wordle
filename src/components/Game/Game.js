import React from "react";

import { sample, range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";

import Guess from "../Guess";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([]);
  const blankCount = NUM_OF_GUESSES_ALLOWED - words.length;

  function handleSubmit(value) {
    if (words.length == NUM_OF_GUESSES_ALLOWED) {
      window.alert("you've used every guess!");
      return;
    }

    if (words.find((v) => v == value)) {
      window.alert("cannot have duplicate guesses!");
      return;
    }
    setWords([...words, { id: Math.random(), label: value }]);
  }
  return (
    <>
      <div className="guess-results">
        {words.map(({ id, label }) => (
          <Guess key={id} word={label} />
        ))}
        {range(blankCount).map((v) => (
          <Guess key={v} />
        ))}
      </div>
      <GuessInput onSubmit={handleSubmit} />
    </>
  );
}

export default Game;
