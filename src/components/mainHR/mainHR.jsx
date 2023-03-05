import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import premium_logo from '../../img/logo_premium.svg'
import mainHR1 from "../../img/mainHR1.svg"
import mainHR2 from '../../img/mainHR2.svg'
import styled from "styled-components";
import search from "../../img/Search.png";
import filter from "../../img/filter.png";
import {SearchField,FindBtn, FilterBtn, SearchElse, InfoSection,
TextH22,T1,T11,T2,T22,T3,T33,PopularVacansii} from "../main/main"

const MainImg1=styled.img`
 position: absolute;
  width: 507px;
  height: 500px;
  left: 852px;
  top: 259px;
  background: url(.png); 
`
const Exmpl=styled.div`
  width: 586px;
height: 124px;
left: 110px;
top: 950px;
`
const Main2=styled.img`
  position: absolute;
width: 510px;
height: 443px;
left: 52px;
top: 178px;
background: url(image.png);
mix-blend-mode: darken;
`
const Wrapper = styled.div`
  position: relative;
  width: 1519px;
  height: 2117px;
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
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`;

const SearchSection = styled.section`
  width: 1253px;
  height: 500px;
  left: 106px;
  top: 259px;
`;
const TextH1=styled.text`
position: absolute;
width: 1028px;
height: 59px;
left: 259px;
top: 200px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 59px;
color: #000000;

`
const TextH2=styled.text`
  position: absolute;
height: 192px;
left: 55.62%;
right: -2.83%;
top: 136px;
padding-bottom: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 39px;
line-height: 48px;
/* or 123% */

letter-spacing: 0.8px;

color: #1C202B;
`
const LogoPremium=styled.img`
position: absolute;
width: 458px;
height: 59px;
left: 708px;
top: 410px;

`

const mainHR=()=>{
    return(
<Wrapper>
      <Header/>
      <SearchSection>
        <MainImg1 src={mainHR1} />
        <section>
          <TextH1>Размесите вакансию на нашем сайте</TextH1>
          <SearchField
            type="search"
            placeholder="Профессия, должность или кoмпания"
          ></SearchField>
          <FindBtn>
            <img src={search} />
          </FindBtn>
          <FilterBtn>
            <img src={filter} />
          </FilterBtn>
        </section>
        <NavLink to='/employee'><SearchElse>Я ищу работу</SearchElse></NavLink>
         <InfoSection>
          <TextH22>В данный момент в нашей базе:</TextH22>
           <Exmpl>
          <T1>5000</T1><T11>соискателей</T11>
          <T2>10000</T2><T22>вакансий</T22>
          <T3>100</T3><T33>компаний</T33>
          </Exmpl> 
         </InfoSection>
      </SearchSection>
     
      <PopularVacansii>
        <TextH2>Продвиньте свою вакансию!<br/>Оформите подписку на</TextH2>
        <LogoPremium src={premium_logo}/>
        <Main2 src={mainHR2} />
      </PopularVacansii> 
      <Footer /> 
    </Wrapper> 
    );
}

export default mainHR;