import '../Styles/Habitaciones.css'
import habitacion1 from "../Images/habitacion1.jpg";
import habitacion2 from "../Images/habitacion2.jpeg";
import habitacion3 from "../Images/habitacion3.jpg";
import habitacion4 from "../Images/habitacion4.jpg";

function habitaciones(){
    return(
        <div className='principal'>
            <div className='cabezal'>
                <div className='cabezal-izquierda'>
                    <h1>Nuestras Habitaciones</h1>
                    <p>Exquisita elegancia en cada rincón. Habitaciones que acarician tus sueños con comodidad y lujo. Descubre un refugio sublime donde el confort y el estilo se entrelazan en armonía. Déjate seducir por la sofisticación de nuestro hotel y disfruta de una experiencia inigualable. ¡Bienvenido a la Posada del Sol!

                    </p>
                </div>
                <div className='cabezal-derecha'>
                    <a className='botonsito' href='/Habitaciones'>
                        Ver más
                    </a>
                </div>
            </div>
            <div className='mostrar-habitaciones'>
                <div className='habitacion'>
                    <img className='imagen' src={habitacion1} alt="hab1" />
                    <div className='futer'>
                        <div className='futer-1'>
                            <div className='futer-izquierda'>
                                <h3 className='sneci-1'>Sencilla</h3>
                                <p className='sneci'>Habitacion sencilla</p>
                            </div>
                            <div className='futer-derecha'>
                                <h3>$ 000</h3>
                            </div>
                        </div>
                        <div className='padre-boton'>
                            <a className='botonsito-1' href='/Inicia-sesion'>RESERVAR</a>
                        </div>
                    </div>
                </div>
                <div className='habitacion'>
                    <img className='imagen' src={habitacion2} alt="hab2" />
                    <div className='futer'>
                        <div className='futer-1'>
                            <div className='futer-izquierda'>
                                <h3 className='sneci-1'>Triple</h3>
                                <p className='sneci'>Habitacion Triple</p>
                            </div>
                            <div className='futer-derecha'>
                                <h3>$ 000</h3>
                            </div>
                        </div>
                        <div className='padre-boton'>
                            <a className='botonsito-1' href='/Inicia-sesion'>RESERVAR</a>
                        </div>
                    </div>
                </div>
                <div className='habitacion'>
                    <img className='imagen' src={habitacion3} alt="hab3" />
                    <div className='futer'>
                        <div className='futer-1'>
                            <div className='futer-izquierda'>
                                <h3 className='sneci-1'>Empresarial</h3>
                                <p className='sneci'>Habitacion Empresaria</p>
                            </div>
                            <div className='futer-derecha'>
                                <h3>$ 000</h3>
                            </div>
                        </div>
                        <div className='padre-boton'>
                            <a className='botonsito-1' href='/Inicia-sesion'>RESERVAR</a>
                        </div>
                    </div>
                </div>
                <div className='habitacion'>
                    <img className='imagen' src={habitacion4} alt="hab4" />
                    <div className='futer'>
                        <div className='futer-1'>
                            <div className='futer-izquierda'>
                                <h3 className='sneci-1'>Penthouse</h3>
                                <p className='sneci'>Habitacion Penthouse</p>
                            </div>
                            <div className='futer-derecha'>
                                <h3>$ 000</h3>
                            </div>
                        </div>
                        <div className='padre-boton'>
                            <a className='botonsito-1' href='/Inicia-sesion'>RESERVAR</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default habitaciones