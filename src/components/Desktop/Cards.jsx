import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import { TbWorldCog } from "react-icons/tb";

export default function Cards({
  background,
  font,
  description,
  name,
  setShowModal,
  index,
  setModalInfo,
}) {
  return (
    <>
      <Card background={background}>
        <FiArrowUpRight
          onClick={() => {
            setModalInfo(index);
            setShowModal(true);
          }}
        />
        <CardHeader font={font}>
          <TbWorldCog />
          <h1>
            TROP<strong>{name}</strong>
          </h1>
        </CardHeader>
        <CardBottom>{description}</CardBottom>
      </Card>
    </>
  );
}

const CardHeader = styled.div`
  width: 65%;
  height: 15%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #161c26;
  color: ${(p) => p.font};
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
  background-color: ${(p) => p.background};
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
