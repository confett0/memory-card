import { useEffect, useState } from "react";

export default function Game() {

    const [charactersData, setCharactersData] = useState([])

    useEffect(() => {
        fetch("https://potterapi-fedeperin.vercel.app/en/characters")
        .then(response => response.json())
        .then(data => setCharactersData(data))
    }, [])

    console.log(charactersData)

    return (
        <h1>Game is on!</h1>
    )
}