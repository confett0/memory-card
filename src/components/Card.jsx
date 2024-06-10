export default function Card({ imgUrl, name, index, handleClick }) {
    
    return (
        <div className="card" onClick={() => handleClick(index)}>
            <img src={imgUrl} />
            <h4>{name}</h4>
        </div>
    )
}