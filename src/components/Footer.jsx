import logoPosada from "../Images/logoPosada.png";
import "../Styles/Footer.css";
import React, { useState } from "react";
//import {useform} from "react-hook-form"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footerTop">
                <div className="about">
                    <h1>Bienvenido a nuestro Hotel</h1>
                </div>
                <div className="subscription">
                    <h3>¡Suscribete para recibir ofertas especiales!</h3>
                    <div className="ofertaContainer">
                        <input className="inputEmail" placeholder="Tu dirección de email"></input>
                        <button className="button1" type="submit">Suscribirse</button>
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <div className="posada box">
                    <Link to='/Inicio'>
                        <img src={logoPosada} className="logoPos" width="100" height="100"></img>
                    </Link>

                </div>
                <div className="box">
                    <div className="listHrefFooter">
                        <Link className="footerLinkTitles" to="/Inicio">
                            <h3>Nuestro Hotel</h3>
                        </Link>
                    </div>
                </div>
                <div className="box">
                    <div className="listHrefFooter">
                        <Link className="footerLinkTitles" to="/Habitaciones">
                            <h3>Nuestras Habitaciones</h3>
                        </Link>
                        <Link className="footerLink" to="/Habitaciones">Habitaciones Sencillas</Link>
                        <Link className="footerLink" to="/Habitaciones">Habitaciones Empresariales</Link>
                        <Link className="footerLink" to="/Habitaciones">Habitaciones Penthouse</Link>
                    </div>
                </div>
                <div className="box">
                    <div className="listHrefFooter">
                        <Link className="footerLinkTitles" to="/Servicios">
                            <h3>Nuestros servicios</h3>
                        </Link>
                        <Link className="footerLink" to="/Servicios">Comida</Link>
                        <Link className="footerLink" to="/Servicios">Transporte</Link>
                        <Link className="footerLink" to="/Servicios">Limpieza</Link>
                    </div>
                </div>
                <div className="box">
                    <div className="listHrefFooter">
                        <Link className="footerLinkTitles" to="/Nosotros">
                            <h3>Acerca de nosotros</h3>
                        </Link>

                        <Link className="footerLink" href="/Nosotros">Servicios Excelentes</Link>
                        <Link className="footerLink" href="/Nosotros">Trabajadores Capacitados</Link>
                    </div>
                </div>
                <div className="box">
                    <div className="listHrefFooter">
                        <Link className="footerLinkTitles" to='/Contactanos'>
                            <h3>Contactanos</h3>
                        </Link>

                        <a className="footerLink" href="mailto:laposadadelsol.official@gmail.com">laposadadelsol.official@gmail.com</a>
                        <Link className="footerLink" to="/Contactanos">Telefono</Link>
                    </div>
                </div>
                <div className="box">
                    <Link className="footerLinkTitles" to='/Inicio'>
                        <button className="button2" href='#Frase-176'>Inicio</button>
                    </Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer;