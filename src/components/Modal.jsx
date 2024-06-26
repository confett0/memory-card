import "../Modal.css";

export default function Modal({ closeModal, gameResult, quitGame, house }) {
  const winData = {
    title: "You win",
    subtitle: `10 points to ${house}!`,
    backgroundUrl: "./win.jpg",
  };

  const loseData = {
    title: "You lose",
    subtitle: `Minus 10 points to ${house}!`,
    backgroundUrl: "./lose.jpg",
  };

  let data = gameResult === "win" ? winData : loseData;

  return (
    <>
      <div className="darkBG" onClick={closeModal} />
      <div
        className="modal"
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${data.backgroundUrl}) no-repeat center`,
        }}
      >
        <h2>{data.title}</h2>
        <h4>{data.subtitle}</h4>
        <button className="modal-button" onClick={closeModal}>
          Play again?
        </button>
        <button className="modal-button" onClick={quitGame}>
          Quit
        </button>
      </div>
    </>
  );
}
