import Contenido from "./componentes/Contenido";
import Encabezado from "./componentes/Encabezado";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "ReactJS - Ejercicio 1";
  }, []); // Usado para cambiar el titulo de la web, lo encontre en internet
  return (
    <div className="App">
      <Encabezado titulo="ReactJS - Ejercicio 1" color="blue" />
      <Contenido texto="Ejemplo de texto" i={0} />
    </div>
  );
}

export default App;
