const Status = ({ status, fondo2 }) => {
  return (
    <div>
      <button
        style={{ background: fondo2 === "alive" && "red" }}
        onClick={() => status("alive")}
      >
        Alive
      </button>
      <button
        style={{ background: fondo2 === "dead" && "red" }}
        onClick={() => status("dead")}
      >
        Dead
      </button>
      <button
        style={{ background: fondo2 === "unknown" && "red" }}
        onClick={() => status("unknown")}
      >
        Unknown
      </button>
    </div>
  );
};
export default Status;
