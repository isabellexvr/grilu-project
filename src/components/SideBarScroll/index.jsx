import styled from "styled-components";
import { Link, Element } from "react-scroll";

export default function SideBarScroll({
  homeInView,
  desktopInView,
  mobileInView,
  contactInView,
}) {
  return (
    <ScrollMenu>
      {homeInView ? (
        <Active>
          <div className="line"></div>
          <h1>
            <Link to="home">INÍCIO</Link>
          </h1>
        </Active>
      ) : (
        <Deactivated>
          <Link to="home">INÍCIO</Link>
        </Deactivated>
      )}
      {desktopInView ? (
        <Active>
          <div className="line"></div>
          <h1>
            <Link to="desktop">DESKTOP</Link>
          </h1>
        </Active>
      ) : (
        <Deactivated>
          <Link to="desktop">DESKTOP</Link>
        </Deactivated>
      )}
      {mobileInView ? (
        <Active>
          <div className="line"></div>
          <h1>MOBILE</h1>
        </Active>
      ) : (
        <Deactivated>MOBILE</Deactivated>
      )}
      {contactInView ? (
        <Active>
          <div className="line"></div>
          <h1>CONTATO</h1>
        </Active>
      ) : (
        <Deactivated>CONTATO</Deactivated>
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
  cursor: pointer;
  color: rgba(255, 255, 255, 0.3);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 37px;
`;