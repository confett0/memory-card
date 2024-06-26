import "../Card.css";

export default function Card({ imgUrl, index, handleClick, house }) {
  let cardBackground;

  switch (house) {
    case "Gryffindor":
      cardBackground = "./gryffindor.png";
      break;
    case "Hufflepuff":
      cardBackground = "./hufflepuff.png";
      break;
    case "Ravenclaw":
      cardBackground = "./ravenclaw.png";
      break;
    case "Slytherin":
      cardBackground = "./slytherin.png";
      break;
  }

  return (
    <div className="card" onClick={() => handleClick(index)}>
      <div className="card-inner">
        <div className="card-front">
          <img src={imgUrl} />
        </div>
        <div className="card-back">
          <img src={cardBackground} />
        </div>
      </div>
    </div>
  );
}
