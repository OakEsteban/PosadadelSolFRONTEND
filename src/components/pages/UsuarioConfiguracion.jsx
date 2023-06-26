import React, { useState, useEffect } from 'react';
import "../../Styles/UsuarioConfiguracion.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
import logoPosada from "../../Images/logoPosada.png";
import defaultUser from "../../Images/user.png";
import Footer from '../Footer';
import {getFile} from '../../FirebaseConfig/firebase';
import {setFile} from '../../FirebaseConfig/firebase';

export const UsuarioConfiguracion = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

        //Actualizar informacion base de datos
        const userID = 1;
        data.id = ''+1;
        console.log(data);
        axios.put('http://localhost:4000/users/'+ userID, data)
                .then(response => {           
                    //Enviar correo
                    //const formdata = {nombres:data.nombres, email:data.email};
                    //sendEmail(formdata)
                    //Ir a pagina de confirmacion
                    console.log('Datos actuaizados');  
                })

        //Guardar imagen en firebase
        setFile(imageFile);
    }

    //Importar imagen
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile, setImageFile] = useState('');

    useEffect(() => {
        const imagePath = 'usersIcon/1.jpg';

        getFile(imagePath)
        .then((url) => {
            if (url) {
            setImageUrl(url);
            } else {
            setImageUrl(defaultUser);
            }
        })
        .catch((error) => {
            setImageUrl(defaultUser);
        });
    }, []);

    function changeTempImage(file){
        setImageFile(file);
        setImageUrl(URL.createObjectURL(file));
    }
    

    return (
        <div style={{

        }}>

            <div className='body-usuarioConfig'>
                <div className='panel-userconfig'>
                    <div className='leftPanel-userconfig'>
                        <div className='box1-userconfig'>
                            <div className='box2-userConfig'>
                                <img src={logoPosada} className="Img1-userConfig"></img>
                                <h2 className="Text1-userConfig">La posada del sol</h2>
                            </div>
                        </div>
                        <div className='box1-userconfig'>
                            <h2 className='text2-userConfig'>Foto de perfil</h2>
                        </div>
                        <div className='box1-userconfig'>
                            <img src={imageUrl} className="Img2-userConfig" width="250" height="250"></img>
                        </div>
                        <div className='box1-userconfig'>
                            <div className='custom-input-userConfig'>
                                <input type='file' className='submitPhoto-userConfig' accept=".png,.jpg,.jpeg,.WebP,.TIFF" onChange={e => changeTempImage(e.target.files[0])}/>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='panel-userconfig'>
                    <div className='tituloForm-userconfig'>
                        <h1>Configuración personal</h1>
                    </div>
                    <form className='form-userConfig'  onSubmit={handleSubmit(onSubmit)}>
                        <div className='box3-userconfig'>
                            <input className='TextInput-userConfig' placeholder='Nombres' type="text" {...register('nombres', {
                            required: true,
                            maxLength: 30
                        })}></input>
                            <input className='TextInput-userConfig' placeholder='Apellidos' type="text" {...register('apellidos', {
                            required: true,
                            maxLength: 30
                        })}></input>
                        </div>
                        <div className='box3-userconfig'>
                            <input className='TextInput2-userConfig' placeholder='Correo' {...register('email', {
                            required: true,
                            maxLength: 30
                        })}></input>
                        </div>
                        <div className='box3-userconfig'>
                            <input className='TextInput2-userConfig' placeholder='Contraseña' {...register('contrasena', {
                            required: true,
                            maxLength: 30
                        })}></input>
                        </div>
                        <div className='box3-userconfig'>
                            <input className='TextInput2-userConfig' placeholder='Confirmar Contraseña' type="password"></input>
                        </div>
                        <div className='submitForm-userConfig'>
                            <input type="submit" value="Aplicar cambios" className='input-button-userConfig'></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default UsuarioConfiguracion;
