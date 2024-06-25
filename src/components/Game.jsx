import { useEffect, useState } from "react";
import "../Game.css";
import shuffleArray from "./shuffleArray";
import Card from "./Card.jsx";
import Modal from "./Modal.jsx";

export default function Game({ difficulty, house }) {
  const [charactersData, setCharactersData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [animationTrigger, setAnimationTrigger] = useState(0); // Used as a counter to force the Card component to re-render
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/characters")
      .then((response) => response.json())
      .then((data) => setCharactersData(data));
  }, []);

  let totalCards = [];

  if (difficulty === "easy") {
    totalCards = charactersData.slice(0, 8);
  } else if (difficulty === "medium") {
    totalCards = charactersData.slice(0, 16);
  } else if (difficulty === "hard") {
    totalCards = charactersData;
  }

  const shuffledCards = shuffleArray(totalCards);

  const endGame = () => {
    setCurrentScore(0);
    setClickedCardIds([]);
    setIsOpen(true);
  };

  const handleClick = (cardId) => {
    if (!clickedCardIds.includes(cardId)) {
      setAnimationTrigger((count) => count + 1);
      setClickedCardIds((prevIds) => [...prevIds, cardId]);
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setBestScore((prevBestScore) => Math.max(prevBestScore, newScore));
      if (newScore === totalCards.length) { // check for a win
        endGame();
        
      }
    } else {
      endGame();
    }
  };

  const cardElements = shuffledCards.map((char) => (
    <Card
      key={`${char.index}-${animationTrigger}`}
      index={char.index}
      imgUrl={char.image}
      name={char.fullName}
      handleClick={handleClick}
      house={house}
    />
  ));

  return (
    <div className="game-wrap">
      <header>
        <img className="logo" src="./logo.png" />
        <div className="score-wrap">
          <p>Your score: {currentScore}</p>
          <p>Best score: {bestScore}</p>
        </div>
      </header>
      <div className="game-container">{cardElements}</div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}
