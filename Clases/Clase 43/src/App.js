import './App.css';
import Contadores from './componentes/Contadores';
import Mensajes from './componentes/Mensajes';

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="jumbotron">
          <h1>Mi Proyecto ReactJS</h1>
          <br />

          <Mensajes />
          <Contadores />

        </div>
      </div>
    </div>
  );
}

export default App;
