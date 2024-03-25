const Species = ({ status, fondo }) => {
  return (
    <div>
      <button
        style={{ background: fondo === "human" && "red" }}
        onClick={() => status("human")}
      >
        Human
      </button>
      <button
        style={{ background: fondo === "alien" && "red" }}
        onClick={() => status("alien")}
      >
        Alien
      </button>
      <button
        style={{ background: fondo === "animal" && "red" }}
        onClick={() => status("animal")}
      >
        Animal
      </button>
    </div>
  );
};
export default Species;
