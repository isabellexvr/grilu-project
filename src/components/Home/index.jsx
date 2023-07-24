import styled from "styled-components";
import { Element, Link } from "react-scroll";
import lamp from "../../assets/lamp.png";

export default function Home() {
  return (
    <Element name="home-sect" id="home-sect">
      <HomeContainer>
        <LightElement>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1180"
            height="100%"
            viewBox="0 0 1180 1077"
            fill="none"
          >
            <path
              d="M610.5 -6.53579e-06L1179.5 -2.90379e-06L657.5 1077L0.500077 1077L610.5 -6.53579e-06Z"
              fill="#D9D9D9"
              fillOpacity="0.12"
            />
          </svg>
        </LightElement>
        <div className="presentation">
          <Presentation>
            CONHEÇA OS
            {"\n"}
            <strong>SOFTWARES</strong>
            <button>
              <Link smooth duration={1000} delay={200}  to="desktop">CONHEÇA</Link>
            </button>
          </Presentation>
        </div>
        <Lamp src={lamp} />
      </HomeContainer>
    </Element>
  );
}

const HomeContainer = styled.div`
    @media(max-width: 450px) {
      padding-top: 80px;
      height: 100vh;
      align-items: initial;
  }
  padding-top: 80px;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  .presentation {
    width: 45%;
  }
`;

const LightElement = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  @media(max-width: 450px) {
    display: none;
  }
`;

const Lamp = styled.img`
    @media(max-width: 450px) {
      width: 70vw;
      top: 35vw;
      left: 30vw;
      
  }
  transform: scaleX(-1);
  width: 48vw;
  position: absolute;
  bottom: 0;
  left: 45%;
  object-fit: cover;
  opacity: 0.6;
`;

const Presentation = styled.h1`
//background-color: red;
@media(max-width: 450px) {
      padding-top: 220px;
      margin-left: 22px;
  width: 120%;
  }
  color: #fff;
  text-align: right;
  font-family: Montserrat;
  font-size: clamp(25px, 4vw,50px);
  font-style: normal;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 70px;
  > strong {
    font-weight: 700;
  }
  > button {
    @media(max-width: 450px) {
      margin-top: 10px;
  }
    all: unset;
    border-radius: 13px;
    background: #ae8034;
    width: clamp(80px,10vw,500px);
    height: clamp(32px, 3vw, 100px);
    color: #1e1e1e;
    font-family: Montserrat;
    font-size: clamp(13px, 1.3vw, 50px);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    z-index: 2;
    cursor: pointer;
  }
`;
