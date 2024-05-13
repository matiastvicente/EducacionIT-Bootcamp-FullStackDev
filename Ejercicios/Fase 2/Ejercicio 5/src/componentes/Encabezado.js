function Encabezado(props) {
  const { titulo, color } = props;
  return (
    <>
      <div className="mx-5 mt-4">
        <h1 style={{ color: color }}>{titulo}</h1>
      </div>
    </>
  );
}

export default Encabezado;
