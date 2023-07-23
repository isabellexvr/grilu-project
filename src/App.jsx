import styled from "styled-components";
import * as Scroll from "react-scroll";
import { useRef } from "react";
import Header from "./components/Header";

function App() {
  let Link = Scroll.Link;
  let Element = Scroll.Element;
  let scrollSpy = Scroll.scrollSpy;

  console.log(scrollSpy);

  var observer = new IntersectionObserver(
    function (entries) {
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap
      if (entries[0].isIntersecting === true) {
        console.log("Element has just become visible in screen");
      }
    },
    { threshold: [0] }
  );

  let element = document.getElementById("1");

  if (element) {
    observer.observe(element);
  }

  return (
    <AppContainer>
      <Header />
      <LightElement>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1180"
          height="90%"
          viewBox="0 0 1180 1077"
          fill="none"
        >
          <path
            d="M610.5 -6.53579e-06L1179.5 -2.90379e-06L657.5 1077L0.500077 1077L610.5 -6.53579e-06Z"
            fill="#D9D9D9"
            fill-opacity="0.12"
          />
        </svg>
      </LightElement>

      <Element name="first">
        <div id="1" style={{ width: "100px", height: "100vh", color: "blue" }}>
          first
        </div>
      </Element>
      <Element name="second">
        <div id="2" style={{ width: "100px", height: "100vh", color: "blue" }}>
          iii
        </div>
      </Element>
      <Element name="3">
        <div id="3" style={{ width: "100px", height: "100vh", color: "blue" }}>
          3
        </div>
      </Element>
      <Element name="4">
        <div id="4" style={{ width: "100px", height: "100vh", color: "blue" }}>
          4
        </div>
      </Element>
      <Link hashSpy={true} to="first">
        BORA
      </Link>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: fit-content;
  width: 100%;
  background-color: #161c26;
  background: radial-gradient(
      94.2% 35.03% at 54.82% 43.66%,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #161c26;
`;

const LightElement = styled.div`
  position: absolute;
  top: 0;
  z-index: 0;
`;
