export default function Card({ imgUrl, index, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(index)}>
      <div className="card-inner">
        <div className="card-front">
          <img src={imgUrl} />
        </div>
        <div className="card-back">
          <img src="src/assets/gryffindor.png" />
        </div>
      </div>
    </div>
  );
}
