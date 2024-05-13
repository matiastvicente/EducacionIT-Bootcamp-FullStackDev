import React, { useState } from "react";

function Contenido(props) {
  const { texto, i } = props;
  let fondo = ["yellow", "cyan", "orange"];
  const [contador, setContador] = useState(i);
  return (
    <>
      <div style={{ width: "40%" }}>
        <p className="ml-5 " style={{ backgroundColor: fondo[contador] }}>
          {texto}
        </p>
      </div>
      <button
        className="btn btn-info mt-1 ml-5"
        onClick={() => {
          if (contador < 2) {
            setContador(contador + 1);
          } else setContador(0);
        }}
      >
        Cambiar color
      </button>
    </>
  );
}

export default Contenido;
