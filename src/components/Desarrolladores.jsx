import React from "react";
import "../Styles/Desarrolladores.css";
import img1 from "../Images/Fotos/CF.jpg";
import { AiFillGithub } from "react-icons/ai";

function Desarrolladores() {
  const info = document.querySelector(".cont-info");
  const punto = document.querySelectorAll(".punto");

  punto.forEach((cadapunto, i) => {
    punto[i].addEventListener("click", () => {
      let posicion = i;
      let operacion = posicion * -20;

      info.style.transform = `translateX(${operacion}%)`;
      punto.forEach((cadapunto, i) => {
        punto[i].classList.remove("activo");
      });

      punto[i].classList.add("activo");
    });
  });

  return (
    <>
      <div className="title-5">
        <p id="title-9">CONOCE A LOS DESARROLLADORES DE LA PAGINA</p>
      </div>

      {/* ----------------------------------------------------------------------------------------------- */}

      <div className="carrusel">
        <div className="cont-info">
          <div className="DW">
            <img src={img1} alt="Cristian Florez" id="foto-1" />
            <span id="title-12"><strong>Desarrollador</strong> <span>/ Cristian David Florez Lopez</span></span>
           
            <span id="desc-15">
              cuento con 6 meses de experiencia en desarrollo web trabajando con
              react.
            </span>
            <a href="https://github.com/Cris25nkl" target="_blanc">
              <AiFillGithub id="logo-git" />
            </a>
          </div>
          <div className="DW D2">
            <img src={img1} alt="Cristian Florez" id="foto-1" />
            <span id="title-12"><strong>Desarrollador</strong>/ Cristian David Florez</span>
            
            <span id="desc-16">
              cuento con 6 meses de experiencia en desarrollo web trabajando con
              react.
            </span>
            <a href="https://github.com/Cris25nkl" target="_blanc">
              <AiFillGithub id="logo-git" />
            </a>
          </div>
          <div className="DW D3">
            <img src={img1} alt="Cristian Florez" id="foto-1" />
            <span id="title-12"><strong>Desarrollador</strong>/ Cristian David Florez</span>
          
            <span id="desc-17">
              cuento con 6 meses de experiencia en desarrollo web trabajando con
              react.
            </span>
            <a href="https://github.com/Cris25nkl" target="_blanc">
              <AiFillGithub id="logo-git" />
            </a>
          </div>
          <div className="DW D4">
            <img src={img1} alt="Cristian Florez" id="foto-1" />
            <span id="title-12"><strong>Desarrollador</strong>/ Cristian David Florez</span>
          
            <span id="desc-18">
              cuento con 6 meses de experiencia en desarrollo web trabajando con
              react.
            </span>
            <a href="https://github.com/Cris25nkl" target="_blanc">
              <AiFillGithub id="logo-git" />
            </a>
          </div>
          <div className="DW D5">
            <img src={img1} alt="Cristian Florez" id="foto-1" />
            <span id="title-12"><strong>Desarrollador</strong>/ Cristian David Florez</span>
            
            <span id="desc-19">
              cuento con 6 meses de experiencia en desarrollo web trabajando con
              react.
            </span>
            <a href="https://github.com/Cris25nkl" target="_blanc">
              <AiFillGithub id="logo-git" />
            </a>
          </div>
        </div>

        <ul id="puntos">
          <li className="punto activo"></li>
          <li className="punto"></li>
          <li className="punto"></li>
          <li className="punto"></li>
          <li className="punto"></li>
        </ul>
      </div>
    </>
  );
}

export default Desarrolladores;
