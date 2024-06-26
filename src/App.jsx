import { useState } from "react";
import Intro from "./components/Intro";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [house, setHouse] = useState(null);

  const startGame = (level) => {
    setDifficulty(level);
    setIsGameOn(true);
  };

  return (
    <>
      {isGameOn ? (
        <Game
          difficulty={difficulty}
          house={house}
          setHouse={setHouse}
          setIsGameOn={setIsGameOn}
        />
      ) : (
        <Intro startGame={startGame} setHouse={setHouse} house={house} />
      )}
    </>
  );
}

export default App;
