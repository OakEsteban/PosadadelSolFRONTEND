import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Inicio from '../src/components/pages/Inicio.jsx';
import Hotel from '../src/components/pages/Hotel.jsx';
import Habitaciones from '../src/components/pages/Habitaciones.jsx';
import Servicios from '../src/components/pages/Servicios.jsx';
import Nosotros from '../src/components/pages/Nosotros.jsx';
import Contactanos from '../src/components/pages/Contactanos.jsx';
import IniciaSesion from './components/login-register/Login-Registro.jsx';
import Confirmacion from './components/pages/Confirmacion.jsx';
import Recuperar from './components/login-register/Recuperar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Inicio" replace />} />
        <Route exact path="/Inicio" element={<Inicio />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Habitaciones" element={<Habitaciones />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/Inicia-Sesion" element={<IniciaSesion />} />
        <Route path="/Confirmacion" element={<Confirmacion/>} />
        <Route path="/Recuperar" element={<Recuperar/>} />
        <Route path="*" element={<Navigate to="/Inicio" replace />} />
      </Routes>
    </Router>
  );
}

export default App;