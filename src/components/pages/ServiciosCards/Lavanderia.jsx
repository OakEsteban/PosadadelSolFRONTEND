import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Lavanderia = () => {
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [tipo_serv, setTipoServ] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/servicios');
                const { data } = response;
                setDescripcion(data[4].descripcion); // Seleccionar el primer elemento del array y extraer la descripción
                setPrecio(formatCurrency(data[4].precio));
                setTipoServ(data[4].tipo_serv);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    const formatCurrency = (value) => {
        const formattedValue = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP'
        }).format(value);

        return formattedValue.replace(/,00$/, ''); // Eliminar los dos ceros finales si existen
    };
    return (
        <div className="card mb-4 border-0 shadow">
            <div className="row g-0 p-3 align-items-center">
                <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                    <img src={require("../../../Images/lavanderia.jpg")} className="img-fluid rounded" alt="Room" />
                </div>
                <div className="col-md-5 px-lg-3 px-md-3 px-0">
                    <h5 className="mb-3" style={{ fontWeight: '600', color: '#A96596' }}>Tipo de servicio: {tipo_serv}</h5>
                    <div className="features mb-4">
                        <h6 className="mb-1" style={{ fontWeight: '600', color: '#A96596' }}>Descripción</h6>
                        <span className="badge rounded-pill bg-light text-dark text-wrap">
                            {descripcion}
                        </span>
                    </div>
                </div>
                <div className="col-md-2 mt-lg-0 mt-md-0 mt-4 text-center">
                    <h6 className="mb-4" style={{ fontWeight: '600', color: '#A96596' }}>Precio: {precio} </h6>
                    <a href="#" className="btn btn-sm w-100 text-black btn-outline-dark custom-bg shadow-none mb-2">
                        Adquirir
                    </a>

                    <a href="#" className="btn btn-sm w-100 btn-outline-dark custom-bg2 shadow-none">
                        Más detalles
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Lavanderia;