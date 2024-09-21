import Formulario from "./components/Formulario";
import ListaEstudiantes from "./components/ListaEstudiante";

const App = () => {
  return (
    <div className="container text-center">
      <div className="row mt-3">
        <Formulario />
        <ListaEstudiantes />
      </div>
    </div>
  );
};

export default App;


