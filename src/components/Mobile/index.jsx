import styled from "styled-components";
import Cards from "../Desktop/Cards";
import {HiOutlineDevicePhoneMobile} from "react-icons/hi2"

export default function Mobile({ setShowModal, setModalInfo }) {
  return (
    <MobileContainer>
      <Title>
        APLICATIVO
        {"\n"}
        <strong><HiOutlineDevicePhoneMobile/>&nbsp;MOBILE</strong>
      </Title>
      <div className="card">
        <Cards
          background={"#7389ac"}
          font={"#7389ac"}
          description={"Dimensione janelas para captação da luz natural."}
          name={"FLD"}
          setShowModal={setShowModal}
          index={4}
          setModalInfo={setModalInfo}
        />
      </div>
    </MobileContainer>
  );
}

const MobileContainer = styled.div`
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
  font-size: 55px;
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
