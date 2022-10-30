import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Alumno from './pages/Alumno/Alumno';
import FormAlumno from './pages/Alumno/FormAlumno';
import Profesor from './pages/Profesor/Profesor';
import FormProfesor from './pages/Profesor/FormProfesor';
import Apoderado from './pages/Apoderado/Apoderado';
import FormApoderado from './pages/Apoderado/FormApoderado';
import Matricula from './pages/Alumno/Matricula';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex w-full flex-1 flex-col items-center">
          <div className="w-full max-w-[75rem] p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/alumno" element={<Alumno />} />
              <Route path="/formalumno" element={<FormAlumno />} />
              <Route path="/formalumno/:id" element={<FormAlumno />} />
              <Route path="/profesor" element={<Profesor />} />
              <Route path="/formprofesor" element={<FormProfesor />} />
              <Route path="/formprofesor/:id" element={<FormProfesor />} />
              <Route path="/apoderado" element={<Apoderado />} />
              <Route path="/formapoderado" element={<FormApoderado />} />
              <Route path="/formapoderado/:id" element={<FormApoderado />} />
              <Route path="/matricula/:id" element={<Matricula />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
