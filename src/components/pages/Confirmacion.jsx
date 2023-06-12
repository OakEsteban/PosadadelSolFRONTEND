import "../../Styles/Confirmacion.css";
import comprobado from "../../Images/comprobado.png";
import { useNavigate } from 'react-router-dom';

export const Confirmacion = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Inicia-Sesion');
  };
    return (
        <div style={{

        }}>
            <div className="confirmacion-body">
                <div className="confirmacion-box">
                    <div className="confirmacion-text confirmacion-element">
                        <img src={comprobado} className="confirmacion-element" alt="logo-comprobado" width="200" height="200"></img>
                    </div>

                    <div className="confirmacion-element">
                        <h1 >¡Cuenta creada con exito!</h1>
                    </div>
                    
                    <div className="confirmacion-element">
                        <button className="confirmacion-button" onClick={handleClick}>Iniciar sesión</button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}
export default Confirmacion;