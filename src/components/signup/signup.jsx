import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";
import pct from "../../img/log.svg";
import msg from "../../img/message.svg";
import pdlck from "../../img/padlock.svg";
import user from "../../img/user.svg";
import { CATALOG_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../../utils/consts";
import { registration } from "../../http/userAPI";
import { useDispatch } from "react-redux";
import { addUserAC, setIsAdminAC, setIsAuthAC } from "../../store/userReducer";
import DOMPurify from 'dompurify';

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const click = async () => {
  try {
      let data
      const sanitizedEmail = DOMPurify.sanitize(email);
      const sanitizedPassword = DOMPurify.sanitize(password);
      data = await registration(sanitizedEmail,sanitizedPassword);
      dispatch(addUserAC(data))
      dispatch(setIsAuthAC(true))
      if(data.role==='ADMIN'){
        dispatch(setIsAdminAC(true))
      }
      navigate(CATALOG_ROUTE)
  } catch (error) {
    alert(error.response.data.message)
  }
};



  const handlerForSubmit = (event) => {
    event.preventDefault();
    password !== confirmPassword
      ? setPasswordError("Пароли не совпадают")
      : click()
  };

  const handlePasswordChange = (event) => {
    setPasswordError("");
    setPassword(event.target.value);
  };
  const handlePasswordConfigChange = (event) => {
    setPasswordError("");
    setconfirmPassword(event.target.value);
  };

  return (
    <div>
      <NavLink to={MAIN_ROUTE}>
        <Logo src={logo} />
      </NavLink>
      <WrapperLog>
        <FirstDiv>
          <Text1>Зарегестрироваться</Text1>
          <Text2>
            Если у вас уже есть аккаунт
            <br />
            Вы можете{" "}
            <NavLink to={LOGIN_ROUTE}>
              <LogSpan>Войти здесь</LogSpan>
            </NavLink>
          </Text2>
        </FirstDiv>
        <SecondDiv onSubmit={handlerForSubmit}>
          <EmailSection>
            <EmailText>Email</EmailText>
            <EmailImg src={msg} />
            <EmailInput
              placeholder="Введите адрес электронной почты "
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></EmailInput>
          </EmailSection>

          <UsernameSection>
            <UsernameText>Username</UsernameText>
            <UsernameImg src={user} />
            <UsernameInput placeholder="Введите имя пользователя"></UsernameInput>
          </UsernameSection>

          <PasswordSection>
            <PasswordText>Password</PasswordText>
            <PasswordImg src={pdlck} />
            <PasswordInput
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(event) => handlePasswordChange(event)}
            />
          </PasswordSection>

          <PasswordConfSection>
            <PasswordConfText>Confirm Password</PasswordConfText>
            <PasswordConfImg src={pdlck} />
            <PasswordConfInput
              type="password"
              placeholder="Повторите пароль"
              onChange={(event) => handlePasswordConfigChange(event)}
            />
          </PasswordConfSection>
          {passwordError && <Error>{passwordError}</Error>}
          <LogBtn type="submit">
            Зарегистрироваться
          </LogBtn>
        </SecondDiv>
      </WrapperLog>
      <WrapperImg>
        <LogImg src={pct} />
      </WrapperImg>
    </div>
  );
};

export default SignUp;

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
const LogBtn = styled.button`
  background: #0c21c1;
  border-radius: 32px;
  width: 429px;
  height: 53px;
  position: absolute;
  left: 124px;
  top: 750px;
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
const UsernameImg = styled.img`
  width: 17px;
  height: 17px;
  position: absolute;
  left: 17px;
  top: 35px;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(-1, 1);
  overflow: hidden;
`;
const UsernameInput = styled.input`
  position: absolute;
  border: none;
  width: 429px;
  margin-left: -12px;
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
  top: 480px;
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
const PasswordConfImg = styled.img`
  width: 17px;
  height: 17px;
  position: absolute;
  left: 17px;
  top: 35px;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(-1, 1);
  overflow: hidden;
`;
const PasswordConfInput = styled.input`
  position: absolute;
  border: none;
  width: 429px;
  border-bottom: 2px solid #000842;
  text-align: left;
  font: 400 16px "Poppins", sans-serif;
  background: transparent;
  top: 32px;
  margin-left: -60px;
  outline: none;
`;

const Error = styled.div`
  position: absolute;
  top: 650px;
  left: 170px;
  padding: 5px;
  background: #febfbf;
  border-radius: 5px;
`;
