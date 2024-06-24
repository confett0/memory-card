export default function GameConfigurator({ house, chooseHouse, startGame }) {
  return (
    <>
      {!house ? (
        <div className="house-wrap">
          <h3>Pick your Hogwards house</h3>
          <button onClick={() => chooseHouse("gryffindor")}><img src="./gryffindor-button.png"/></button>
          <button onClick={() => chooseHouse("slytherin")}><img src="./slytherin-button.png"/></button>
          <button onClick={() => chooseHouse("ravenclaw")}><img src="./ravenclaw-button.png"/></button>
          <button onClick={() => chooseHouse("hufflepuff")}><img src="./hufflepuff-button.png"/></button>
        </div>
      ) : (
        <div className="level-wrap">
          <h3>Pick your level</h3>
          <button onClick={() => startGame("easy")}>Easy</button>
          <button onClick={() => startGame("medium")}>Medium</button>
          <button onClick={() => startGame("hard")}>Hard</button>
        </div>
      )}
    </>
  );
}
