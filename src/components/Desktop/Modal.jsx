import styled from "styled-components";

export default function Modal({onClose}){
    return(
        <>
        <NotModal onClick={onClose} >

        </NotModal>
        <ModalContainer>

        </ModalContainer>
        </>
    )
}


const NotModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    z-index: 5;

`

const ModalContainer = styled.div`
position: fixed;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */

    transform: translate(-50%, -50%);
    width: 25vw;
    height: 25vw;
    border-radius: 25px;
    background-color: blue;
    z-index: 5;

`