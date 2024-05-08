import Game from "../Game";
import Header from "../Header";
import { WORDS } from "../../data";
import { sample } from "../../utils";

function App() {
  // Pick a random word on every pageload.
  const answer = sample(WORDS);
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game answer={answer} />
      </div>
    </div>
  );
}

export default App;
