import { useState } from "react";
import Intro from "./components/Intro";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [house, setHouse] = useState(null);

  const startGame = () => setIsGameOn(true);
  const chooseLevel = (level) => setDifficulty(level);
  const chooseHouse = (house) => setHouse(house);

  return (
    <>
      {isGameOn ? (
        <Game difficulty={difficulty} house={house} />
      ) : (
        <Intro startGame={startGame} chooseLevel={chooseLevel} chooseHouse={chooseHouse} />
      )}
    </>
  );
}

export default App;
