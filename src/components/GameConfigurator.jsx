export default function GameConfigurator({ house, chooseHouse, startGame }) {
  return (
    <>
      {!house ? (
        <div className="house-wrap">
          <h3>Select your Hogwarts house</h3>
          <button className="house-button" onClick={() => chooseHouse("gryffindor")}>
            <img className="house-button-image" src="./gryffindor-button.png" />
          </button>
          <button className="house-button" onClick={() => chooseHouse("slytherin")}>
            <img className="house-button-image" src="./slytherin-button.png" />
          </button>
          <button className="house-button" onClick={() => chooseHouse("ravenclaw")}>
            <img className="house-button-image" src="./ravenclaw-button.png" />
          </button>
          <button className="house-button" onClick={() => chooseHouse("hufflepuff")}>
            <img className="house-button-image" src="./hufflepuff-button.png" />
          </button>
        </div>
      ) : (
        <div className="level-wrap">
          <h3>Select difficulty</h3>
          <div className="level-button-container">
            <button className="level-button" onClick={() => startGame("easy")}>
              Easy
            </button>
            <button className="level-button" onClick={() => startGame("medium")}>
              Medium
            </button>
            <button className="level-button" onClick={() => startGame("hard")}>
              Hard
            </button>
          </div>
        </div>
      )}
    </>
  );
}
