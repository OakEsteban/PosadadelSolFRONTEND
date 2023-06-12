import React from "react";
import "./../Styles/ServicesNosotros.css";
import ic1 from "../Images/iconService1.jpg";
import ic2 from "../Images/iconService2.jpg";
import ic3 from "../Images/iconService3.jpg";
import ic4 from "../Images/iconService4.jpg";
function Services() {
  return (
    <>
      <div className="txt-3">
        <p id="title-2">
          <strong>NUESTROS SERVICIOS</strong>
        </p>
        <p id="sub-1">
          <strong>Ofrecemos los mejores servicios</strong>
        </p>
      </div>
      <div className="cont-3">
        {/* ------------------------------------------------------ */}
        <div className="cont-4">
          <img src={ic1} alt="" id="img2" />
          <div className="cont-5">
            <p id="title-3">
              <strong>Servicios de atencion al cliente</strong>
            </p>
            <p id="txt-5">Con la mejor atencion a nivel nacional</p>
          </div>
        </div>
        {/* ------------------------------------------------------- */}
        <div className="cont-4">
          <img src={ic2} alt="" id="img2" />
          <div className="cont-5">
            <p id="title-3">
              <strong>Disponibilidad en cualquier día del año</strong>
            </p>
            <p id="txt-5">Sientete libre de visitarnos en cualquier momento.</p>
          </div>
        </div>
        {/* ------------------------------------------------------- */}
        <div className="cont-4">
          <img src={ic3} alt="" id="img2" />
          <div className="cont-5">
            <p id="title-3">
              <strong>Descuentos y promociones</strong>
            </p>
            <p id="txt-5">Enterate de las ofertas que tenemos para ti.</p>
          </div>
        </div>
        {/* ------------------------------------------------------- */}
        <div className="cont-4">
          <img src={ic4} alt="" id="img2" />
          <div className="cont-5">
            <p id="title-3">
              <strong>Siempre dispuesto a mejorar</strong>
            </p>
            <p id="txt-5">
              Cuentanos como fue tu experiencia en nuestro hotel para saber que
              debemos mejorar y asi seguir brindando el mejor servicio
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
