import '../Styles/Whatsapp-icon.css'
import icono from "../Images/WhatsApp_icon.png.webp"

function iconowhatsapp(){
    return(
        <div className='content-principal'>
            <a href="https://wa.me/573152516179" className='btn-whatsapp'>
                <img src={icono} alt="Contactanos" className='imagen-whatsapp'/>
            </a>
        </div>
    )
}

export default iconowhatsapp