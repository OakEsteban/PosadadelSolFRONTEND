import React, { useState, useEffect } from 'react';
import Plan1 from './PlanesCards/Plan1';
import Plan2 from './PlanesCards/Plan2';
import Plan3 from './PlanesCards/Plan3';
import Plan4 from './PlanesCards/Plan4';
import Footer from '../Footer';





export const Planes = () => {
    const [opciones, setOpciones] = useState({
        todos: true,
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: false,
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
                                                id="plan1"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.plan1}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="plan1">
                                                Plan1
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="plan2"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.plan2}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="plan2">
                                                Plan2
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="plan3"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.plan3}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="plan3">
                                                Plan3
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="plan4"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.plan4}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="plan4">
                                                Plan4
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
                                <Plan1 />
                                <Plan2 />
                                <Plan3 />
                                <Plan4 />
                            </>
                        )}
                        {!opciones.todos && opciones.plan1 && <Plan1 />}
                        {!opciones.todos && opciones.plan2 && <Plan2 />}
                        {!opciones.todos && opciones.plan3 && <Plan3 />}
                        {!opciones.todos && opciones.plan4 && <Plan4 />}
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

export default Planes;