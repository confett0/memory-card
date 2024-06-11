import { useState } from "react";
import Intro from "./components/Intro";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  const startGame = () => setIsGameOn(true);
  const chooseLevel = (level) => setDifficulty(level);

  return (
    <>
      {isGameOn ? (
        <Game difficulty={difficulty} />
      ) : (
        <Intro startGame={startGame} chooseLevel={chooseLevel} />
      )}
    </>
  );
}

export default App;
