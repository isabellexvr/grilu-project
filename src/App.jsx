import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import SideBarScroll from "./components/SideBarScroll";
import Desktop from "./components/Desktop";
import { createPortal } from 'react-dom';
import Modal from "./components/Desktop/Modal";
import { useState } from "react";

function App() {

  const modalNode = document.getElementById("modal");
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  const options = {
    threshold: 0.5
  }
  const { ref: homeRef, inView: homeInView } = useInView(options);
  const { ref: desktopRef, inView: desktopInView } = useInView(options);
  const { ref: mobileRef, inView: mobileInView } = useInView(options);
  const { ref: contactRef, inView: contactInView } = useInView(options);

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
        <div ref={desktopRef} className="desktop">
          <Desktop  setShowModal={setShowModal} setModalInfo={setModalInfo} />
        </div>
      </Element>
      {showModal && createPortal(<Modal onClose={() => setShowModal(false)} modalInfo={modalInfo} />, modalNode)}
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

