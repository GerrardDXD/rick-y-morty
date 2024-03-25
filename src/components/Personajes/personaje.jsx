import "./personajes.css";

const Personajes = ({ propiedades }) => {
  console.log(propiedades);
  return (
    <div className="card">
      <img className="image" src={propiedades.image} alt="RickSanchez" />
      <h1>{propiedades.name}</h1>
      <h1>{propiedades.status}</h1>
    </div>
  );
};
export default Personajes;
