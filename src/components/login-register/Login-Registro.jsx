import React, { useEffect } from 'react';
import "../../Styles/login-register/login-register.css";
import { useState, useRef } from "react";
import { useScript } from "../../hooks/useScript";
import jwt_decode from "jwt-decode";


function LoginRegistro() {

    //Sección Botón Google. 
    const googlebuttonref = useRef();

    const [user, setuser] = useState(false);
    const onGoogleSignIn = (user) => {
        let userCred = user.credential;
        let payload = jwt_decode(userCred);
        console.log(payload);
        setuser(payload);
    };
    useScript("https://accounts.google.com/gsi/client", () => {
        window.google.accounts.id.initialize({
            client_id: "375800270898-a1jsu4rlplt491r2m6p9pnlfpph42m6a.apps.googleusercontent.com",
            callback: onGoogleSignIn,
            auto_select: false,
        });

        window.google.accounts.id.renderButton(googlebuttonref.current, {
            size: "medium",
        });
    });


    useEffect(() => {
        const handleInputFocus = (event) => {
            event.target.classList.add('active');
        };

        const handleInputBlur = (event) => {
            if (event.target.value !== '') return;
            event.target.classList.remove('active');
        };

        const handleToggleClick = () => {
            const main = document.querySelector('main');
            main.classList.toggle('sign-up-mode');
        };

        //Fin sección Botón Google. 


        //Funciones de animaciones para el apartado de imagenes el carrusel, en el apartado de login.
        const inputs = document.querySelectorAll('.input-field-10');
        const toggle_btn = document.querySelectorAll('.toggle-10');
        const bullets = document.querySelectorAll('.bullets span');
        const images = document.querySelectorAll('.image');

        const handleBulletClick = (event) => {
            const index = event.target.dataset.value;

            images.forEach((img) => img.classList.remove('show'));
            const currentImage = document.querySelector(`.img-${index}`);
            currentImage.classList.add('show');

            const textSlider = document.querySelector('.text-group');
            textSlider.style.transform = `translateY(${-(index - 1) * 2.7}rem)`;

            const bullets = document.querySelectorAll('.bullets span');
            bullets.forEach((bull) => bull.classList.remove('active'));
            event.target.classList.add('active');
        };

        inputs.forEach((inp) => {
            inp.addEventListener('focus', handleInputFocus);
            inp.addEventListener('blur', handleInputBlur);
        });

        toggle_btn.forEach((btn) => {
            btn.addEventListener('click', handleToggleClick);
        });

        bullets.forEach((bullet) => {
            bullet.addEventListener('click', handleBulletClick);
        });

        return () => {
            inputs.forEach((inp) => {
                inp.removeEventListener('focus', handleInputFocus);
                inp.removeEventListener('blur', handleInputBlur);
            });

            toggle_btn.forEach((btn) => {
                btn.removeEventListener('click', handleToggleClick);
            });

            bullets.forEach((bullet) => {
                bullet.removeEventListener('click', handleBulletClick);
            });
        };
    }, []
    );

    //Fin unciones de animaciones para el apartado de imagenes el carrusel, en el apartado de login.



    //Todo el HTML para el código de Login-Registro
    return (
        <main id='main-10'>
            <div class="box-10">
                <div class="inner-box-10">

                    {/* Aquí comienza el INICO DE SESIÓN. */}

                    <div class="forms-wrap-10">
                        <form action="index.html" autocomplete="off" class="sign-in-form-10">
                            <div class="logo-10">
                                <img src={require('../../Images/logoPosada.png')} alt="Posada del SOL" />
                                <h3>La Posada del Sol</h3>
                            </div>
                            <div class="heading-10">
                                <h2> Inicia Sesión </h2>
                                <h6>¿Aún no te has registrado? </h6>
                                <a href="#" class="toggle-10"> Registrate ahora.</a>
                            </div>
                            {/* 2 Inputs para el INICO DE SESIÓN. */}

                            <div class="actual-form-10">
                                <div class="input-wrap-10">
                                    <input type="email" class="input-field-10" autocomplete="off" required />
                                    <label id="label-10">Correo Electrónico.</label>
                                </div>

                                <div class="input-wrap-10">
                                    <input type="password" class="input-field-10" autocomplete="off" required />
                                    <label id="label-10">Contraseña.</label>

                                </div>


                            </div>

                            <div>
                                <p class="text-10">
                                    ¿Olvidaste tu contraseña?
                                    <a href="#"> Obtén ayuda.</a>
                                </p>

                                <input type="submit" value="Inicia Sesión" class="sign-btn-10" />

                                {/* Se añade el botón de Google */}

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "40px",
                                    }}
                                >
                                    {!user && <div ref={googlebuttonref}></div>}
                                    {user && (
                                        <div>
                                            <h1>{user.name}</h1>
                                            <img src={user.picture} alt="profile" />
                                            <p>{user.email}</p>

                                            <button
                                                onClick={() => {
                                                    setuser(false);
                                                }}
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>

                            </div>

                        </form>


                        {/* Aquí comienza el REGISTRO. */}

                        <form action="index.html" autocomplete="off" class="sign-up-form-10">
                            <div class="logo-10">
                                <img src={require('../../Images/logoPosada.png')} alt="Posada del SOL" />
                                <h3 > La Posada del Sol</h3>
                            </div>
                            <div class="heading-10">
                                <h2> Registrate </h2>
                                <h6>¿Ya tienes una cuenta? </h6>
                                <a href="#" class="toggle-10"> Inicia Sesión.</a>
                            </div>


                            {/* 5 Inputs para el Registro. */}


                            <div class="actual-form-10">
                                <div class="input-wrap-10">
                                    <input type="text" class="input-field-10" autocomplete="off" required />
                                    <label id="label-10">Nombres.</label>
                                </div>

                                <div class="input-wrap-10">
                                    <input type="text" class="input-field-10" autocomplete="off" required />
                                    <label id="label-10">Apellidos.</label>
                                </div>

                                <div class="input-wrap-10">
                                    <input type="email" class="input-field-10" autocomplete="off" required />
                                    <label id="label-10">Correo Electrónico.</label>
                                </div>

                                <div class="input-wrap-10">
                                    <input type="password" class="input-field-10" autocomplete="off" required />
                                    <label id="label-10">Contraseña.</label>
                                </div>

                                <div class="input-wrap-10">
                                    <input type="password" class="input-field-10" autocomplete="off" required />
                                    <label id="label-10">Confirma tu contraseña.</label>
                                </div>



                            </div>

                            <div>
                                <p class="text-10">
                                    Al registrarme, acepto las <a href="#">condiciones de servicio</a> y la <a
                                        href="#">política de privacidad. </a>
                                </p>

                                <input type="submit" value="Registrate" class="sign-btn-10" />

                                {/* Se añade el botón de Google */}

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "40px",
                                    }}
                                >
                                    {!user && <div ref={googlebuttonref}></div>}
                                    {user && (
                                        <div>
                                            <h1>{user.name}</h1>
                                            <img src={user.picture} alt="profile" />
                                            <p>{user.email}</p>

                                            <button
                                                onClick={() => {
                                                    setuser(false);
                                                }}
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Carousel de imagenes. */}

                    <div class="carousel-10">
                        <div class="images-wrapper">
                            <img src={require("../../Images/hotel21.jpg")} class="image img-1 show" alt="" />
                            <img src={require("../../Images/hotel22.jpg")} class="image img-2" alt="" />
                            <img src={require("../../Images/hotel23.jpg")} class="image img-3" alt="" />

                        </div>

                        {/* Slider y texto de imagenes. */}
                        <div class="text-slider">
                            <div class="text-wrap">
                                <div class="text-group">
                                    <h2>Elegancia y comodidad.</h2>
                                    <h2>Estancia inolvidable.</h2>
                                    <h2>Hospitalidad excepcional.</h2>
                                </div>
                            </div>

                            <div class="bullets">
                                <span class="active" data-value="1"></span>
                                <span data-value="2"></span>
                                <span data-value="3"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </main >
    )
}
//Fin de todo el HTML para el código de Login-Registro


export default LoginRegistro