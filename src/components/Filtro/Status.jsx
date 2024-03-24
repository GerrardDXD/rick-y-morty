const Status = ({ status }) => {
  return (
    <div>
      <button onClick={() => status()}>Alive</button>
      <button>Dead</button>
      <button>Unknown</button>
    </div>
  );
};
export default Status;
