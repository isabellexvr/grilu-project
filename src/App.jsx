import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import { useInView } from "react-intersection-observer";
import { Element, Link } from "react-scroll";
import SideBarScroll from "./components/SideBarScroll";

function App() {
  const { ref: homeRef, inView: homeInView } = useInView();
  const { ref: desktopRef, inView: desktopInView } = useInView();
  const { ref: mobileRef, inView: mobileInView } = useInView();
  const { ref: contactRef, inView: contactInView } = useInView();

  return (
    <AppContainer>
      <Header />
      <SideBarScroll
        homeInView={homeInView}
        desktopInView={desktopInView}
        mobileInView={mobileInView}
        contactInView={contactInView}
      />
      <Element name="home">
        <div ref={homeRef} className="home">
          <Home />
        </div>
      </Element>

      <Element name="desktop">
        <div className="desktop">
          <Test ref={desktopRef} />
        </div>
      </Element>
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

const Test = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
`;
