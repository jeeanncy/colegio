import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Alumno from './pages/Alumno';
import Apoderado from './pages/Apoderado';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex-1 flex flex-col items-center w-full">
          <div className="flex-1 flex flex-col items-center py-5 max-w-[75rem] w-full flex-w">
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
