import "../Modal.css";

export default function Modal({ setIsOpen }) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button onClick={() => setIsOpen(false)}>Play again?</button>
        </div>
      </div>
    </>
  );
}
