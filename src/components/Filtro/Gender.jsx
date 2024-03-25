const Gender = ({ status, fondo3 }) => {
  return (
    <div>
      <button
        style={{ background: fondo3 === "female" && "red" }}
        onClick={() => status("female")}
      >
        female
      </button>
      <button
        style={{ background: fondo3 === "male" && "red" }}
        onClick={() => status("male")}
      >
        male
      </button>
      <button
        style={{ background: fondo3 === "genderless" && "red" }}
        onClick={() => status("genderless")}
      >
        genderless
      </button>
    </div>
  );
};
export default Gender;
