import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

const IN_PLAY = 0;
const WIN = 1;
const LOSE = 2;

function Game({ answer }) {
  const [guesses, setGuesses] = React.useState([]);
  const [decision, setDecision] = React.useState(IN_PLAY);

  function handleSubmit(value) {
    if (guesses.find((v) => v == value)) {
      window.alert("cannot have duplicate guesses!");
      return;
    }

    const checkResult = checkGuess(value, answer);
    setGuesses([...guesses, checkResult]);

    const win = checkResult.every((v) => v.status == "correct");
    if (win === true) {
      setDecision(WIN);
      return;
    }

    if (guesses.length == NUM_OF_GUESSES_ALLOWED && !win) {
      setDecision(LOSE);
      return;
    }
  }

  return (
    <>
      {decision == WIN && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> 3 guesses</strong>.
          </p>
        </div>
      )}

      {decision == LOSE && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      )}
      <GuessResults guesses={guesses} />
      <GuessInput disabled={decision != IN_PLAY} onSubmit={handleSubmit} />
    </>
  );
}

export default Game;
