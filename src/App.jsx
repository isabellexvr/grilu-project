import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: homeRef, inView: homeInView } = useInView();
  const { ref: desktopRef, inView: desktopInView } = useInView();
  const { ref: mobileRef, inView: mobileInView } = useInView();
  const { ref: contactRef, inView: contactInView } = useInView();

  console.log(homeRef)
  
  return (
    <AppContainer>
      <Header />
      <ScrollMenu>
        {homeInView ? <Active>
          <div className="line"></div>
          <h1>INÍCIO</h1>
        </Active> : 
        <Deactivated>INÍCIO</Deactivated>
        }
                {desktopInView ? <Active>
          <div className="line"></div>
          <h1>DESKTOP</h1>
        </Active> : 
        <Deactivated>DESKTOP</Deactivated>
        }
                {mobileInView ? <Active>
          <div className="line"></div>
          <h1>MOBILE</h1>
        </Active> : 
        <Deactivated>MOBILE</Deactivated>
        }
                {contactInView ? <Active>
          <div className="line"></div>
          <h1>CONTATO</h1>
        </Active> : 
        <Deactivated>CONTATO</Deactivated>
        }
        
        
      </ScrollMenu>
      <div ref={homeRef} className="home">
        <Home  />
      </div>
      <div className="desktop">
        <Test ref={desktopRef} />
      </div>
      
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

const ScrollMenu = styled.div`
  position: fixed;
  left: 3vw;
  bottom: 10vh;
`;

const Active = styled.div`
  display: flex;
    align-items: center;
  .line {
    width: 30px;
    height: 5px;
    background-color: #ae8034;
    margin-right: 10px;
  }
  > h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  margin-bottom: 37px;
`;

const Deactivated = styled.div`
color: rgba(255, 255, 255, 0.30);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 37px;
`;

const Test = styled.div`
background-color: black;
width: 100vw;
height: 100vh;
`