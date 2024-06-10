import { useEffect, useState } from "react";
import shuffleArray from "./shuffleArray";

export default function Game() {

    const [charactersData, setCharactersData] = useState([])

    useEffect(() => {
        fetch("https://potterapi-fedeperin.vercel.app/en/characters")
        .then(response => response.json())
        .then(data => setCharactersData(data))
    }, [])

    const shuffledCharacters = shuffleArray(charactersData);

    return (
        <h1>Game is on!</h1>
    )
}