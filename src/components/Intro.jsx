import "../Intro.css"
import GameConfigurator from "./GameConfigurator"

export default function Intro({startGame, house, chooseHouse}) {
    return (
        <div className="intro-wrap">
        <img src="./logo.png"/>
        <GameConfigurator house={house} chooseHouse={chooseHouse} startGame={startGame} />
        </div>
    )
}