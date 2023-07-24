import styled from "styled-components";
import about from "../../assets/about.jpg";

export default function About() {
  return (
    <AboutContainer>
      <Title>
        SOBRE O{"\n"}
        <strong>GRILU</strong>
      </Title>
      <AboutImage src={about} />
      <Do>
        <strong>O que fazemos?</strong>
        <li>investigações relacionadas à iluminação natural, à iluminação artificial e à eficiência energética na edificação</li>
        <li>desenvolvimento de programas de computador e aplicativos de celular (multiplataforma) de apoio ao ensino (graduação e pós-graduação), à pesquisa e ao projeto do conforto ambiental no ambiente construído.</li>
      </Do>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  padding-top: 130px;
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
  opacity: 0.7;
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
  }
  width: 32vw;
  position: absolute;
  bottom: 5vw;
  left: 15vw;

`;

const Foundation = styled.div`

`