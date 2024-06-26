import "../Modal.css";

export default function Modal({ setIsOpen, gameResult }) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <h3>{gameResult === "win" ? "You win" : "You lose"}</h3>
          <button onClick={() => setIsOpen(false)}>Play again?</button>
        </div>
      </div>
    </>
  );
}
