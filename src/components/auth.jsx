import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../img/logo.svg";
import pct from "../img/log.svg";
import msg from "../img/message.svg";
import pdlck from "../img/padlock.svg";
import user from "../img/user.svg";
import { LOGIN_ROUTE } from "../utils/consts";
import LogIn from "./login/login";
import SignUp from "./signup/signup";

const Auth = () => {
  const location = useLocation();

  const isLogin = location.pathname === LOGIN_ROUTE;
  return <div>{isLogin ? <LogIn /> : <SignUp />}</div>;
};

export default Auth;
