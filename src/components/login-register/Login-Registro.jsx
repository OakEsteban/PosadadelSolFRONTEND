import "../../Styles/login-register/login-register.css";
import { useState, useRef, useEffect } from "react";
import { useScript } from "../../hooks/useScript";
import jwt_decode from "jwt-decode";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


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

    //Fin sección Botón Google. 


    //Funciones de animaciones para el apartado de imagenes el carrusel, en el apartado de login.

    useEffect(() => {


        const inputs = document.querySelectorAll('.input-field-10, .input-field-11');
        const toggle_btn = document.querySelectorAll('.toggle-10');
        const main = document.querySelector("main");
        const bullets = document.querySelectorAll('.bullets span');
        const images = document.querySelectorAll('.image');

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


    //Import de React Hook Forms, para los formularios, y dividinos uno cada uno, para mas orden y que usen sus propias funciones
    const Loginform = () => {
        const { register, formState: { errors, setErrors }, handleSubmit } = useForm();
        const [loggedIn, setLoggedIn] = useState(false);
        const [loginError, setLoginError] = useState('');
        const navigate = useNavigate();

        const onSubmit = (data) => {
            console.log(data)
            axios.post('http://localhost:4000/login', data)
                .then((response) => {
                    // Manejar la respuesta del servidor si es exitosa
                    console.log(response.data);
                    setLoggedIn(true); // Establecer el estado de inicio de sesión exitoso
                    setLoginError(''); // Limpiar el mensaje de error en caso de que haya uno anteriormente
                    navigate('/Inicio');
                })
                .catch((error) => {
                    // Manejar el error si la solicitud no se puede completar
                    console.error(error);
                    setLoggedIn(false); // Establecer el estado de inicio de sesión a false
                    setLoginError('Correo o contraseña incorrectos'); // Establecer el mensaje de error
                });
        }

        const handleLogout = () => {
            // Lógica para cerrar la sesión del usuario
            setLoggedIn(false);
        };

        
        
        return (
            <form action="index.html" autoComplete="off" className="sign-in-form-10"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="logo-10">
                    <img src={require('../../Images/logoPosada.png')} alt="Posada del SOL" />
                    <h3>La Posada del Sol</h3>
                </div>
                <div className="heading-10">
                    <h2> Inicia Sesión </h2>
                    <h6>¿Aún no te has registrado? </h6>
                    <a href="#" className="toggle-10"> Registrate ahora.</a>
                </div>
                {/* 2 Inputs para el INICO DE SESIÓN. */}

                <div className="actual-form-10">
                    <div className="input-wrap-10">
                        <input type="email" className="input-field-10" autoComplete="off" name='email'
                            {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            })} />
                        <label id="label-10">Correo Electrónico.</label>
                        {errors.email?.type === 'required' && <p className='p-error-114'> Este campo es requerido </p>}
                        {errors.email?.type === 'pattern' && <p className='p-error-114'> El formato del correo, es incorrecto </p>}

                    </div>

                    <div className="input-wrap-10">
                        <input type="password" className="input-field-10" autoComplete="off" name='contrasena'
                            {...register('contrasena', {
                                required: true,
                                pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                            })} />
                        <label id="label-10">Contraseña.</label>
                        {errors.contrasena?.type === 'required' && <p className='p-error-114'> Este campo es requerido </p>}
                        {errors.contrasena?.type === 'pattern' && <p className='p-error-114'> La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
                        </p>}
                    </div>
                </div>

                <div>
                    <p className="text-10">
                        ¿Olvidaste tu contraseña?
                        <a href="/Recuperar"> Obtén ayuda.</a>
                    </p>


                    {loggedIn ? (
                        <div>
                            <p>Iniciaste sesión exitosamente</p>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                        </div>
                    ) : (
                        <input type="submit" value="Inicia Sesión" className="sign-btn-10" />
                    )}
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


                <div
                    style={{
                        display: loggedIn ? "none" : "flex",
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

                {loginError && <p>{loginError}</p>}

            </form>
        );
    };

    const Signupform = () => {
        const { register, formState: { errors }, handleSubmit } = useForm();
        const navigate = useNavigate();

        const onSubmit = (data) => {
            console.log(data)
            axios.post('http://localhost:4000/users', data)
                .then(response => {
                    
                    /*const nodemailer = require('nodemailer');
                    sendEmail = async () => {
                        const config = {
                            host : 'smtp.gmail.com',
                            port : 587,
                            auth : {
                                user : 'marcelino.hudson@ethereal.email',
                                pass: 'jrKNxGAt6yy8x9wQnm'
                            }
                        }
                        const mensaje = {
                            from : 'marcelino.hudson@ethereal.email',
                            to : data.email,
                            subject: 'Confirmación de cuenta',
                            text : '¡Felicitaciones! su cuenta ha sido creada con exito'
                        }
                        const transport = nodemailer.createTransport(config);
                        const info = await transport.sendMail(config);
                    }

                    sendEmail();*/
                    

                    navigate('/Confirmacion');
                    // Aquí se realizan otras acciones después de que el usuario se haya registrado correctamente.
                })
                .catch(error => {
                    console.error(error);
                    // Aquí se realizan otras acciones para cualquier error que ocurra durante el registro.
                });
        }

        return (
            <form action="index.html" autoComplete="off" className="sign-up-form-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="logo-10">
                    <img src={require('../../Images/logoPosada.png')} alt="Posada del SOL" />
                    <h3 > La Posada del Sol</h3>
                </div>
                <div className="heading-10">
                    <h2> Registrate </h2>
                    <h6>¿Ya tienes una cuenta? </h6>
                    <a href="#" className="toggle-10"> Inicia Sesión.</a>
                </div>


                {/* 5 Inputs para el Registro. */}


                <div className="actual-form-10">
                    <div className="input-wrap-10">
                        <input type="text" className="input-field-11" autoComplete="off" name="nombres" {...register('nombres', {
                            required: true,
                            maxLength: 30
                        })} />
                        <label id="label-10">Nombres.</label>
                        {errors.nombres?.type === 'required' && <p className='p-error-114'> Este campo es requerido </p>}
                        {errors.nombres?.type === 'maxLength' && <p className='p-error-114'> Estas excediendo el limite de caracteres (30) </p>}
                    </div>

                    <div className="input-wrap-10">
                        <input type="text" className="input-field-11" autoComplete="off" name="apellidos" {...register('apellidos', {
                            required: true,
                            maxLength: 30
                        })} />

                        <label id="label-10">Apellidos.</label>
                        {errors.apellidos?.type === 'required' && <p className='p-error-114'> Este campo es requerido </p>}
                        {errors.apellidos?.type === 'maxLength' && <p className='p-error-114'> Estas excediendo el limite de caracteres (30) </p>}
                    </div>

                    <div className="input-wrap-10">
                        <input type="email" className="input-field-11" autoComplete="off"  {...register('email', {
                            required: true,
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                        })} />
                        <label id="label-10">Correo Electrónico.</label>
                        {errors.email?.type === 'required' && <p className='p-error-114'> Este campo es requerido </p>}
                        {errors.email?.type === 'pattern' && <p className='p-error-114'> El formato del correo, es incorrecto </p>}
                    </div>

                    <div className="input-wrap-10">
                        <input type="password" className="input-field-11" autoComplete="off" {...register('contrasena', {
                            required: true,
                            maxLength: 13,
                            pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                        })} />
                        <label id="label-10">Contraseña.</label>
                        {errors.contrasena?.type === 'pattern' && <p className='p-error-114'> La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.</p>}
                        {errors.contrasena?.type === 'required' && <p className='p-error-114'> Este campo es requerido </p>}
                        {errors.contrasena?.type === 'maxLength' && <p className='p-error-114'> Estas excediendo el limite de caracteres (13) </p>}
                    </div>

                    {/* <div className="input-wrap-10">
                        <input type="password" className="input-field-11" autoComplete=" off" {...register('contraseñareg', {
                            required: true,
                            maxLength: 13,
                            pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                        })} />
                        <label id="label-10">Confirma tu contraseña.</label>
                        {errors.contraseñalogin?.type === 'pattern' && <p className='p-error-114'> La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.</p>}
                        {errors.contraseñareg?.type === 'required' && <p className='p-error-114'> Este campo es requerido </p>}
                        {errors.contraseñareg?.type === 'maxLength' && <p className='p-error-114'> Estas excediendo el limite de caracteres (13) </p>}
                    </div> */}



                </div>

                <div>
                    <p className="text-10">
                        Al registrarme, acepto las <a href="#">condiciones de servicio</a> y la <a
                            href="#">política de privacidad. </a>
                    </p>

                    <input type="submit" value="Registrate" className="sign-btn-11" />

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
        );
    };

    //Todo el HTML para el código de Login-Registro
    return (
        <main id='main-10'>
            <div className="box-10">
                <div className="inner-box-10">

                    <div className="forms-wrap-10">
                        <Loginform />
                        <Signupform />
                    </div>

                    {/* Carousel de imagenes. */}

                    <div className="carousel-10">
                        <div className="images-wrapper">
                            <img src={require("../../Images/hotel21.jpg")} className="image img-1 show" alt="" />
                            <img src={require("../../Images/hotel22.jpg")} className="image img-2" alt="" />
                            <img src={require("../../Images/hotel23.jpg")} className="image img-3" alt="" />

                        </div>

                        {/* Slider y texto de imagenes. */}
                        <div className="text-slider">
                            <div className="text-wrap-124">
                                <div className="text-group">
                                    <h2>Elegancia y comodidad.</h2>
                                    <h2>Estancia inolvidable.</h2>
                                    <h2>Hospitalidad excepcional.</h2>
                                </div>
                            </div>

                            <div className="bullets">
                                <span className="active" data-value="1"></span>
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