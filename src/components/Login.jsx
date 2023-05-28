import img1 from "../Images/hotel.png";
import logoPosada from "../Images/logoPosada.png";
import "../Styles/Login.css";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
//import {useform} from "react-hook-form"

function Login() {

  const clientID = "414623149877-301o39ojep9gto5vh1jsf69udhjk7g4u.apps.googleusercontent.com";
  const [user, setUser] = useState({});

  useEffect (() => {
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
          <form>
            <div class="input-group">
              <label>Usuario</label>
              <input type="text" class="textField" name=""></input>
            </div>
            <div class="input-group">
              <label>Constraseña</label>
              <input type="password" class="textField" name=""></input>
            </div>

            <div class="buttons">
              <input type="checkbox" id="check"/>
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
            <div>
        <GoogleLogin 
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_policy"}
        />
      </div>
          </form>
        </div>
        
      </header>

      <body className="login-body">
        <img class="images" src={img1} alt="logo" width="500"></img>
      </body>

      <div className={user? "profile":"hidden"}>
        <img src={user.imageUrl} alt=""/>
        <h3>{user.name}</h3>

      </div>
      

    </div>
  );
}

export default Login;
