import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";
import pct from "../../img/log.svg";
import msg from "../../img/message.svg";
import pdlck from "../../img/padlock.svg";
import google from "../../img/google.svg";
import {
  CATALOG_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../utils/consts";
import { login } from "../../http/userAPI";
import { useDispatch } from "react-redux";
import { addUserAC, setIsAdminAC, setIsAuthAC } from "../../store/userReducer";
import DOMPurify from "dompurify";
import Header from "../header";

const LogIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const click = async (event) => {
    event.preventDefault();
    try {
      const sanitizedEmail = DOMPurify.sanitize(email);
      const sanitizedPassword = DOMPurify.sanitize(password);
      const user = await login(sanitizedEmail, sanitizedPassword);
      dispatch(setIsAuthAC(true));
      if (user.role === "ADMIN") {
        dispatch(setIsAdminAC(true));
      }
      navigate(CATALOG_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <Header/>
      <WrapperLog>
        <FirstDiv>
          <Text1>Войти</Text1>
          <Text2>
            Если у вас ещё нету аккаунта
            <br />
            Вы можете
            <NavLink to={REGISTRATION_ROUTE}>
              <LogSpan>Зарегестрироваться здесь</LogSpan>
            </NavLink>
          </Text2>
        </FirstDiv>
        <SecondDiv>
          <EmailSection>
            <EmailText>Email</EmailText>
            <EmailImg src={msg} />
            <EmailInput
              placeholder="Введите адрес электронной почты "
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></EmailInput>
          </EmailSection>
          <PasswordSection>
            <PasswordText>Password</PasswordText>
            <PasswordImg src={pdlck} />
            <PasswordInput
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></PasswordInput>
          </PasswordSection>
          <LogBtn type="submit" onClick={(event) => click(event)}>
            Войти
          </LogBtn>
        </SecondDiv>
      </WrapperLog>
      <WrapperImg>
        <LogImg src={pct} />
      </WrapperImg>
    </div>
  );
};

export default LogIn;

const Logo = styled.img`
  position: absolute;
  width: 292px;
  height: 78px;
  left: 124px;
  top: 46px;
`;
const WrapperImg = styled.div`
  position: absolute;
  width: 495px;
  height: 559px;
  left: 823px;
  top: 121px;

  background: #000842;
  border-radius: 15px;
`;
const LogImg = styled.img`
  position: relative;
  width: 462.65px;
  height: 521px;
  left:20px;
  top: 0px;
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
const LogBtn = styled.button`
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
const EmailImg = styled.img`
  width: 17px;
  height: 17px;
  position: absolute;
  left: 17px;
  top: 35px;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(-1, 1);
  overflow: hidden;
`;
const EmailInput = styled.input`
  position: absolute;
  border: none;
  width: 429px;
  margin-left: 10px;
  border-bottom: 2px solid #000842;
  text-align: left;
  font: 400 16px "Poppins", sans-serif;
  background: transparent;
  top: 32px;
  outline: none;
`;
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
const PasswordImg = styled.img`
  width: 17px;
  height: 17px;
  position: absolute;
  left: 17px;
  top: 35px;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(-1, 1);
  overflow: hidden;
`;
const PasswordInput = styled.input`
  position: absolute;
  border: none;
  width: 429px;
  border-bottom: 2px solid #000842;
  text-align: left;
  font: 400 16px "Poppins", sans-serif;
  background: transparent;
  top: 32px;
  margin-left: -10px;
  outline: none;
`;
