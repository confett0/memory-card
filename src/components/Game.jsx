import { useEffect, useState } from "react";
import shuffleArray from "./shuffleArray";
import Card from "./Card.jsx";

export default function Game() {
  const [charactersData, setCharactersData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/characters")
      .then((response) => response.json())
      .then((data) => setCharactersData(data));
  }, []);

  const shuffledCharacters = shuffleArray(charactersData);

  const endGame = () => {
    setCurrentScore(0);
    setClickedCardIds([]);
  };

  const handleClick = (cardId) => {
    if (!clickedCardIds.includes(cardId)) {
      if (clickedCardIds.length === 24) {
        alert("You win");
      }
      setClickedCardIds((prevIds) => [...prevIds, cardId]);
      setCurrentScore((prevScore) => prevScore + 1);
      if (currentScore >= bestScore) {
        setBestScore(currentScore + 1);
      }
    } else {
      endGame();
      alert("You lost");
    }
  };

  const cardElements = shuffledCharacters.map((char) => (
    <Card
      key={char.index}
      index={char.index}
      imgUrl={char.image}
      name={char.nickname}
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
