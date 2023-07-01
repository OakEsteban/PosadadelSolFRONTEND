import React from "react";
import styled from 'styled-components';

const ModalMensaje  = ({estado,cambiarEstado}) => {
    return (
        <>
            <Overlay>

            </Overlay>
        </>
    )
}

export default ModalMensaje;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    positon: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    padding-left: 300px;
    position: absolute;
`;