import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apoderado from './pages/Apoderado';
import Alumno from './pages/Alumno/Alumno';
import RegistAlumno from './pages/Alumno/RegistAlumno';

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
              <Route path="/registalumno" element={<RegistAlumno />} />
              <Route path="/registalumno/:id" element={<RegistAlumno />} />
              <Route path="/apoderado" element={<Apoderado />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
