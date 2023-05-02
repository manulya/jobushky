import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg"
import {NavLink, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_ROUTE, MAIN_ROUTE,ADMIN_ROUTE, REQUEST_ROUTE } from "../utils/consts";
import { setIsAdminAC, setIsAuthAC } from "../store/userReducer";


const Header=()=>{
  
const users=useSelector((state)=>state.users)
const dispatch = useDispatch()
const navigate=useNavigate()

const logOut =()=>{
  dispatch(setIsAuthAC(false))
  dispatch(setIsAdminAC(false))
  localStorage.clear();
  console.log("exit",localStorage);
}
    return (
      
        <HeaderWrapper>
       <NavLink to={MAIN_ROUTE}> <Logo src={logo}/></NavLink>
        {users.isAuth ?
        (<section>
          {users.isAdmin ?
        (<NavLink to={ADMIN_ROUTE}><Admin>Админ</Admin></NavLink>)
        :
        (<NavLink to={REQUEST_ROUTE}><Request>Заявки</Request></NavLink>)
          }
        <NavLink to={LOGIN_ROUTE}><Signin onClick={()=>logOut()}>Выйти</Signin></NavLink>
        </section>)
        :
        (<section>
        <Signin onClick={()=>navigate(LOGIN_ROUTE)}>Авторизация</Signin>
        </section>)
        }
      </HeaderWrapper>
    );

}

export default Header;


const HeaderWrapper=styled.section`
display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index:10;
`

const Logo = styled.img`
 position: absolute;
  top: 0.5%;
  left: 5rem;

`

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
    background-color:  #f2eefa;
}

`
const Admin = styled(Signin)`
 
`
const Request = styled(Admin)`
`

    