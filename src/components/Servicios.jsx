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
                <a className='bi' href='/Servicios'>Ver más</a>
            </header>
            <p className='descripcion'>Contamos con servicios de transporte,lavanderia,desayuno,almuerzo,cena y servicio al cuarto para que tu estadia sea mucho mas comoda</p>
            <div className='afuera'>
                <div className='bloque-1'>
                    <header className='bloque-1-cabeza'>
                        <h1>Servicios</h1>
                        <div className='bloque-1-1'>
                            <p className='desde'>Desde</p>
                            <h3 className='price'>$000</h3>
                            <p className='adicion'>Adicionales</p>
                        </div>
                    </header>
                    <p>Adquiere algunos de nuestros</p>
                    <p>servicios para que disfrutes</p>
                    <p>al 100% tu estadia en el hotel</p>
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