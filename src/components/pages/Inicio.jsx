import React from 'react'

import Footer from '../Footer';
import FotosHotel from '../FotosHotel';
import Mapa from '../Mapa';
import Opinions from '../Opinions';
import Habitaciones from '../Habitaciones';
import Servicios from '../Servicios';
import InicioReserva from '../InicioReserva';


export const Inicio = () => {
    return (
        <div style={{
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <InicioReserva />
            <FotosHotel />
            <Habitaciones />
            <Servicios />
            <Mapa />
            <Opinions />
            <Footer />
        </div>
    )
}

export default Inicio;
