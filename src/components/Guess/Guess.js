import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  guess = guess ?? [];
  return (
    <p className="guess">
      {range(5).map((n) => {
        // prettier-ignore
        const className = (guess[n]
          ? `cell ${guess[n].status}`
          : "cell"
        )
        return (
          <span key={n} className={className}>
            {guess[n] ? guess[n].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
