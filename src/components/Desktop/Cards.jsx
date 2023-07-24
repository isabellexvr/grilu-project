import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import { TbWorldCog } from "react-icons/tb";
import { useState } from "react";
import { createPortal } from 'react-dom';
import Modal from "./Modal";

const CARDS = [
    {name: "LUX", description: "Simule o desempenho da iluminação num ambiente.", color: "#e3c17c"},
    {name: "MASK", description: "Crie máscaras de sombra.", color: "#977944"},
    {name: "SOLAR", description: "Obtenha informações precisas sobre geometria solar.", color: "#7389ac"},
    {name: "FAC", description: "Entenda melhor sobre insolação em fachadas.", color: "white"}
]

export default function Cards(){
    const modalNode = document.getElementById("modal");
    const [showModal, setShowModal] = useState(false);
    

    
    return (
        <>
        <div className="cards">
            {CARDS.map( (c,i) => 
            <Card key={i} background={c.color} >
                <FiArrowUpRight onClick={() => setShowModal(true)} />
                <CardHeader font={c.color} >
                    <TbWorldCog />
                    <h1>TROP<strong>{c.name}</strong></h1>
                </CardHeader>
                <CardBottom>{c.description}</CardBottom>
            </Card>
            )}
      </div>
      {showModal && createPortal(<Modal onClose={() => setShowModal(false)}/>, modalNode)}
        </>
    )
}

const CardHeader = styled.div`
  width: 65%;
  height: 15%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #161c26;
  color: ${p => p.font};
  > h1 {
    font-family: Tsukimi Rounded;
    font-weight: 800;
    font-size: 15px;
  }
  > svg {
    font-size: 22px;
  }
`;
const CardBottom = styled.h2`
  font-family: Montserrat;
  color: #161c26;
  font-size: 20px;
  font-weight: 700;
  width: 90%;
  text-align: right;
`;

const Card = styled.div`
  width: 15vw;
  height: 15vw;
  background-color: ${p => p.background};
  border-radius: 22px;
  margin-right: 2vw;
  margin-bottom: 2vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 15px;
  box-sizing: border-box;
  > svg {
    font-size: 47px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    color: e3c17c;
  }
  > img {
    width: 45px;
    object-fit: cover;
  }
  > h1 {
    pointer-events: none;
    font-family: Tsukimi Rounded;
    font-weight: 700;
    color: rgba(255, 208, 38, 1);
    margin-bottom: 15px;
    font-size: 20px;
    > strong {
      color: white;
    }
  }
`;