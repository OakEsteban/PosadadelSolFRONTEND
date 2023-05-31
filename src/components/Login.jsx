import img1 from "../Images/hotel.png";
import logoPosada from "../Images/logoPosada.png";
import "../Styles/Login.css";
import React, { useState, useRef } from "react";
import { useScript } from "../hooks/useScript";
import jwt_decode from "jwt-decode";
import {useForm} from "react-hook-form";

function Login() {

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

  const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
  
      /*try{fetch('http://localhost:3000/createUsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })}
      catch(error){console.log(error)}*/
      console.log(data);
    }

  return (
    <div className="login">
      <header className="login-header">
        <div>
          <div className="titulo">
            <img src={logoPosada} alt="logo" width="100" height="100"></img>
            <a type="nombre" href="http//">
              La posada del sol
            </a>
          </div>

          <h2 className="subtitulos">Ingresar</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className = "input-group">
                <label>Correo</label>
                <input placeholder='ejemplo@correo' type="text" className="textField" {...register('email')}></input>
              </div>
              <div className = "input-group">
                  <label>Constraseña</label>
                  <input placeholder='Constraseña123' type="password" className="textField" {...register('password')}></input>
              </div>

            <div class="buttons">
              <input type="checkbox" id="check" />
              <label htmlFor="check"><b> Recordarme </b></label>
              <a href="http//" className="password">
                {" "}
                <b> Olvidé mi Constraseña </b>
              </a>
              <input type="submit" value="Ingresar"></input>
              <p className="registro">
                <b> ¿No tienes una cuenta?</b> <a href="#"> Registrarse </a>
              </p>
            </div>
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
          </form>
        </div>

      </header>

      <body className="login-body">
        <img class="images" src={img1} alt="logo" width="500"></img>
      </body>


    </div>
  );
}

export default Login;
