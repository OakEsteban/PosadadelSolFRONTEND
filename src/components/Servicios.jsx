import '../Styles/Servicios.css'
import transporte from "../Images/transporte.jpg";
import comida from "../Images/comida.jpg"
import lavanderia from "../Images/lavanderia.jpg"
import mesero from "../Images/mesero.jpg"

function servicios(){
    return(
        <div className='con'>
            <header className='cabeza' >
                <h1>Nuestros Servicios</h1>
                <button className='bi'>Ver más</button>
            </header>
            <p className='descripcion'>Descripcion</p>
            <div className='afuera'>
                <div className='bloque-1'>
                    <header className='bloque-1-cabeza'>
                        <h1>Descripcion</h1>
                        <div className='bloque-1-1'>
                            <p className='desde'>Desde</p>
                            <h3 className='price'>$000</h3>
                            <p className='adicion'>Adicionales</p>
                        </div>
                    </header>
                    <p>Descripcion</p>
                </div>
                <div className='bloque-2'>
                    <div className='lateral-1'>
                        <div className='caja-lateral-1'>
                            <img src={comida} className='imagen' />
                        </div>
                        <div className='caja-lateral-1'>
                            <img src={mesero} className='imagen' />
                        </div>
                    </div>
                    <div>
                        <div className='caja-lateral-1'>
                            <img src={lavanderia} className='imagen' />
                        </div>
                        <div className='caja-lateral-1'>
                            <img src={transporte} className='imagen' />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            
        
    )
}

export default servicios;