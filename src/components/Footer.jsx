import logoPosada from "../Images/logoPosada.png";
import "../Styles/Footer.css";
import React, { useState } from "react";
//import {useform} from "react-hook-form"

function Footer() {
  return (
    <footer>
        <div className = "footerTop">
            <div className="about">
                <h1>Acerca de nosotros</h1>
                <a className = "descriptionText" >Nuestro hotel ofrece...</a>
            </div>
            <div className="subscription">
                <h3>¡Suscribete para recibir ofertas especiales!</h3>
                <div className = "ofertaContainer">
                    <input className = "inputEmail" placeholder="Tu dirección de email"></input>
                    <button className = "button1" type="submit">Suscribirse</button>
                </div>   
            </div>
        </div>

        <div className="footerBottom">
            <div className="posada box">
                <img src={logoPosada} className="logoPos" width="100" height="100"></img>
                <a className="posadaText">La posada del sol</a>
            </div>
            <div className="box">
                <div className="listHrefFooter">
                    <h3>Nuestro hotel</h3>
                    <a className="footerLink" href="#">Habitacion1</a>
                    <a className="footerLink" href="#">Habitacion2</a>
                    <a className="footerLink" href="#">Habitacion3</a>
                </div>
            </div>
            <div className="box">
                <div className="listHrefFooter">
                    <h3>Nuestras habitaciones</h3>
                    <a className="footerLink" href="#">Habitacion1</a>
                    <a className="footerLink" href="#">Habitacion2</a>
                    <a className="footerLink" href="#">Habitacion3</a>
                </div>
            </div>
            <div className="box">
                <div className="listHrefFooter">
                    <h3>Nuestros servicios</h3>
                    <a className="footerLink" href="#">Habitacion1</a>
                    <a className="footerLink" href="#">Habitacion2</a>
                    <a className="footerLink" href="#">Habitacion3</a>
                </div>
            </div>
            <div className="box">
                <div className="listHrefFooter">
                    <h3>Acerca de nosotros</h3>
                    <a className="footerLink" href="#">Habitacion1</a>
                    <a className="footerLink" href="#">Habitacion2</a>
                    <a className="footerLink" href="#">Habitacion3</a>
                </div>
            </div>
            <div className="box">
                <div className="listHrefFooter">
                    <h3>Contactanos</h3>
                    <a className="footerLink" href="#">Correo</a>
                    <a className="footerLink"href="#">Telefono</a>
                </div>
            </div>
            <div className="box">
                <button className = "button2">Inicio</button>
                </div>
        </div>
        
    </footer>
  )
}

export default Footer;