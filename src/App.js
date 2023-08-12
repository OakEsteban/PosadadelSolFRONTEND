import React, { useState, createContext } from "react";
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
import Icono from './components/IconWhatsapp.jsx';
import Pagos from '../src/components/pages/Pagos.jsx';

//Inicio de sesión.
import IniciaSesion from './components/login-register/Login-Registro.jsx';
import Confirmacion from './components/pages/Confirmacion.jsx';
import Recuperar from './components/login-register/Recuperar.jsx';
import Recuperar2 from './components/login-register/Recuperar2.jsx';
import Recuperar3 from './components/login-register/Recuperar3.jsx';

//Pagina 404.
import Page404 from './components/Page404.jsx';
import UsuarioConfiguracion from './components/pages/UsuarioConfiguracion.jsx';

//Panel administrador
import PanelAdmin from './components/panel-admin/PanelAdmin.jsx';

//Recuperar contraseña
export const RecoveryContext = createContext();

function App() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();

  function NavigateComponents() {
    if (page === "login") return <Recuperar />;
    if (page === "otp") return <Recuperar2 />;
    if (page === "reset") return <Recuperar3 />;

  }

  return (
    <RecoveryContext.Provider
      value={{ page, setPage, otp, setOTP, setEmail, email }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/PosadadelSolFRONTEND/" element={<Navigate to="/Inicio" replace />} />
          <Route exact path="/Inicio" element={<Inicio />} />
          <Route path="/PosadadelSolFRONTEND/Hotel" element={<Hotel />} />
          <Route path="/PosadadelSolFRONTEND/Habitaciones" element={<Habitaciones />} />
          <Route path="/PosadadelSolFRONTEND/Servicios" element={<Servicios />} />
          <Route path="/PosadadelSolFRONTEND/Planes" element={<Planes />} />
          <Route path="/PosadadelSolFRONTEND/Nosotros" element={<Nosotros />} />
          <Route path="/PosadadelSolFRONTEND/contactanos" element={<Contactanos />} />
          <Route path="/PosadadelSolFRONTEND/Inicia-Sesion" element={<IniciaSesion />} />
          <Route path="/PosadadelSolFRONTEND/Confirmacion" element={<Confirmacion />} />
          <Route path="/PosadadelSolFRONTEND/Recuperar" element={<Recuperar />} />
          <Route path="/PosadadelSolFRONTEND/Recuperar2" element={<Recuperar2 />} />
          <Route path="/PosadadelSolFRONTEND/Recuperar3" element={<Recuperar3 />} />
          <Route path="/PosadadelSolFRONTEND/Configuracion" element={<UsuarioConfiguracion />} />
          <Route path="/PosadadelSolFRONTEND/Pagos" element={<Pagos />} />
          <Route path="/PosadadelSolFRONTEND/Admin" element={<PanelAdmin />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        {/* <Icono /> */}
      </Router>
    </RecoveryContext.Provider>
  );
}

export default App;
