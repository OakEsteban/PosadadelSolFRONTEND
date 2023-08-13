import React from 'react'
import '../Styles/Page404.css'
import { Link } from 'react-router-dom';

export const Page404 = () => {
    return (
        <section class="page_404">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class=" col-sm-offset-1 text-center">
                            <div class="fondo-404 text-center">
                                <img src='https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif'></img>
                            </div>
                            <div class="contant_box_404">
                                <h3 class="h3-404">
                                    Parece que estás perdido <i class="fa-solid fa-circle-question"></i>
                                </h3>
                                <p class="p-404">¡La página que estás buscando no está disponible! <i class="fa-solid fa-face-sad-cry"></i></p>

                                <Link to="/PosadadelSolFRONTEND/Inicio" className='link_404'>
                                    <i class="fa-solid fa-house"></i>  Ir a inicio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page404;
