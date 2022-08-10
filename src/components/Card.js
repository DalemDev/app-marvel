import "../css/Card.css";

function Card({ url, name, description }) {
  return (
    <div className="card" style={{backgroundImage: `url(${url})`}}>
      <div className="card-info">
        <p className="text-title">{name}</p>
        <p className="text-body">{description}</p>
      </div>
    </div>
  );
}

export default Card;
