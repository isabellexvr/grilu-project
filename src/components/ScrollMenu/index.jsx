import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const ELEMENTS = ["INÍCIO", "DESKTOP", "MOBILE", "CONTATO"];

//importar o Link pra mandar pro Element
export default function ScrollMenu() {
  const { ref:firstRef, inView: firstInView } = useInView();
  const { ref:secondRef, inView:secondInView } = useInView();

  return (
    <>
    <div style={{height: "100vh", width: "50vw", backgroundColor: "blue"}} ref={firstRef} >{firstInView && "first is visible"}</div>
    <div style={{height: "100vh", width: "50vw", backgroundColor: "blue"}} ref={secondRef} >{secondInView && "second is visible"}</div>
    </>
    
  )

  

}

const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 10vh;
  display: flex;
`;
