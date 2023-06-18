import React from 'react';
import '../../Styles/Nosotros.css'
import imagenhotelnosotros from '../../Images/hotel-apartado-nosotros.jpg'
import imagenhotelnosotros2 from '../../Images/imagenhotelnosotros2.webp'
import Footer from '../Footer';

const Nosotros = () => {
    return (
        <div className='primer-apartado'>
            <div>
                <div className='apartado-left'>
                    <h1>¿Quienes somos?</h1>
                    <h2>¿Por que nuestro hotel?</h2>
                    <p>!La elección perfecta para aquellos que buscan
                        una experiencia inolvidable
                    </p>
                    <div className='apartado-botones'>
                        <button className='apartado-boton-1'>Inicio</button>
                        <button className='apartado-boton-2'>Reserva ahora</button>
                    </div>
                </div>
                <div className='apartado-right'>
                    <img src={imagenhotelnosotros} alt="maig1" className='imagen-apartado-nosotros'/>
                </div>
            </div>
            <div className='segundo-apartado'>
                <div className='segundo-apartado-left'>
                    <img src={imagenhotelnosotros2} alt="maig2" className='imagen-apartado-nosotros2' />
                </div>
                <div className='segundo-apartado-right'>
                    <h4 className='titulo-principal'>Nuestro Hotel</h4>
                    <h1 className='titulo-secundario'>Tranquilidad y </h1>
                    <h1 className='titulo-secundario'>Comodidad</h1>
                    <p>descripcion</p>
                    <div className='segundo-apartado-encabezado'>
                        <div className='segundo-apartado-encabezados'>
                            <h2 className='titulo-segundo-apartado'>500+</h2>
                            <p>Clientes felices</p>
                        </div>
                        <div className='segundo-apartado-encabezados'>
                            <h2 className='titulo-segundo-apartado'>1k+</h2>
                            <p>Reseñas</p>
                        </div>
                </div>
                <div className='ultimo-apartado'>
                    <p>Variedad de servicios</p>
                </div>
                <div className='ultimo-apartado'>
                    <p>Variedad de habitaciones</p>
                </div>
                </div>
                
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
    }

export default Nosotros;
