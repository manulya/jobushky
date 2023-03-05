import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.svg";
import pct from "../../img/log.svg";
import msg from "../../img/message.svg";
import pdlck from "../../img/padlock.svg";
import google from "../../img/google.svg"

const Wrapper = styled.div`
width: 100%;
   background: radial-gradient(
        38.19% 38.19% at 28.75% 38.19%,
        rgba(3, 70, 242, 0.194) 0%,
        rgba(70, 110, 249, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    linear-gradient(0deg, rgba(211, 210, 245, 0.52), rgba(211, 210, 245, 0.52)),
    radial-gradient(
        51.25% 33.56% at 76.6% 47.45%,
        #e26bf5 0%,
        rgba(226, 107, 245, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        55.27% 55.27% at 25.76% 83.61%,
        rgba(255, 60, 212, 0.33) 0%,
        rgba(255, 60, 212, 0) 100%
      );
  height: 900px;
  position: relative;
  box-sizing: border-box;
`;

const Logo = styled.img`
  position: absolute;
  width: 292px;
  height: 78px;
  left: 124px;
  top: 46px;
`;
const WrapperImg = styled.div`
  position: absolute;
  width: 695px;
  height: 859px;
  left: 723px;
  top: 21px;

  background: #000842;
  border-radius: 15px;
`;
const LogImg = styled.img`
  position: relative;
  width: 492.65px;
  height: 521px;
  left: 120px;
  top: 85px;
`;
const WrapperLog = styled.div`
  width: 431px;
  height: 626.46px;
  position: static;
`;
const FirstDiv = styled.div`
  width: 308px;
  height: 139px;
  position: static;
`;
const Text1 = styled.text`
  position: absolute;
  width: 91px;
  height: 45px;
  left: 124px;
  top: 150px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: #000000;
`;
const Text2 = styled.text`
  position: absolute;
  width: 308px;
  height: 21px;
  left: 124px;
  top: 217px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height */
  color: #000000;
`;

const LogSpan = styled.span`
  color: #0c21c1;
`;
const SecondDiv = styled.form`
  width: 431px;
  height: 325px;
  position: static;
  
`;
const LogBtn = styled.input`
background: #0c21c1;
  border-radius: 32px;
  width: 429px;
  height: 53px;
  position: absolute;
  left: 124px;
  top: 595px;
  box-shadow: 0px 4px 26px 0px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  text-align: center;
  font: 500 17px "Poppins", sans-serif;
 `;
const EmailSection = styled.div`
 width: 429px;
  height: 64px;
  position: absolute;
  left: 124px;
  top: 323px;
`;
const EmailText = styled.text`
  color: #999999;
  text-align: left;
  font: 500 13px "Poppins", sans-serif;
  left: 0px;
  top: 0px;

`;
const EmailImg=styled.img`
width: 17px;
  height: 17px;
  position: absolute;
  left: 17px;
  top: 35px;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(-1, 1);
  overflow: hidden;

`
const EmailInput=styled.input`
position:absolute;
border: none;
width: 429px;
margin-left: 10px;
border-bottom: 2px solid #000842;
  text-align: left;
  font: 400 16px "Poppins", sans-serif;  
background: transparent;
  top: 32px;
`
const PasswordSection = styled.div`
position: absolute;
width: 431px;
height: 64px;
left: 122px;
top: 436px;
`;
const PasswordText = styled.text`
 color: #999999;
  text-align: left;
  font: 500 13px "Poppins", sans-serif;
  
`;
const PasswordImg=styled.img`
width: 17px;
  height: 17px;
  position: absolute;
  left: 17px;
  top: 35px;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(-1, 1);
  overflow: hidden;
`
const PasswordInput=styled.input`
position:absolute;
border: none;
width: 429px;
border-bottom: 2px solid #000842;
  text-align: left;
  font: 400 16px "Poppins", sans-serif;  
background: transparent;
  top: 32px;
  margin-left: -10px;
`

const Check=styled.input`
position: absolute;
  left: 124px;
  top: 520px;
`
const Label=styled.label`
  position: absolute;

left: 149px;
top: 522px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
color: #000000;

`

const LogIn = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <WrapperLog>
        <FirstDiv>
          <Text1>Войти</Text1>
          <Text2>
            Если у вас ещё нету аккаунта
            <br />
            Вы можете <NavLink to="/signup"><LogSpan>Зарегестрироваться здесь</LogSpan></NavLink>
          </Text2>
        </FirstDiv>
        <SecondDiv>
          <EmailSection>
            <EmailText>Email</EmailText>
            <EmailImg src={msg} />
            <EmailInput placeholder="Введите адрес электронной почты "></EmailInput>

          </EmailSection>
          <PasswordSection>
            <PasswordText>Password</PasswordText>
            <PasswordImg src={pdlck} />
            <PasswordInput type="password" placeholder="Введите пароль"></PasswordInput>

          </PasswordSection>
            <Check type="checkbox" id="Remember"/>
            <Label for="Remember">Запомните меня</Label>
          <LogBtn type="submit" value="Войти"/>
        </SecondDiv>
      </WrapperLog>
      <WrapperImg>
        <LogImg src={pct} />
      </WrapperImg>
    </Wrapper>
  );
};

export default LogIn;



