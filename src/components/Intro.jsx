import "../Intro.css"
import GameConfigurator from "./GameConfigurator"

export default function Intro({startGame, house, setHouse}) {
    return (
        <div className="intro-wrap">
        <img className="intro-logo" src="./logo.png"/>
        <GameConfigurator house={house} setHouse={setHouse} startGame={startGame} />
        </div>
    )
}