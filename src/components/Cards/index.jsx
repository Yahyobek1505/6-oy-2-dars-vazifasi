import "./index.css";

function Card(props) {
  const { image, title, start_production, clas } = props;
  return (
    <div className="card">
      <img className="img" src={image} alt=" Cars image" />
      <h1 className="cardTitle">{title}</h1>
      <p className="date"> Ishlab chiqarilgan sana: {start_production}</p>
      <p className="holati">{clas}</p>
    </div>
  );
}
export default Card;
