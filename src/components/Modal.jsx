import "../Modal.css"

export default function Modal({title}) {
    return (
        <div className="modal">
            <h3>{title}</h3>
            <button>Play again?</button>
        </div>
    )
}