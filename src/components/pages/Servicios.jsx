import React, { useState, useEffect } from 'react';
import Desayuno from './ServiciosCards/Desayuno';
import Almuerzo from './ServiciosCards/Almuerzo';
import Cena from './ServiciosCards/Cena';
import Cuarto from './ServiciosCards/Cuarto';
import Lavanderia from './ServiciosCards/Lavanderia';
import Transporte from './ServiciosCards/Transporte';
import Footer from '../Footer';





export const Servicios = () => {
    const [opciones, setOpciones] = useState({
        todos: true,
        transporte: false,
        desayuno: false,
        almuerzo: false,
        cena: false,
        lavanderia: false,
        servicioCuarto: false
    });

    useEffect(() => {
        // Se ejecuta al cargar la página
        setOpciones((prevOpciones) => ({ ...prevOpciones, todos: true }));
    }, []);

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setOpciones({ ...opciones, [id]: checked });
    };
    return (
        <div>

            <div className='bannerHabServ'>
                <h1 className='h1-HabServ'>Nuestros Servicios</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12 mb-lg-0 mb-4 px-0">
                        <nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow">
                            <div className="container-fluid flex-lg-column align-items-stretch">
                                <h4 className="mt-2" style={{ fontWeight: '600', color: '#A96596' }}>Filtrar</h4>
                                <button
                                    className="navbar-toggler shadow-none"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#filterDropdown"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse flex-column align-items-stretch mt-2" id="filterDropdown">
                                    <div className="border bg-light p-3 rounded mb-3">
                                        <h5 className="mb-3" style={{ fontWeight: '600', color: '#A96596' }}>
                                            Tipo de servicio
                                        </h5>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="todos"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.todos}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="todos">
                                                Todos
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="transporte"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.transporte}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="transporte">
                                                Transporte
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="desayuno"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.desayuno}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="desayuno">
                                                Desayuno
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="almuerzo"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.almuerzo}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="almuerzo">
                                                Almuerzo
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="cena"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.cena}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="cena">
                                                Cena
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="lavanderia"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.lavanderia}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="lavanderia">
                                                Servicio de lavandería
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="servicioCuarto"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.servicioCuarto}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="servicioCuarto">
                                                Servicio al cuarto
                                            </label>
                                        </div>
                                    </div>

                                    <div className="border bg-light p-3 rounded mb-3">
                                        <h5 className="mb-3" style={{ fontWeight: '600', color: '#A96596' }}>
                                            Precio
                                        </h5>
                                        <div className="d-flex">
                                            <div className="me-2">
                                                <label className="form-label" style={{ fontWeight: '500' }}>Min</label>
                                                <input type="number" className="form-control shadow-none" min="100000" />
                                            </div>
                                            <div>
                                                <label className="form-label" style={{ fontWeight: '500' }}>Max</label>
                                                <input type="number" className="form-control shadow-none" max="500000" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border bg-light p-3 rounded mb-3" >
                                        <a href="#" className="btn btn-sm w-100 shadow-none" style={{ fontWeight: '500' }}>
                                            Borrar todo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>


                    <div className="col-lg-9 col-md-12 px-4">
                        {opciones.todos && (
                            <>
                                <Cuarto />
                                <Transporte />
                                <Lavanderia />
                                <Desayuno />
                                <Almuerzo />
                                <Cena />
                            </>
                        )}
                        {!opciones.todos && opciones.transporte && <Transporte />}
                        {!opciones.todos && opciones.lavanderia && <Lavanderia />}
                        {!opciones.todos && opciones.desayuno && <Desayuno />}
                        {!opciones.todos && opciones.almuerzo && <Almuerzo />}
                        {!opciones.todos && opciones.cena && <Cena />}
                        {!opciones.todos && opciones.servicioCuarto && <Cuarto />}
                    </div>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}

export default Servicios;