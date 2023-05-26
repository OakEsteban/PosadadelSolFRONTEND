import img1 from '../Images/hotel.png';
import logoPosada from '../Images/logoPosada.png';
import '../Styles/Login.css';
import React, {useState} from 'react';
//import {useform} from "react-hook-form"

function login(){
    return (
    <div className="App">
    <header className="App-header">
    <div>

      <div class = "titulo">
        <img src={logoPosada} alt="logo" width="100" height="100"></img>
        <a type="nombre">La posada del sol</a>
      </div>

      <h2>Ingresar</h2>
      <form>

              <div class = "input-group">
                <label>Usuario</label>
                <input type="text" class="textField" name=""></input>
              </div>
              <div class = "input-group">
                  <label>Constraseña</label>
                  <input type="password" class="textField" name=""></input>
              </div>

              <div class = "buttons">
              <a href='#' className='password'>Olvidé mi Constraseña</a>
              <input type='submit' value="Ingresar"></input>
              <p className='registro'>¿No tienes una cuenta?  <a href='#'> Registrarse </a></p>
              </div>
  
        </form>
      
  </div>
    </header>

   <body className="App-body">
      <img class = 'images' src={img1} alt="logo" width="500" ></img>
    </body> 
  </div>
    )

}

export default login;