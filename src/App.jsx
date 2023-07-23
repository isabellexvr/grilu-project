import styled from "styled-components";
import * as Scroll from "react-scroll";
import { useRef } from "react";

function App() {
  let Link = Scroll.Link;
  let Element = Scroll.Element;
  let scrollSpy = Scroll.scrollSpy

  console.log(scrollSpy)

  return (
    <>
      <Element name="first">
        <div style={{width: "100px", height: "100vh", color: "blue"}} >first</div>
      </Element>
      <Element name="second">
        <div style={{width: "100px", height: "100vh", color: "blue"}} >sec</div>
      </Element>
      <Element name="3">
        <div style={{width: "100px", height: "100vh", color: "blue"}} >3</div>
      </Element>
      <Element name="4">
        <div style={{width: "100px", height: "100vh", color: "blue"}} >4</div>
      </Element>
      <Link hashSpy={true} to="first">BORA</Link>
    </>
  );
}

export default App;
