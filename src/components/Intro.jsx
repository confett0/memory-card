import "../Intro.css"

export default function Intro({startGame, chooseLevel, chooseHouse}) {
    return (
        <div className="intro-wrap">
        <h1>Memory card</h1>
        <div className="level-wrap">
            <button onClick={() => chooseLevel("easy")}>Easy</button>
            <button onClick={() => chooseLevel("medium")}>Medium</button>
            <button onClick={() => chooseLevel("hard")}>Hard</button>
        </div>
        <div className="house-wrap">
            <button onClick={() => chooseHouse("gryffindor")}>Gryffindor</button>
            <button onClick={() => chooseHouse("slytherin")}>Slytherin</button>
            <button onClick={() => chooseHouse("ravenclaw")}>Ravenclaw</button>
            <button onClick={() => chooseHouse("hufflepuff")}>Hufflepuff</button>
            
        </div>
        <button onClick={startGame}>Start game</button>
        </div>
    )
}