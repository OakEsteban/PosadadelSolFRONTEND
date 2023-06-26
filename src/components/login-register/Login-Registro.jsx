import "../../Styles/login-register/login-register.css";
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import axios from 'axios';


function LoginRegistro() {

    // //Sección Botón Google. 
    // const googlebuttonref = useRef();

    // const [user, setuser] = useState(false);
    // const onGoogleSignIn = (user) => {
    //     let userCred = user.credential;
    //     let payload = jwt_decode(userCred);
    //     console.log(payload);
    //     setuser(payload);
    // };
    // useScript("https://accounts.google.com/gsi/client", () => {
    //     window.google.accounts.id.initialize({
    //         client_id: "375800270898-a1jsu4rlplt491r2m6p9pnlfpph42m6a.apps.googleusercontent.com",
    //         callback: onGoogleSignIn,
    //         auto_select: false,
    //     });

    //     window.google.accounts.id.renderButton(googlebuttonref.current, {
    //         size: "medium",
    //     });
    // });

    // //Fin sección Botón Google. 


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
            axios.post('http://localhost:4000/login', data)
                .then((response) => {
                    console.log(response.data);
                    const token = response.data.token;
                    localStorage.setItem('token', token);

                    setLoggedIn(true);
                    setLoginError('');

                    // Recargar la página automáticamente
                    navigate('/Inicio');
                    window.location.reload();
                })
                .catch((error) => {
                    console.error(error);
                    setLoggedIn(false);
                    setLoginError('Correo o contraseña incorrectos');
                });
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
                        {errors.email?.type === 'required' && <p className='p-error-114'> Este campo es requerido. </p>}
                        {errors.email?.type === 'pattern' && <p className='p-error-114'> El formato del correo, es incorrecto. </p>}

                    </div>

                    <div className="input-wrap-10">
                        <input type="password" className="input-field-10" autoComplete="off" name='contrasena'
                            {...register('contrasena', {
                                required: true,
                                pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                            })} />
                        <label id="label-10">Contraseña.</label>
                        {errors.contrasena?.type === 'required' && <p className='p-error-114'> Este campo es requerido. </p>}
                        {errors.contrasena?.type === 'pattern' && <p className='p-error-114'> La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
                        </p>}
                    </div>
                </div>

                <div>
                    <p className="text-10">
                        ¿Olvidaste tu contraseña?
                        <a href="/Recuperar"> Obtén ayuda.</a>
                    </p>
                    <input type="submit" value="Inicia Sesión" className="sign-btn-10" />
                </div>

            </form>
        );
    };


    emailjs.init('IEnniO4mfUumuhLAb'); // Reemplaza 'YOUR_USER_ID' por tu ID de usuario de Email.js
    // Paso 3: Define la función para enviar el correo electrónico.
    function sendEmail(formdata) {

        // Envía el correo electrónico utilizando la plantilla definida en tu cuenta de Email.js.
        emailjs.send('service_c24qgpl', 'template_sgfjdeo', formdata)
            .then(function (response) {
                console.log('Correo electrónico enviado con éxito:', response);
            }, function (error) {
                console.error('Error al enviar el correo electrónico:', error);
            });
    }

    const Signupform = () => {
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const navigate = useNavigate();

        const [showError, setShowError] = useState(false);

        const handleMouseEnter = () => {
            setShowError(true);
        };

        const handleMouseLeave = () => {
            setShowError(false);
        };

        const password = watch('contrasena'); // Obtener el valor del campo de contraseña

        const onSubmit = (data) => {
            console.log(data)
            axios.post('http://localhost:4000/users', data)
                .then(response => {

                    //Enviar correo
                    const formdata = { nombres: data.nombres, email: data.email };
                    sendEmail(formdata)

                    //Ir a pagina de confirmacion
                    navigate('/Confirmacion');

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
                        {errors.nombres?.type === 'required' && <p className='p-error-114'> Este campo es requerido. </p>}
                        {errors.nombres?.type === 'maxLength' && <p className='p-error-114'> Estas excediendo el limite de caracteres (30). </p>}
                    </div>

                    <div className="input-wrap-10">
                        <input type="text" className="input-field-11" autoComplete="off" name="apellidos" {...register('apellidos', {
                            required: true,
                            maxLength: 30
                        })} />

                        <label id="label-10">Apellidos.</label>
                        {errors.apellidos?.type === 'required' && <p className='p-error-114'> Este campo es requerido. </p>}
                        {errors.apellidos?.type === 'maxLength' && <p className='p-error-114'> Estas excediendo el limite de caracteres (30). </p>}
                    </div>

                    <div className="input-wrap-10">
                        <input type="email" className="input-field-11" autoComplete="off"  {...register('email', {
                            required: true,
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                        })} />
                        <label id="label-10">Correo Electrónico.</label>
                        {errors.email?.type === 'required' && <p className='p-error-114'> Este campo es requerido. </p>}
                        {errors.email?.type === 'pattern' && <p className='p-error-114'> El formato del correo, es incorrecto. </p>}
                    </div>

                    <div className="input-wrap-10">
                        <input
                            type="password"
                            className="input-field-11"
                            autoComplete="off"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            {...register('contrasena', {
                                required: true,
                                maxLength: 16,
                                pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                            })}
                        />
                        <label id="label-10">Contraseña.</label>
                        {showError && (
                            <p className='p-error-114 p-error-box'>
                                La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
                            </p>
                        )}
                        {errors.contrasena?.type === 'required' && (
                            <p className='p-error-114'>Este campo es requerido.</p>
                        )}
                        {errors.contrasena?.type === 'maxLength' && (
                            <p className='p-error-114'>Estás excediendo el límite de caracteres (16).</p>
                        )}
                    </div>


                    <div className="input-wrap-10">
                        <input
                            type="password"
                            className="input-field-11"
                            autoComplete="off"
                            {...register('confirmarContrasena', {
                                required: true,
                                maxLength: 16,
                                pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                                validate: value => value === password
                            })}
                        />
                        <label id="label-10">Confirma tu contraseña.</label>
                        {errors.confirmarContrasena?.type === 'required' && <p className='p-error-114'>Este campo es requerido.</p>}
                        {errors.confirmarContrasena?.type === 'maxLength' && (
                            <p className='p-error-114'>Estás excediendo el límite de caracteres (16).</p>
                        )}
                        {errors.confirmarContrasena?.type === 'validate' && (
                            <p className='p-error-114'>Las contraseñas no coinciden.</p>
                        )}
                    </div>



                </div>

                <div>
                    <p className="text-10">
                        Al registrarme, acepto las <a href="#">condiciones de servicio</a> y la <a
                            href="#">política de privacidad. </a>
                    </p>

                    <input type="submit" value="Registrate" className="sign-btn-11" />

                    {/* Se añade el botón de Google

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
                    </div> */}
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