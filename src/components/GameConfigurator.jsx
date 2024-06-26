export default function GameConfigurator({ house, setHouse, startGame }) {
  return (
    <>
      {!house ? (
        <div className="house-wrap">
          <h3>Select your Hogwarts house</h3>
          <button className="house-button" onClick={() => setHouse("Gryffindor")}>
            <img className="house-button-image" src="./gryffindor-button.png" />
          </button>
          <button className="house-button" onClick={() => setHouse("Slytherin")}>
            <img className="house-button-image" src="./slytherin-button.png" />
          </button>
          <button className="house-button" onClick={() => setHouse("Ravenclaw")}>
            <img className="house-button-image" src="./ravenclaw-button.png" />
          </button>
          <button className="house-button" onClick={() => setHouse("Hufflepuff")}>
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
