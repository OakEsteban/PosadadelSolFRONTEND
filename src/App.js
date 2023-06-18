import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//Barra de navegación.
import Navbar from './components/navbar/Navbar.jsx';

//Páginas principales.
import Inicio from '../src/components/pages/Inicio.jsx';
import Hotel from '../src/components/pages/Hotel.jsx';
import Habitaciones from '../src/components/pages/Habitaciones.jsx';
import Servicios from '../src/components/pages/Servicios.jsx';
import Planes from './components/pages/Planes.jsx';
import Nosotros from '../src/components/pages/Nosotros.jsx';
import Contactanos from '../src/components/pages/Contactanos.jsx';
<<<<<<< HEAD
import IniciaSesion from './components/login-register/Login-Registro.jsx'
import Icono from './components/IconWhatsapp.jsx'
=======

//Inicio de sesión.
import IniciaSesion from './components/login-register/Login-Registro.jsx';
import Confirmacion from './components/pages/Confirmacion.jsx';
import Recuperar from './components/login-register/Recuperar.jsx';
// import Recuperar2 from './components/login-register/Recuperar2.jsx';
// import Recuperar3 from './components/login-register/Recuperar3.jsx';

//Pagina 404.
import Page404 from './components/Page404.jsx';
>>>>>>> d004488ffa6fbe92aac4ea33a6b75519c8f2198b

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
<<<<<<< HEAD
        <Route path="/Nosotros" element={<Nosotros />} Nosotros/>
=======
        <Route path="/Planes" element={<Planes />} />
        <Route path="/Nosotros" element={<Nosotros />} />
>>>>>>> d004488ffa6fbe92aac4ea33a6b75519c8f2198b
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/Inicia-Sesion" element={<IniciaSesion />} />
        <Route path="/Confirmacion" element={<Confirmacion />} />
        <Route path="/Recuperar" element={<Recuperar />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;