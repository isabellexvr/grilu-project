import styled from "styled-components";
import { Link, Element } from "react-scroll";

export default function SideBarScroll({
  homeInView,
  desktopInView,
  mobileInView,
  aboutInView,
}) {
  return (
    <ScrollMenu>
      {homeInView ? (
        <Active>
          <div className="line"></div>
          <h1>
            <Link smooth duration={1000} delay={200} to="home">INÍCIO</Link>
          </h1>
        </Active>
      ) : (
        <Deactivated>
          <Link smooth duration={1000} delay={200} to="home">INÍCIO</Link>
        </Deactivated>
      )}
      {desktopInView ? (
        <Active>
          <div className="line"></div>
          <h1>
            <Link smooth duration={1000} delay={200}  to="desktop">DESKTOP</Link>
          </h1>
        </Active>
      ) : (
        <Deactivated>
          <Link smooth duration={1000} delay={200}  to="desktop">DESKTOP</Link>
        </Deactivated>
      )}
      {mobileInView ? (
        <Active>
          <div className="line"></div>
          <h1>
            <Link smooth duration={1000} delay={200}  to="mobile">MOBILE</Link>
          </h1>
        </Active>
      ) : (
        <Deactivated>
          <Link smooth duration={1000} delay={200}  to="mobile">MOBILE</Link>
        </Deactivated>
      )}
      {aboutInView ? (
        <Active>
          <div className="line"></div>
          <h1>
            <Link smooth duration={1000} delay={200}  to="about">SOBRE</Link>
          </h1>
        </Active>
      ) : (
        <Deactivated>
          <Link smooth duration={1000} delay={200}  to="about">SOBRE</Link>
        </Deactivated>
      )}
    </ScrollMenu>
  );
}

const ScrollMenu = styled.div`
  position: fixed;
  left: 3vw;
  bottom: 10vh;
  z-index: 2;

`;

const Active = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .line {
    width: clamp(18px, 1vw, 30px);
    height: 5px;
    background-color: #ae8034;
    margin-right: 10px;
  }
  > h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: clamp(16px, 1vw, 20px);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  @media(max-width: 450px) {
    margin-bottom: 20px;
  }
  margin-bottom: 37px;
`;

const Deactivated = styled.div`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.3);
  font-family: Montserrat;
  font-size: clamp(15px, 1vw, 18px);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media(max-width: 450px) {
    margin-bottom: 20px;
  }
  margin-bottom: 37px;
`;
