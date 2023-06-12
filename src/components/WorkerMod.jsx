import React from "react";

import "../Styles/NosotrosStyle.css";
import t1 from "../Images/trabajador1.jpg";
import t2 from "../Images/trabajador2.jpg";
import t3 from "../Images/trabajador3.jpeg";

function WorkerMod() {
  return (
    <>
      <div className="cont3">
        <p id="txt-1">
          <strong> Conoce a nuestros trabajadores</strong>
          <p id="txt-2">
            Contamos con el mejor servicio que podemos ofrecer, reconocido por
            los expertos en la región
          </p>
        </p>
      </div>
      <div className="container-100">
        {/* ------------------------------------------------------------- */}
        <div className="container-101" id="C1">
          <img src={t1} alt="" id="img1" />
          <div className="text-1">
            <p id="title">
              <strong>Recepcionistas</strong>
            </p>
            <p id="desc"><b>
              Nuestros recepcionistas entan capacitados con la mejor atencion al
              cliente, estan siemprea tentos a los nuevos vicitantes para que se
              sientan bienvenidos en todo momento.
              </b>
            </p>
          </div>
        </div>
        {/* ------------------------------------------------------------- */}
        <div className="container-101" id="C2">
          <img src={t3} alt="" id="img1" />
          <div className="text-1">
            <p id="title">
              <strong>Cocineros</strong>
            </p>
            <p id="desc"><b>
              Tenemos los mejores cocinero de la region, capacitados para
              ofrecerte los mejores platos que puedan ofrecer.
              </b>
            </p>
          </div>
        </div>
        {/* -------------------------------------------------------------- */}

        <div className="container-101" id="C3">
          <img src={t2} alt="" id="img1" />
          <div className="text-1">
            <p id="title">
              <strong>Servicios de limpieza</strong>
            </p>
            <p id="desc"><b>
              El personal que se encargara de dejar todo limpio y arreglado para
              mejorar lo maximo posible tu estadia y que tengas ganas de
              regresar.
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkerMod;
