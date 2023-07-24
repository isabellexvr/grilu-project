import styled from "styled-components";
import about from "../../assets/about.jpg";
import {FaRegLightbulb} from "react-icons/fa";

export default function About() {
  return (
    <AboutContainer>
      <Title>
        SOBRE O{"\n"}
        <Logo>
        <FaRegLightbulb />
        <h1>
          <strong>GR</strong>ILU
        </h1>
      </Logo>
      </Title>
      <AboutImage src={about} />
      <Do>
        <strong>O que fazemos?</strong>
        {"\n"}
        <li>
          Investigações relacionadas à iluminação natural, à iluminação
          artificial e à eficiência energética na edificação
        </li>
        <li>
          Desenvolvimento de programas de computador e aplicativos de celular
          (multiplataforma) de apoio ao ensino (graduação e pós-graduação), à
          pesquisa e ao projeto do conforto ambiental no ambiente construído.
        </li>
      </Do>
      <Foundation>
        Desde 2004,
        no
        <strong>CTEC-UFAL</strong>
      </Foundation>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  height: 105vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .cards {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 70%;
  }
  position: relative;
`;

const Title = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 55px;
  font-style: normal;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: normal;
  > strong {
    font-weight: 700;
  }
`;

const AboutImage = styled.img`
  object-fit: cover;
  width: 40%;
  border-radius: 25px;
  opacity: 0.5;
`;

const Do = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  > strong {
    color: #fff;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;
  }
  width: 32vw;
  position: absolute;
  bottom: 5vw;
  left: 18vw;
`;

const Foundation = styled.div`
  position: absolute;
  right: 10vw;
  bottom: 15vw;
  color: #181e28;
  font-family: Montserrat;
  font-size: 55px;
  font-style: normal;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: normal;
  font-weight: 600;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
             1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  > strong {
    font-weight: 800;
  }
`;

const Logo = styled.div`
  color: #fff;
  font-family: Tsukimi Rounded;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  margin-left: 30px;
  width: 23%;
  > svg {
    font-size: 30px;
    color: #e3c17c;
  }
  > h1 {
    > strong {
      color: #ae8034;
    }
  }
`;