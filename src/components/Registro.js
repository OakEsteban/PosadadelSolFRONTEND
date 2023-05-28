import React from 'react'
import '../Styles/Registro.css';
import { useState, useRef } from "react";
import { useScript } from "../hooks/useScript";
import jwt_decode from "jwt-decode";

function Registro() {

  const googlebuttonref = useRef();
  const [user, setuser] = useState(false);
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_decode(userCred);
    console.log(payload);
    setuser(payload);
  };
  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: "375800270898-a1jsu4rlplt491r2m6p9pnlfpph42m6a.apps.googleusercontent.com",
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
  });

  return (
    <div className="contenedor">
      <div className="cont-imagen" name="logo">
        <img
          src={require('../Images/hotel.png')}
          alt="Posada del sol" />


      </div>

      <div className="cont-formulario">

        <div className='logo1'>
          <img
            className='logo'
            src={require('../Images/logoPosada.png')} alt="" />
          <h3>La posada del sol</h3>
        </div>


        <h3><strong> Registro </strong></h3>
        <h4>Ingresa tus datos para continuar</h4>

        <input type="text" className='control2' placeholder='Nombres' />
        <input type="text" className='control2' placeholder='Apellidos' />
        <input type="text" className='control1' placeholder='Correo' required />
        <input type="password" className='control1' placeholder='Contraseña' required />
        <input type="password" className='control1' placeholder='Confirmar contraseña' required />
        <br />
        <input type="checkbox" name='terminos' className='check' />
        <label htmlFor="terminos">Acepto los <a href='#'> Terminos y Condiciones</a></label>
        <br />
        <input type="checkbox" name='ofertas' className='check' />
        <label htmlFor="ofertas">Acepto recibir ofertas en mi correo</label>
        <br />
        <button className='boton'>REGISTRARSE</button>
        <br />

        <p className='inicio'>Ya tengo una cuenta  <a href='#'> Ingresa </a></p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
          }}
        >
          {!user && <div ref={googlebuttonref}></div>}
          {user && (
            <div>
              <h1>{user.name}</h1>
              <img src={user.picture} alt="profile" />
              <p>{user.email}</p>

              <button
                onClick={() => {
                  setuser(false);
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>


      </div>

    </div>



  )
}

export default Registro
