import React from "react";
import RecuperarDesc from "../../components/RecuperarDescripcion";
import estilo from "../../Styles/Recuperar2P.module.css";
import Logo from "../../components/Logo";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Recuperar() {
  return (
    <div className={estilo.cont3}>
      <RecuperarDesc />

      <div className={estilo.cont2}>
        <Logo />
        <p className={estilo.text1}>
          <b>!Ingresa el codigo de verificación¡</b>
        </p>
        <p className={estilo.text2}>
          Se te ha enviado un codigo a tu correo electronico
        </p>
        <FloatingLabel
          controlId="floatingInput"
          label="Codigo de verificación"
          className="mb-3"
        >
          <Form.Control
            type="code"
            placeholder="name@example.com"
            id={estilo.inpt1}
          />
        </FloatingLabel>
        <p className={estilo.text3}>
          <b>
          No recibiste el codigo? <a href="" id={estilo.link1}
          >Enviar de nuevo</a>
          </b>
        </p>
        <Button variant="warning" id={estilo.btn1}>
          {" "}
          Confirmar
        </Button>{" "}
      </div>
    </div>
  );
}

export default Recuperar;
