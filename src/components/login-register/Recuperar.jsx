import React from "react";
import RecuperarDesc from "../RecuperarDescripcion";
import estilo from "../../Styles/RecuperarP.module.css";
//import Logo from "../../Images/logoPosada.png";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Recuperar() {
  return (
    <div className={estilo.cont3}>
      <RecuperarDesc />

      <div className={estilo.cont2}>

        <p className={estilo.text1}>
          <b>!Recupera tu contraseña¡</b>
        </p>
        <p className={estilo.text2}>
          Introduce tu correo electrónico a continuación para recuperar tu
          contraseña
        </p>
        <FloatingLabel
          controlId="floatingInput"
          label="Correo"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            id={estilo.inpt1}
          />
        </FloatingLabel>
        <Button variant="warning" id={estilo.btn1}>
          {" "}
          Enviar.
        </Button>{" "}
      </div>
    </div>
  );
}

export default Recuperar;
