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
                    <p>Descripcion</p>
                </div>
                <div className='cabezal-derecha'>
                    <button className='botonsito'>
                        Ver más
                    </button>
                </div>
            </div>
            <div className='mostrar-habitaciones'>
                <div className='habitacion'>
                    <img className='imagen' src={habitacion1} alt="hab1" />
                    <div className='futer'>
                        <div className='futer-1'>
                            <div className='futer-izquierda'>
                                <h3 className='sneci-1'>Sencilla</h3>
                                <p className='sneci'>Descripcion</p>
                            </div>
                            <div className='futer-derecha'>
                                <h3>$ 000</h3>
                            </div>
                        </div>
                        <div>
                            <button className='botonsito-1'>RESERVAR</button>
                        </div>
                    </div>
                </div>
                <div className='habitacion'>
                    <img className='imagen' src={habitacion2} alt="hab2" />
                    <div className='futer'>
                        <div className='futer-1'>
                            <div className='futer-izquierda'>
                                <h3 className='sneci-1'>Triple</h3>
                                <p className='sneci'>Descripcion</p>
                            </div>
                            <div className='futer-derecha'>
                                <h3>$ 000</h3>
                            </div>
                        </div>
                        <div>
                            <button className='botonsito-1'>RESERVAR</button>
                        </div>
                    </div>
                </div>
                <div className='habitacion'>
                    <img className='imagen' src={habitacion3} alt="hab3" />
                    <div className='futer'>
                        <div className='futer-1'>
                            <div className='futer-izquierda'>
                                <h3 className='sneci-1'>Empresarial</h3>
                                <p className='sneci'>Descripcion</p>
                            </div>
                            <div className='futer-derecha'>
                                <h3>$ 000</h3>
                            </div>
                        </div>
                        <div>
                            <button className='botonsito-1'>RESERVAR</button>
                        </div>
                    </div>
                </div>
                <div className='habitacion'>
                    <img className='imagen' src={habitacion4} alt="hab4" />
                    <div className='futer'>
                        <div className='futer-1'>
                            <div className='futer-izquierda'>
                                <h3 className='sneci-1'>Penthouse</h3>
                                <p className='sneci'>Descripcion</p>
                            </div>
                            <div className='futer-derecha'>
                                <h3>$ 000</h3>
                            </div>
                        </div>
                        <div>
                            <button className='botonsito-1'>RESERVAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default habitaciones