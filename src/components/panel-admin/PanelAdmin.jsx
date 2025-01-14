import '../../Styles/panel-admin/PanelAdmin.css';
import icono from '../../Images/logoPosada.png';
import Icon from '@mui/material/Icon';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import BedroomParentSharpIcon from '@mui/icons-material/BedroomParentSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import BuildCircleSharpIcon from '@mui/icons-material/BuildCircleSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import WavingHandSharpIcon from '@mui/icons-material/WavingHandSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';


function PanelAdmin(){
    return(
        <div className="contenedor-principal">
            <aside>
                <div className='top'>
                    <div className="logo">
                        <img src={icono} alt="logo-posada"/>
                        <h2 className='titulo-top'>Panel <br />Administrador</h2>
                    </div>
                    <div className="close" id='close-btn'>
                        <CloseSharpIcon/>
                    </div>
                </div>
                <div className="sidebar">
                    <a href="#" className='active'>
                        <HomeSharpIcon className='iconito'/>
                        <h3>Inicio</h3>
                    </a>
                    <a href="#">
                        <BedroomParentSharpIcon className='iconito'/>
                        <h3>Habitaciones</h3>
                    </a>
                    <a href="#">
                        <LocalPhoneSharpIcon className='iconito'/>
                        <h3>Servicios</h3>
                    </a>
                    <a href="#">
                        <CalendarMonthSharpIcon className='iconito'/>
                        <h3>Planes</h3>
                    </a>
                    <a href="#">
                        <EngineeringSharpIcon className='iconito'/>
                        <h3>Trabajadores</h3>
                    </a>
                    <a href="#">
                        <GroupSharpIcon className='iconito'/>
                        <h3>Usuarios</h3>
                    </a>
                    <a href="#">
                        <BuildCircleSharpIcon className='iconito'/>
                        <h3>Configuraciones</h3>
                    </a>
                    <a href="#">
                        <LogoutSharpIcon className='iconito'/>
                        <h3>Salir</h3>
                    </a>

                </div>
            </aside>
            <div className='seccion-principal'>
                <div className="seccion-top">
                    <div className="seccion-top-left">
                        <h1>Hola <br/>Admin</h1>
                        <WavingHandSharpIcon sx={{ fontSize: 40 }}/>
                    </div>
                    <div className="seccion-top-right">
                        <AccountCircleSharpIcon sx={{ fontSize: 80 }}/>
                    </div>
                </div>
                <div className="seccion-top2">
                    <div>
                        <h1>750</h1>
                        <p>Usuarios registrados</p>
                    </div>
                    <div>
                        <h1>750</h1>
                        <p>Usuarios registrados</p>
                    </div>
                    <div>
                        <h1>750</h1>
                        <p>Usuarios registrados</p>
                    </div>
                </div>
                <div className="seccion-datos">
                    <div className="cards">
                        <h2>Habitaciones mas adquiridas</h2>
                    </div>
                    <div className="cards">
                        <h2>Grafica</h2>
                    </div>
                    <div className="cards">
                        <h2>Servicios mas adquiridos</h2>
                    </div>
                    <div className="cards">
                        <h2>Grafica</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelAdmin