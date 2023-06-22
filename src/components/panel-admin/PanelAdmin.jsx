import '../../Styles/panel-admin/PanelAdmin.css';

function PanelAdmin(){
    return(
        <div className="contenedor-principal">
            <div className='barra-navegacion'>
                <header className='titulo-principal'>
                    <h2>Panel <br />Administrador</h2>
                </header>
                <nav className='titulos-navegacion'>
                    <a href="" className='titulos'>Inicio</a>
                    <a href="" className='titulos'>Habitaciones</a>
                    <a href="" className='titulos'>Servicios</a>
                    <a href="" className='titulos'>Planes</a>
                    <a href="" className='titulos'>Trabajadores</a>
                    <a href="" className='titulos'>Usuarios</a>
                    <a href="" className='titulos'>Configuraciones</a>
                    <a href="" className='titulos'>Salir</a>
                </nav>
            </div>
            <div className='apartado-principal'>
                <div className='titulo-administrador'>
                    <h2>Hola,<br />Admin</h2>
                </div>
                <div className='division-secundaria'>
                    <div className='cuadros-secundarios'>
                        <h3>750</h3>
                        <h5>Usuarios registrados</h5>
                    </div>
                    <div className='cuadros-secundarios'>
                        <h3>750</h3>
                        <h5>Habitaciones reservadas</h5>
                    </div>
                    <div className='cuadros-secundarios'>
                        <h3>750</h3>
                        <h5>Ganancias</h5>
                    </div>
                </div>
                <div className='ultima-division'>
                    <div className='ultima-division1'>
                        <header>
                            <h4>Habitaciones mas adquiridas</h4>
                        </header>
                    </div>
                    <div className='ultima-division2'>
                        <header>
                            <h4>Grafica</h4>
                        </header>
                    </div>
                    <div className='ultima-division2'>
                        <header>
                            <h4>Grafica</h4>
                        </header>
                    </div>
                    <div className='ultima-division1'>
                        <header>
                            <h4>Servicios mas adquiridos</h4>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelAdmin