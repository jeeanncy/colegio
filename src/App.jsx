import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Alumno from './pages/Alumno';
import Apoderado from './pages/Apoderado';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex w-full flex-1 flex-col items-center">
          <div className="flex-w flex w-full max-w-[75rem] flex-1 flex-col items-center py-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/alumno" element={<Alumno />} />
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
