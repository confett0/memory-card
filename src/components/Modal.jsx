import "../Modal.css";

export default function Modal({ setIsOpen, gameResult, setIsGameOn }) {
    const winData = {
        title: "You win",
        subtitle: "10 point to team",
        backgroundUrl: "./win.jpg"
    }

    const loseData = {
        title: "You lose",
        subtitle: "Minus 10 point to team",
        backgroundUrl: "./lose.jpg"
    }

    let data = gameResult === "win" ? winData : loseData
    console.log(data.backgroundUrl)

  return (
    <>
      <div className="darkBG" />
      <div className="modal" style={{background: `url(${data.backgroundUrl})`}}>
        <h3>{data.title}</h3>
        <h5>{data.subtitle}</h5>
        <button onClick={() => setIsOpen(false)}>Play again?</button>
        <button onClick={() => setIsGameOn(false)}>Quit</button>
      </div>
    </>
  );
}
