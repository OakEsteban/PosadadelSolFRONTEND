import "../../Styles/Confirmacion.css";
import comprobado from "../../Images/comprobado.png";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Confirmacion = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Inicia-Sesion');
    };

    return (
        <div className="main-confirmacion">
            <div className="Contenedorr-Confirmacion">
                <div className="Contenedorr-Datos">

                    <div className="datos-confirmacion">
                        <div className="logo-10">
                            <img src={require('../../Images/logoPosada.png')} alt="Posada del SOL" />
                            <h3> La Posada del Sol</h3>
                        </div>
                        <div className="info-confirmacion">
                            <i className="fa-regular fa-circle-check" style={{ color: '#2cb620', fontSize: '8vw' }}></i>
                            <h3>¡Gracias por registrarte!</h3>
                            <p>Te hemos enviado un correo confirmando tu registro.<br />Ya puedes reservar en nuestro hotel.</p>

                        </div>
                        <div className="botones-confirmacion">
                            <Link to="" className="btn-1790 "> Agregar método de pago </Link>
                            <Link to="/IniciaSesion" className="btn-1790 "> Más tarde </Link>
                        </div>
                        <div className="botones-confirmacion2">
                            <Link to="/Inicio" className="btn-1790 "> Ir a la página principal </Link>
                        </div>

                    </div>

                </div>
            </div>

        </div>




    )
}
export default Confirmacion;