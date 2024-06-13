import { useEffect, useState } from "react";
import shuffleArray from "./shuffleArray";
import Card from "./Card.jsx";

export default function Game({ difficulty }) {
  const [charactersData, setCharactersData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [bestScore, setBestScore] = useState(0);

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
  };

  const handleClick = (cardId) => {
    if (!clickedCardIds.includes(cardId)) {
      setClickedCardIds((prevIds) => [...prevIds, cardId]);
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setBestScore((prevBestScore) => Math.max(prevBestScore, newScore));
      if (newScore === totalCards.length) {
        // check for a win
        endGame();
        alert("You win");
      }
    } else {
      endGame();
      alert("You lost");
    }
  };

  const cardElements = shuffledCards.map((char) => (
    <Card
      key={char.index}
      index={char.index}
      imgUrl={char.image}
      name={char.fullName}
      handleClick={handleClick}
    />
  ));

  return (
    <>
      <p>Your score: {currentScore}</p>
      <p>Best score: {bestScore}</p>
      <div className="game-container">{cardElements}</div>
    </>
  );
}
