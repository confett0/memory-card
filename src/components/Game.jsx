import { useEffect, useState } from "react";
import shuffleArray from "./shuffleArray";
import Card from "./Card.jsx"

export default function Game() {

    const [charactersData, setCharactersData] = useState([])

    useEffect(() => {
        fetch("https://potterapi-fedeperin.vercel.app/en/characters")
        .then(response => response.json())
        .then(data => setCharactersData(data))
    }, [])

    const shuffledCharacters = shuffleArray(charactersData);

    const cardElements = shuffledCharacters.map((char) => (
        <Card
          key={char.index}
          index={char.index}
          imgUrl={char.image}
          name={char.nickname}
          
        />
      ));

    return (
        <div className="game-container">
        {cardElements}
        </div>
    )
}