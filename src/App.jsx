import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaEstudiantes from './components/ListaEstudiante';

const App = () => {
  const [estudiantes, setEstudiantes] = useState(JSON.parse(localStorage.getItem('estudiantes')) || []);
  const [estudiante, setEstudiante] = useState({});

  useEffect(() => {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
  }, [estudiantes]);

  const borrar = (id) => {
    const nuevosEstudiantes = estudiantes.filter((est) => est.id !== id);
    setEstudiantes(nuevosEstudiantes);
  };

  return (
    <div className="container text-center">
      <div className="row mt-3">
        <Formulario 
         setEstudiante={setEstudiante}
         estudiante={estudiante} 
         estudiantes={estudiantes} 
         setEstudiantes={setEstudiantes}
         />
        <ListaEstudiantes 
         setEstudiante={setEstudiante}
         borrar={borrar} 
         estudiantes={estudiantes} 
         estudiante={estudiante}
         />
      </div>
    </div>
  );
};

export default App;