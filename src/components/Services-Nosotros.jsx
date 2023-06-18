import React from "react";
import "./../Styles/ServicesNosotros.css";
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
          <i className="fa-regular fa-star" style={{ color: '#ff7300', fontSize: '8vw', marginLeft: '1.4rem' }}></i>
          <div className="cont-5">
            <p id="title-3">
              <strong>Servicios de atención al cliente</strong>
            </p>
            <p id="txt-5">Con la mejor atención a nivel nacional.</p>
          </div>
        </div>
        {/* ------------------------------------------------------- */}
        <div className="cont-4">
          <i class="fa-solid fa-calendar-days" style={{ color: '#ff9500', fontSize: '8vw', marginLeft: '1.5rem' }}></i>
          <div className="cont-5">
            <p id="title-3">
              <strong>Disponibilidad en cualquier día del año</strong>
            </p>
            <p id="txt-5">Siéntete libre de visitarnos en cualquier momento.</p>
          </div>
        </div>
        {/* ------------------------------------------------------- */}
        <div className="cont-4">
          <i class="fa-solid fa-tags" style={{ color: '#ffc107', fontSize: '8vw', marginLeft: '1.5rem' }}></i>
          <div className="cont-5">
            <p id="title-3">
              <strong>Descuentos y promociones</strong>
            </p>
            <p id="txt-5">Entérate de las ofertas que tenemos para ti.</p>
          </div>
        </div>
        {/* ------------------------------------------------------- */}
        <div className="cont-4">
          <i class="fa-solid fa-heart" style={{ color: '#ffde05', fontSize: '8vw', marginLeft: '1.5rem' }}></i>
          <div className="cont-5">
            <p id="title-3">
              <strong>Siempre dispuestos a mejorar</strong>
            </p>
            <p id="txt-5">
              Siempre brindando el mejor servicio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
