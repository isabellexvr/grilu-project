import styled from "styled-components";
import { VscLightbulbAutofix } from "react-icons/vsc";
import { RxShadowInner } from "react-icons/rx";
import { BsFillSunFill } from "react-icons/bs";
import {GiBrickWall} from "react-icons/gi"
const INFOS = [
  {
    icon: <VscLightbulbAutofix />,
    title: "TropLux",
    description:
      "O TropLux é um programa que permite simular o desempenho da iluminação natural no ambiente construído.\n É uma ferramenta para projetistas e pesquisadores na área de conforto ambiental.",
    details: [
      "avaliação de desempenho luminoso de ambientes",
      "auxílio na definição das aberturas em projetos de arquitetônicos",
      "pesquisas de avaliação de desempenho de elementos arquitetônicos",
      "avaliação da disponibilidade de luz natural no ambiente urbano",
    ],
    color: "#e3c17c",
  },
  {
    icon: <RxShadowInner />,
    title: "TropMask",
    description:
      "O TropMask é uma ferramenta para quem precisa criar máscaras de sombra para estudos de insolação no ambiente construído.\n É útil tanto no ensino como no projeto de protetores solares e estudo de insolação de fachadas.",
    details: [
      "Geração de máscara de sombra a partir de modelo criado no programa ou importado do TropLux.",
      "Variação da geometria do modelo e da orientação das fachadas.",
      "Desenho da máscara de sombra em divisões de céu de 145, 385, 1441, 1891, 2791, 4141, 9721, 32581, 259261",
      "Possibilidade de sobreposição da máscara de sombra ao diagrama solar do local em estudo",
      "Bilíngue (inglês – português)",
      "Permite escolha da cidade por um menu padrão ou definição da localização geográfica.",
    ],
    color: "#977944",
  },
  {
    icon: <BsFillSunFill />,
    title: "TropSolar",
    description:
      "O TropSolar permite acessar informações sobre geometria solar de forma precisa e direta, para qualquer região do planeta.",
    details: [
      "Cálculo do Azimute Solar e Altura Solar para qualquer dia, hora e local do planeta.",
      "Cálculo reverso, i.e., dados a altura solar e o azimute do sol o programa retorna dias e horas (solar ou legal) para uma determinada localidade.",
      "Conversão de hora solar para hora legal e vice-versa",
      "Bilíngue (inglês – português)",
      "Permite escolha da cidade por um menu padrão ou definição da localização geográfica",
      "Cálculo dos crepúsculos civil, náutico e astronômico. Todos com hora legal e solar.",
      "Cálculos do nascer, pôr-do-sol e duração do dia, tanto astronômico, como levando em conta o efeito da refração e das dimensões do Sol.",
      "Impressão de: * Gráficos da equação do tempo, com suas componentes. * Diagrama solar * Transferidor em projeção estereográfica * Gráficos da duração do dia astronômico, nascer e pôr-do-sol. * Analema.",
    ],
    color: "#7389ac",
  },
  {
    icon: <GiBrickWall />,
    title: "TropFac",
    description:
      "O TropFac é uma ferramenta para o estudo da insolação em fachadas. É útil para o ensino, pesquisa e projeto arquitetônico.",
    details: [
      "Calculo dos períodos de insolação diário, mensal e anual.",
      "Variação da geometria do terreno e da orientação das fachadas.",
      "Diagrama solar com indicação da orientação das fachadas",
      "Bilíngue (inglês – português)",
      "Permite escolha da cidade por um menu padrão ou definição da localização geográfica",
      "Impressão de: * Relatório de insolação mensal, diária e anual. * Diagrama Solar com orientação das fachadas.",
    ],
    color: "white",
  },
];

export default function Modal({ onClose, modalInfo }) {
  console.log(modalInfo);
  return (
    <>
      <ModalContainer>
        <Header fontColor={INFOS[modalInfo].color}>
          {INFOS[modalInfo].icon}
          <h1>{INFOS[modalInfo].title}</h1>

        </Header>

        <Infos fontColor={INFOS[modalInfo].color}>
          <h2>{INFOS[modalInfo].description}</h2>
          <h3>Detalhes:</h3>
          <ul>
            {INFOS[modalInfo].details.map((d, i) => (
              <li key={i}>{i+1}. {d}</li>
            ))}
          </ul>
        </Infos>
        <Options color={INFOS[modalInfo].color}>
                <button onClick={onClose}>
                    Talvez Mais Tarde
                </button>
                <button>
                    Como Instalar?
                </button>
        </Options>
      </ModalContainer>
      <NotModal onClick={onClose}></NotModal>
    </>
  );
}

const NotModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */

  transform: translate(-50%, -50%);
  width: 32vw;
  height: fit-content;
  border-radius: 25px;
  background-color: #181e28;
  z-index: 6;
  padding: 3%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
    align-items: center;    
    justify-content: center;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 25px;
  color: ${(p) => p.fontColor};
  margin-bottom: 40px;
  >svg{
    margin-right: 15px;
  }
`;

const Infos = styled.div`
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  > h2 {
    margin-bottom: 20px;

    font-weight: 600;
  }
  >h3{
    font-weight: 600;
    color: ${(p) => p.fontColor};
    margin-bottom: 13px;
  }
  >ul{
    >li{
        margin-bottom: 5px;
    }
  }
  
`;

const Options = styled.div`
width: 90%;
margin-top: 20px;
display: flex;
justify-content: space-around;
color: #977944;
font-family: Montserrat;
font-weight: 700;
cursor: pointer;

>button{
    all: unset;
    height: 40px;
width: 150px;
display: flex;
justify-content: center;
align-items: center;    
border-radius: 10px;

}
>button:first-child{
    
}
>button:last-child{
    background-color: #E3C17C;
    
}
`