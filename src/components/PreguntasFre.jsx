import React from "react";
import "../Styles/Preguntasfree.css";
import Accordion from "react-bootstrap/Accordion";
import { IoWalletSharp } from "react-icons/io5"; //Billetera
import { BsFillMapFill } from "react-icons/bs"; // Icono billetera
import { AiFillContacts, AiFillSecurityScan } from "react-icons/ai"; //Icono ubicación, cuenta y seguridad

function PreguntasFre() {
  return (
    <>
      <div className="cont-11">
        <p id="title-9">
          <strong>Preguntas frecuentes</strong>
        </p>
        <p id="desc-8">
          Aquí encontraras algunas de las preguntas que más nos hacen.
        </p>
      </div>
      <div className="acordeon">
        {/* ------------------------------------------------------------------------------------------ */}
        <Accordion id="acr-1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <AiFillContacts id="icon-1" />
              Cuenta
            </Accordion.Header>
            <Accordion.Body>
              <div className="ques-1">
                <div id="q-1">
                  <p id="txt-11">
                    <strong>Olvide mi contraseña</strong>
                  </p>
                  <p id="txt-14">
                    Si olvidaste tu contraseña puedes recuperarla con el correo
                    que has registrado.
                  </p>
                </div>
                <div id="q-1">
                  <p id="txt-12">
                    <strong>Olvide el correo</strong>
                  </p>
                  <p id="txt-13">
                    Si has olvidado tu correo consulta al soporte tecnico
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <IoWalletSharp id="icon-2" />
              Medios de pago
            </Accordion.Header>
            <Accordion.Body>
              <div className="ques-1">
                <div id="q-1">
                  <p id="txt-11">
                    <strong>¿Como puedo pagar mi factura?</strong>
                  </p>
                  <p id="txt-14">
                    Puedes realizar tu pago, con tarjeta de credito desde la
                    comodidad de tu casa, o en la recepcion del hotel.
                  </p>
                </div>
                <div id="q-1">
                  <p id="txt-12">
                    <strong>¿Es seguro pagar en linea?</strong>
                  </p>
                  <p id="txt-13">
                    La linea para pagos virtuales es totalmete segura, esta
                    resguardada por un software de encriptacion para asegurar la
                    confiabilidad.
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion id="acr-2">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <AiFillSecurityScan id="icon-3" />
              Seguridad
            </Accordion.Header>
            <Accordion.Body>
              <div className="ques-1">
                <div id="q-1">
                  <p id="txt-11">
                    <strong>¿La locacion es segura?</strong>
                  </p>
                  <p id="txt-14">
                    Nuestra ubicacion esta vigilada 24/7 por camaras de
                    seguridad y guardias a tu disposicion.
                  </p>
                </div>
                <div id="q-1">
                  <p id="txt-12">
                    <strong>¿Mi equipaje estara seguro?</strong>
                  </p>
                  <p id="txt-13">
                    Contamos con la mejor organizacion para proteger tus
                    pertenecias.
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <BsFillMapFill id="icon-4" />
              Locacion
            </Accordion.Header>
            <Accordion.Body>
              <div className="ques-1">
                <div id="q-1">
                  <p id="txt-11">
                    <strong>¿La locacion tiene buenas vistas?</strong>
                  </p>
                  <p id="txt-14">
                    En nuestras ubicacion contamos con las mejores vistas
                  </p>
                </div>
                <div id="q-1">
                  <p id="txt-12">
                    <strong>¿Que tan facil es llegar?
                    </strong>
                  </p>
                  <p id="txt-13">
                   Nuestro hotel esta ubicado en las montañas donde es facil llegar.
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* -------------------------------------------------------------------------- */}
      </div>
    </>
  );
}

export default PreguntasFre;
