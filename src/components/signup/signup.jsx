import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.svg";
import pct from "../../img/log.svg";
import msg from "../../img/message.svg";
import pdlck from "../../img/padlock.svg";
import user from "../../img/user.svg"

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
 /* position: absolute; */
width: 430px;
height: 666px;
left: 123px;
top: 132px;

`;
const FirstDiv = styled.div`
  /* position: absolute; */
width: 332px;
height: 121px;
left: 123px;
top: 132px;
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
 /* position: absolute; */
width: 430px;
height: 493px;
left: 123px;
top: 305px;
  
`;
const LogBtn = styled.input`
background: #0c21c1;
  border-radius: 32px;
  width: 429px;
  height: 53px;
  position: absolute;
  left: 124px;
  top: 700px;
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
  top: 320px;
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
const UsernameSection = styled.div`
 width: 429px;
  height: 64px;
  position: absolute;
  left: 124px;
  top: 400px;
`;
const UsernameText = styled.text`
  color: #999999;
  text-align: left;
  font: 500 13px "Poppins", sans-serif;
  left: 0px;
  top: 0px;

`;
const UsernameImg=styled.img`
width: 17px;
  height: 17px;
  position: absolute;
  left: 17px;
  top: 35px;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(-1, 1);
  overflow: hidden;

`
const UsernameInput=styled.input`
position:absolute;
border: none;
width: 429px;
margin-left: -12px;
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
top: 480px;
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
const PasswordConfSection = styled.div`
position: absolute;
width: 431px;
height: 64px;
left: 122px;
top: 560px;
`;
const PasswordConfText = styled.text`
 color: #999999;
  text-align: left;
  font: 500 13px "Poppins", sans-serif;
  
`;
const PasswordConfImg=styled.img`
width: 17px;
  height: 17px;
  position: absolute;
  left: 17px;
  top: 35px;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(-1, 1);
  overflow: hidden;
`
const PasswordConfInput=styled.input`
position:absolute;
border: none;
width: 429px;
border-bottom: 2px solid #000842;
  text-align: left;
  font: 400 16px "Poppins", sans-serif;  
background: transparent;
  top: 32px;
  margin-left: -60px;
`


const SignUp = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <WrapperLog>
        <FirstDiv>
          <Text1>Зарегестрироваться</Text1>
          <Text2>
            Если у вас уже есть аккаунт
            <br />
            Вы можете <NavLink to="/login"><LogSpan>Войти здесь</LogSpan></NavLink>
          </Text2>
        </FirstDiv>
        <SecondDiv>
          <EmailSection>
            <EmailText>Email</EmailText>
            <EmailImg src={msg} />
            <EmailInput placeholder="Введите адрес электронной почты "></EmailInput>
          </EmailSection>

          <UsernameSection>
            <UsernameText>Username</UsernameText>
            <UsernameImg src={user} />
            <UsernameInput placeholder="Введите имя пользователя"></UsernameInput>
          </UsernameSection>

          <PasswordSection>
            <PasswordText>Password</PasswordText>
            <PasswordImg src={pdlck} />
            <PasswordInput type="password" placeholder="Введите пароль"></PasswordInput>
          </PasswordSection>

          <PasswordConfSection>
            <PasswordConfText>Confirm Password</PasswordConfText>
            <PasswordConfImg src={pdlck} />
            <PasswordConfInput type="password" placeholder="Повторите пароль"></PasswordConfInput>
          </PasswordConfSection>
          
          
          <LogBtn type="submit" value="Зарегестрироваться"/>
        </SecondDiv>
      </WrapperLog>
      <WrapperImg>
        <LogImg src={pct} />
      </WrapperImg>
    </Wrapper>
  );
};

export default SignUp;



