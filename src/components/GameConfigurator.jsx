export default function GameConfigurator({ house, chooseHouse, startGame }) {
  return (
    <>
      {!house ? (
        <div className="house-wrap">
          <h3>Pick your Hogwards house</h3>
          <button onClick={() => chooseHouse("gryffindor")}>Gryffindor</button>
          <button onClick={() => chooseHouse("slytherin")}>Slytherin</button>
          <button onClick={() => chooseHouse("ravenclaw")}>Ravenclaw</button>
          <button onClick={() => chooseHouse("hufflepuff")}>Hufflepuff</button>
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
