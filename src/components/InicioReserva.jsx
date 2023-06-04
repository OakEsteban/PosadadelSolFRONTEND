import React from 'react'
import Navbar from '../components/navbar/Navbar'
import '../Styles/InicioReserva.css'
import { Link } from 'react-router-dom'

function InicioReserva() {
    return (
        <div>
            <body>
                <section className="home-176" id="home-176">
                    <div className="swiper home-slider-176">
                        <div className="swiper-wrapper-176">
                            <div className="swiper-slide-176 slide-176">
                                <div className="content-176">
                                    <img src={require('../Images/logoPosada.png')} alt="Posada del SOL" />
                                    <h3 className='Frase-176'>La Posada del Sol</h3>
                                    <h3 className='Frase-176'>Descubre el encanto y la serenidad</h3>
                                    <Link to="/Habitaciones" className="btn-176"> Habitaciones </Link>
                                    <Link to="/Hotel" className="btn-176"> Hotel </Link>
                                    <Link to="/Inicia-Sesion" className="btn-176"> Reserva Ahora </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="availability-176">
                    <form action="" className='form-176'>
                        <div className="box-176">
                            <p> Llegada: <span>*</span></p>
                            <input type="date" className="input-176" />
                        </div>

                        <div className="box-176">
                            <p> Salida: <span>*</span></p>
                            <input type="date" className="input-176" />
                        </div>

                        <div className="box-176">
                            <p> Húespedes: <span>*</span></p>
                            <select name="adults" id="" className="input-176">
                                <option value="" disabled selected hidden>Elige la cantidad de huéspedes</option>
                                <option value="1"> 1 Húesped</option>
                                <option value="2"> 2 Húespedes</option>
                                <option value="3"> 3 Húespedes</option>
                                <option value="4"> 4 Húespedes</option>
                                <option value="5"> 5 Húespedes</option>
                                <option value="6"> 6 Húespedes</option>
                                <option value="7"> Más...</option>
                            </select>
                        </div>

                        <div className="box-176">
                            <p> Tipo de habitación: <span>*</span></p>
                            <select name="child" id="" className="input-176">
                                <option value="" disabled selected hidden>Elige el tipo de habitación</option>
                                <option value="1"> Sencilla (Una cama normal, máximo 2 personas).</option>
                                <option value="2"> Doble (Dos camas normales, máximo 3 personas).</option>
                                <option value="3"> Triple (Tres camas normales, máximo 6 personas).</option>
                                <option value="4"> Empresarial (Una cama queen, máximo 3 personas).</option>
                                <option value="5"> Penthouse (Dos camas queen en el último piso, máximo 5 personas).</option>
                            </select>
                        </div>

                        <div className="box-176">
                            <p>Cantidad de habitaciones. <span>*</span></p>
                            <select name="rooms" id="" className="input-176">
                                <option value="" disabled selected hidden>Elige la cantidad de habitaciones</option>
                                <option value="1"> 1 habitaciones</option>
                                <option value="2"> 2 habitaciones</option>
                                <option value="3"> 3 habitaciones</option>
                                <option value="4"> 4 habitaciones</option>
                                <option value="5"> 5 habitaciones</option>
                                <option value="6"> 6 habitaciones</option>
                                <option value="7"> Más habitaciones</option>
                            </select>
                        </div>

                        <input type="submit" value="Verificar" className="btn-176" />
                    </form>
                </section>


            </body>
        </div>


    )
}

export default InicioReserva