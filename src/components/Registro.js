import React from 'react'
import '../Styles/Registro.css';
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

function Registro() {

  const clientID = "414623149877-301o39ojep9gto5vh1jsf69udhjk7g4u.apps.googleusercontent.com";
  const [user, setUser] = useState({});

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  const onSuccess = (response) => {
    setUser(response.profileObj)
  }

  const onFailure = () => {
    console.log("Something went wrong")
  }
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
        <div>
          <GoogleLogin
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_policy"}
          />
        </div>

      </div>
      <div className={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt="" />
        <h3>{user.name}</h3>

      </div>


    </div>

  )
}

export default Registro
