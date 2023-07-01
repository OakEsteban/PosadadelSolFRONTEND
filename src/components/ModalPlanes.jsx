import React from "react";
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/ModalPlanes.css'

const ModalPlanes =({children,estado,cambiarEstado,titulo}) => {
    return (
        <>
            {estado &&
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <TituloEncabezado>
                                <h1>{titulo}</h1>
                            </TituloEncabezado>
                        </EncabezadoModal>
                        <BotonCerrar onClick={() => cambiarEstado(false)}>
                            <CloseIcon/>
                        </BotonCerrar>
                        {children}
                    </ContenedorModal>
                </Overlay>
            }
        </>
    );
}

export default ModalPlanes;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    positon: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    padding-left: 300px;
`;

const ContenedorModal = styled.div`
    width: 500px;
    height: 689px;
    margin-top: 50px;
    min-height: 100px;
    background: white;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba (100,100,111,0.2) 0px 7px 29px 0px;
    padding: 0;
    align-items: center;
    justify-content: center;
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #883C77;
    background: white;
    border-bottom: 2.5px solid ;
`;

const BotonCerrar = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #B63C47;

    &:hover{
        background: #883C77;
        color: #FFFF4C;
    }
    
`;

const TituloEncabezado = styled.h1`
    margin-top: 13px;
    margin-left: 13px;
    margin-bottom: 0px;
`;