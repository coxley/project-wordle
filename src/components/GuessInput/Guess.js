import React from "react";

function Guess({ onSubmit }) {
  const [value, setValue] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        value={value}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
        type="text"
        maxLength={5}
        minLength={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        required
      />
    </form>
  );
}

export default Guess;
