import "../Card.css";

export default function Card({ imgUrl, index, handleClick, house }) {
  let cardBackground;

  switch (house) {
    case "gryffindor":
      cardBackground = "./gryffindor.png";
      break;
    case "hufflepuff":
      cardBackground = "./hufflepuff.png";
      break;
    case "ravenclaw":
      cardBackground = "./ravenclaw.png";
      break;
    case "slytherin":
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
