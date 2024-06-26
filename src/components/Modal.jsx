import "../Modal.css";

export default function Modal({ setIsOpen, gameResult, setIsGameOn }) {
  return (
    <>
      <div className="darkBG" />
      <div className="modal">
        <h3>{gameResult === "win" ? "You win" : "You lose"}</h3>
        <button onClick={() => setIsOpen(false)}>Play again?</button>
        <button onClick={() => setIsGameOn(false)}>Quit</button>
      </div>
    </>
  );
}
