const Personajes = ({ propiedades }) => {
  console.log(propiedades);
  return (
    <div>
      <h1>{propiedades.name}</h1>
      <h1>{propiedades.status}</h1>
      <img src={propiedades.image} alt="RickSanchez" />
    </div>
  );
};
export default Personajes;
