import styled from "styled-components";
import Cards from "./Cards";

export default function Desktop() {
  return (
    <DesktopContainer>
      <Title>
        Softwares
        {"\n"}
        <strong>Desktop</strong>
      </Title>
      <Cards/>

    </DesktopContainer>
  );
}



const DesktopContainer = styled.div`
  padding-top: 130px;
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
  font-size: 60px;
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
