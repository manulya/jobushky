import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  ADMIN_ROUTE,
  REQUEST_ROUTE,
} from "../utils/consts";
import { setIsAdminAC, setIsAuthAC } from "../store/userReducer";

const Header = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(setIsAuthAC(false));
    dispatch(setIsAdminAC(false));
    localStorage.clear();
    console.log("exit", localStorage);
  };
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <NavLink
          to={MAIN_ROUTE}
          style={{ color: "#ecc7f9", textDecoration: "none" }}
        >
          Bookory
        </NavLink>
      </HeaderLogo>
      {users.isAuth ? (
        <section>
          {users.isAdmin ? (
            <NavLink to={ADMIN_ROUTE}>
              <Admin>Админ</Admin>
            </NavLink>
          ) : (
            <NavLink to={REQUEST_ROUTE}>
              <Request>Корзина</Request>
            </NavLink>
          )}
          <NavLink to={LOGIN_ROUTE}>
            <Signin onClick={() => logOut()}>Выйти</Signin>
          </NavLink>
        </section>
      ) : (
        <section>
          <Signin onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Signin>
        </section>
      )}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 10;
  background-color: #7ba8d2a9;
  background-image: linear-gradient(to bottom, #2769b0, #a1bcd5);
`;

const HeaderLogo = styled.h1`
  font-size: 40px;
  color: #3f0f4b !important;
  font-weight: 800px;
  font-family: "Roboto";
`;

const Signin = styled.button`
  background-color: #9c27b0;
  background-image: linear-gradient(to bottom, #9c27b0, #7b1fa2);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-right: 0.5rem;
  :hover {
    background-color: #f2eefa;
  }
`;
const Admin = styled(Signin)``;
const Request = styled(Admin)``;
