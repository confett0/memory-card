import "../Intro.css"
import GameConfigurator from "./GameConfigurator"

export default function Intro({startGame, house, chooseHouse}) {
    return (
        <div className="intro-wrap">
        <h1>Memory card</h1>
        <GameConfigurator house={house} chooseHouse={chooseHouse} startGame={startGame} />
        </div>
    )
}