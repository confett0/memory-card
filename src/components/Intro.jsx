export default function Intro({startGame, chooseLevel}) {
    return (
        <>
        <h1>Memory card</h1>
        <div className="level-wrap">
            <button onClick={() => chooseLevel("easy")}>Easy</button>
            <button onClick={() => chooseLevel("medium")}>Medium</button>
            <button onClick={() => chooseLevel("hard")}>Hard</button>
        </div>
        <button onClick={startGame}>Start game</button>
        </>
    )
}