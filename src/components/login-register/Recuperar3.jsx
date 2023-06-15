import React from "react";
import RecuperarDesc from "../../components/RecuperarDescripcion";
import estilo from "../../Styles/Recuperar3P.module.css";


import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Recuperar() {
  return (
    <div className={estilo.cont3}>
      <RecuperarDesc />

      <div className={estilo.cont2}>
        
        <p className={estilo.text1}>
          <b>Restablece tu contraseña</b>
        </p>
        <p className={estilo.text2}>
El codigo de verificacion a sido comprovado. Ingrese una nuevo contraseña        </p>
        <FloatingLabel
          controlId="floatingInput"
          label="Nueva contraseña"
          className="mb-3"
        >
          <Form.Control
            type="code"
            placeholder="name@example.com"
            id={estilo.inpt1}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Confirma nueva contraseña"
          className="mb-3"
        >
          <Form.Control
            type="code"
            placeholder="name@example.com"
            id={estilo.inpt1}
          />
        </FloatingLabel>
        <p className={estilo.text3}>
         
        </p>
        <Button variant="warning" id={estilo.btn1}>
          {" "}
          Restablecer contraseña
        </Button>{" "}
      </div>
    </div>
  );
}

export default Recuperar;
