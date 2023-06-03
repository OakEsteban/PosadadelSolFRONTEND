import React from 'react'

import Footer from '../Footer';
import FotosHotel from '../FotosHotel';
import Mapa from '../Mapa';
import Opinions from '../Opinions';


export const Inicio = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <FotosHotel />
            <Mapa />
            <Opinions />
            <Footer />
        </div>
    )
}

export default Inicio;
