import styled from "styled-components";
import {
  FaRegLightbulb,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <FaRegLightbulb />
        <h1>
          <strong>GR</strong>ILU
        </h1>
      </Logo>
      <div className="contact">
        <ContactIconHolder
          onClick={() => {
            window.open("https://www.facebook.com/griluufal/", "_blank");
          }}
        >
          <FaFacebookF />
        </ContactIconHolder>

        <ContactIconHolder
          onClick={() => {
            window.open("https://twitter.com/GRILUUFAL?s=08", "_blank");
          }}
        >
          <FaTwitter />
        </ContactIconHolder>

        <ContactIconHolder
          onClick={() => {
            window.open("mailtogrilu@ctec.ufal.br", "_blank");
          }}
        >
          <MdEmail />
        </ContactIconHolder>

        <ContactIconHolder
          onClick={() => {
            window.open("https://www.youtube.com/channel/UCpiqrkStZCE4M544501aaig", "_blank");
          }}
        >
          <FaYoutube />
        </ContactIconHolder>

        <ContactIconHolder
          onClick={() => {
            window.open("tel:(82)3214-1311", "_blank");
          }}
        >
          <FaPhone />
        </ContactIconHolder>
      </div>
      <div className="menu">
        <h1>MENU</h1>
        <IconHolder>
          <TfiMenu />
        </IconHolder>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  //background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  .contact {
    display: flex;
    justify-content: space-evenly;
    width: 23%;
    //background-color: green;
  }
  .menu {
    margin-right: 30px;
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    > h1 {
      color: white;
      margin-right: 10px;
      font-weight: 500;
    }
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

const ContactIconHolder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #161c26;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > svg {
    color: white;
    font-size: 25px;
    opacity: 0.5;
  }
`;

const IconHolder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: rgb(217, 217, 217, 0.23);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > svg {
    color: white;
    font-size: 25px;
  }
`;
