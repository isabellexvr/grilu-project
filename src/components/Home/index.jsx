import styled from "styled-components";
import { Element } from "react-scroll";
import lamp from "../../assets/lamp.png"

export default function Home() {
  return (
    <Element name="home-sect" id="home-sect">
      <HomeContainer >
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
          <strong>
            SOFTWARES 
          </strong>
          <button>
            CONHEÇA
          </button>
        </Presentation>
      
      </div>
        <Lamp src={lamp}/>
      </HomeContainer>
    </Element>
  );
}

const HomeContainer = styled.div`
  height: 110vh;
  width: 100%;
  //background-color: red;
  display: flex;
  align-items: center;
  position: relative;
  .presentation{
    width: 45%;
  }

`;

const LightElement = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
`;

const Lamp = styled.img`
    transform: scaleX(-1);
    width: 48vw;
    position: absolute;
    bottom: 0;
    left: 45%;
`

const Presentation = styled.h1`
color: #FFF;
text-align: right;
font-family: Montserrat;
font-size: 70px;
font-style: normal;
font-weight: 300;
display: flex;
flex-direction: column;
align-items: flex-end;
padding-top: 70px;
>strong{
font-weight: 700;
}
>button{
    all:unset;
    border-radius: 18px;
background: #AE8034;
width: 190px;
height: 56px;
color: #1E1E1E;
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
}
`