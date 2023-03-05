import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg"
import {NavLink} from 'react-router-dom';

const HeaderWrapper=styled.section`
position: absolute;
width: 1440px;
height: 141px;
left: 0px;
top: 14px;
`

const Logo = styled.img`
position: absolute;
width: 297px;
height: 78px;
left: 44px;
top: 29px;


`
const Change=styled.section`
width: 333.75px;
height: 15.56px;
left: 578px;
top: 60px;
`
const Soisk=styled.button`
position: absolute;
width: 129.3px;
height: 15.56px;
left: 578px;
top: 60px;
cursor: pointer;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;
/* or 100% */
border: none;
background-color: rgba(0, 125, 215, 0);
text-align: center;
letter-spacing: 1.4px;
text-transform: uppercase;
color: #000000;
:visited{
  font-weight: 600;
}
`

const Rabot = styled.button`
position: absolute;
width: 150.3px;
height: 15.56px;
left: 761.45px;
top: 60px;
cursor: pointer;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;
/* or 100% */
border: none;
background-color: rgba(0, 125, 215, 0);
text-align: center;
letter-spacing: 1.4px;
text-transform: uppercase;
color: #000000;
:active{
  font-weight: 600;}
`

const Signin = styled.button`
position: absolute;
height: 51.11px;
left: 85.76%;
right: 4.11%;
top: 42px;
height: 51px;
background: #001192;
border-radius: 20px 10px;
border: none;
color:#D3D2F5;
cursor: pointer;
`

    

const Header=()=>{
    return (
      
        <HeaderWrapper>
        <Logo src={logo}/>
        <Change>
        <NavLink to='/'><Soisk>Соискателям</Soisk></NavLink>
          <NavLink to='/employer'><Rabot>Работодателям</Rabot></NavLink>
        </Change>
        <NavLink to='/login'><Signin>Войти</Signin></NavLink>
      </HeaderWrapper>
    );

}

export default Header;