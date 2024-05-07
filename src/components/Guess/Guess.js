import React from "react";

function Guess({ word = " ".repeat(5) }) {
  // invariant
  if (word.length != 5) {
    throw Error("guesses must be exactly 5 chars");
  }

  return (
    <p className="guess">
      <span className="cell">{word[0]}</span>
      <span className="cell">{word[1]}</span>
      <span className="cell">{word[2]}</span>
      <span className="cell">{word[3]}</span>
      <span className="cell">{word[4]}</span>
    </p>
  );
}

export default Guess;
