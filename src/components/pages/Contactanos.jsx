import React, { useState } from 'react';
import "../../Styles/Contactanos.css";
import {useForm} from "react-hook-form";
import axios from 'axios';
import stile from "../../Styles/Mapa.module.css";
import Button from "react-bootstrap/Button";
import map from "../../Images/pin_mark.png";
import email from "../../Images/email.png";
import phone from "../../Images/phone.png";

export const Contactanos = () => {

    const [option, setOption] = useState(null);
    const handleOptionChange = (selectedOption) => {
        setOption(selectedOption);
      };

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
      
      console.log(data);
    }

    return (
        <div style={{

        }}>
            <div className='bodyContactenos'>
                <div className='bannerContactenos'>
                    <h1 className='h1-contactenos'>¡Contactenos!</h1>
                </div>
                <div className='boxContactenos'>
                    <div className='mapaContactenos'>
                        <div className='infoContactenos'>
                            <div className='titulomapContactenos'>
                                <h4>¡Habla con nosotros!</h4>
                                <div className='submapContactenos'><a>¡Tu opinión siempre era importante!</a></div>
                                
                            </div>
                            <div className='logosmapContactenos'>
                                <img src={phone} className="logoinfomapContactanos" width="50" height="50"></img>
                                <a>22082xx</a>
                            </div>
                            <div className='logosmapContactenos'>
                                <img src={email} className="logoinfomapContactanos" width="50" height="50"></img>
                                <a>help@posadasol.com</a>
                            </div>
                            <div className='logosmapContactenos'>
                                <img src={map} className="logoinfomapContactanos" width="50" height="50"></img>
                                <a>Direccion</a>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5628.222819688058!2d-76.19351750245288!3d4.070365106300722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39c432a16d8163%3A0xdaa99c2edc9b4719!2sUniversidad%20del%20Valle%20-%20Sede%20Villa%20Campestre!5e0!3m2!1ses!2sco!4v1685319775515!5m2!1ses!2sco"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                className={stile.map2}
                            ></iframe>

                        </div>
                        <div className='mapaContactenos2'>
                            
                        </div>
                    </div>
                    <form className='div-mapForm' onSubmit={handleSubmit(onSubmit)}>
                        <div className='formularioConctactenos'>
                        <div className='camposContactenos'>
                            <div className='pairConctactenos'>
                                <div className='pairConctactenos2'>
                                    <a>Nombres</a>
                                    <input type="text" className="input-field-contactanos" {...register('Nombres')}></input>
                                </div>
                                <div className='pairConctactenos2'>
                                    <a>Apellidos</a>
                                    <input type="text" className="input-field-contactanos" {...register('Apellidos')}></input>
                                </div>
   
                            </div>
                            <div className='pairConctactenos'>
                                <div className='pairConctactenos2'>
                                    <a>Correo electrónico</a>
                                    <input type="text" className="input-field-contactanos" {...register('Email')}></input>
                                </div>
                                <div className='pairConctactenos2'>
                                    <a>Numero de teléfono</a>
                                    <input type="text" className="input-field-contactanos" {...register('Telefono')}></input>                                 
                                </div>

                            </div>
                        </div>
                        <div>
                            <a>¿Acerca de que quieres hablar?</a>
                        </div>
                        
                        <div className='radio-contactenos'>
                            
                            <div className='radio-paircontactenos'>
                                <input type="radio" name="Sugerencias" value="coment" className='radio-button-contactenos' checked={option === "sugerencias"} onChange={() => handleOptionChange("sugerencias")}/>
                                <a>Sugerencias</a>
                            </div>
                            <div className='radio-paircontactenos'>                     
                                <input type="radio" name="Quejas" value="coment" className='radio-button-contactenos' checked={option === "Quejas"} onChange={() => handleOptionChange("Quejas")}/>
                                <a>Quejas</a>  
                            </div>
                            <div className='radio-paircontactenos'>                        
                                <input type="radio" name="Consultas" value="coment" className='radio-button-contactenos' checked={option === "Consultas"} onChange={() => handleOptionChange("Consultas")}/>
                                <a>Consultas</a>
                            </div>
                            <div className='radio-paircontactenos'> 
                                <input type="radio" name="Otros" value="coment" className='radio-button-contactenos' checked={option === "Otros"} onChange={() => handleOptionChange("Otros")}/>
                                <a>Otros</a>
                            </div>
                        </div>
                        <div>
                            <a>Mensaje</a>
                        </div>
                        <div>
                            <input type="text"  className="input-field-contactanos2" placeholder='Comentario'/>
                        </div>
                        </div>
                        <input type="submit" value="Enviar" className='input-button-contactenos'></input>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactanos;
