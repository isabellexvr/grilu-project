import styled from "styled-components";
import Cards from "./Cards";
import {AiOutlineDesktop} from "react-icons/ai"

const CARDS = [
  {
    name: "LUX",
    description: "Simule o desempenho da iluminação num ambiente.",
    color: "#e3c17c",
  },
  { name: "MASK", description: "Crie máscaras de sombra.", color: "#977944" },
  {
    name: "SOLAR",
    description: "Obtenha informações precisas sobre geometria solar.",
    color: "#7389ac",
  },
  {
    name: "FAC",
    description: "Entenda melhor sobre insolação em fachadas.",
    color: "white",
  },
];

export default function Desktop({ setShowModal, setModalInfo }) {
  return (
    <DesktopContainer>
      <Title>
        SOFTWARES
        {"\n"}
        <strong><AiOutlineDesktop/>&nbsp;DESKTOP</strong>
      </Title>
      <div className="cards">
        {CARDS.map((c, i) => (
          <Cards
            key={i}
            background={c.color}
            font={c.color}
            description={c.description}
            name={c.name}
            setShowModal={setShowModal}
            index={i}
            setModalInfo={setModalInfo}
          />
        ))}
      </div>
    </DesktopContainer>
  );
}

const DesktopContainer = styled.div`
  height: 100vh;
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
`;

const Title = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 3.5vw;
  font-style: normal;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: normal;

  > strong {
    font-weight: 700;
    display: flex;
    align-items: center;
    >svg{
      color: #ae8034;
    }
  }
`;
