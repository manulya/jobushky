import React from "react";
import styled from "styled-components";
import main1 from "../../img/main1.png";
import main2 from "../../img/main2.png";
import search from "../../img/Search.png";
import filter from "../../img/filter.png";
import HeaderS from "../Header/header.jsx";
import Footer from "../Footer/footer.jsx";
import { NavLink } from "react-router-dom";

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

const MainImg1 = styled.img`
  position: absolute;
  width: 507px;
  height: 500px;
  left: 852px;
  top: 259px;
  background: url(.png);
`;
const TextH1 = styled.text`
  position: absolute;
  width: 840px;
  height: 86px;
  left: 106px;
  top: 290px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 20px;
  color: #000000;
`;
export const SearchField = styled.textarea`
  position: absolute;
  width: 499px;
  height: 50px;
  left: 110px;
  top: 410px;
  background: #ffffff;
  border-radius: 20px;
  border: none;
  resize: none;
  flex-direction: row;
  text-align: start;

  &::placeholder {
    padding: 12px 15px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.58);
  }
`;
export const FindBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px;
  gap: 10px;
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 50px;
  left: 624px;
  top: 410px;
  border: none;
  background: #c75fbc;
  border-radius: 12px;
`;
export const FilterBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px;
  gap: 10px;
  border: none;
  position: absolute;
  width: 50px;
  height: 50px;
  left: 689px;
  top: 410px;
  cursor: pointer;
  background: #c75fbc;
  border-radius: 12px;
`;

export const PopularVacansii = styled.section`
  position: absolute;
height: 757px;
left: 8.4%;
right: 6.11%;
top: 1135px;
`;
const Main2 = styled.img`
position: absolute;
width: 510px;
height: 443px;
left: 52px;
top: 178px;
background: url(image.png);
mix-blend-mode: darken;
`;

const TextH2 = styled.text`
position: absolute;
width: 491px;
height: 117px;
left: 729px;
top: 28px;

font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 39px;
line-height: 48px;
/* or 123% */

letter-spacing: 0.8px;

color: #1C202B;
`;
export const SearchElse = styled.button`
  position: absolute;

  left: 106px;
  top: 509px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 18px;
  gap: 8px;
  cursor: pointer;
  width: 220px;
  height: 42px;
  text-decoration: none;
  background: #162a58;
  border-radius: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */

  text-align: center;
  border: none;
  color: #ccb0f3;
`;

export const InfoSection=styled.section`

width: 663px;
height: 213px;
left: 110px;
top: 861px;
`
export const TextH22=styled.text`
  position: absolute;
width: 633px;
height: 49px;
left: 140px;
top: 861px;

font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 20px;
/* or 50% */


color: #000000;

`

const Exmpl=styled.section`

width: 586px;
height: 124px;
left: 110px;
top: 950px;
`
export const T11=styled.text`
position: absolute;
width: 198px;
height: 122px;
left: calc(50% - 198px/2 - 511px);
top: calc(50% - 122px/2 - 45.5px);

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 20px;
/* or 67% */
margin-top: 20px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
`
export const T22=styled.text`
position: absolute;
width: 198px;
height: 122px;
left: calc(50% - 198px/2 - 316px);
top: calc(50% - 122px/2 - 46.5px);

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 20px;
/* or 67% */
margin-top: 20px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
`

export const T33=styled.text`
position: absolute;
width: 198px;
height: 122px;
left: calc(50% - 198px/2 - 123px);
top: calc(50% - 122px/2 - 47.5px);

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 20px;
/* or 67% */
margin-top: 20px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
`
export const T1=styled.text`
position: absolute;
width: 121px;
height: 52px;
left: calc(50% - 121px/2 - 512.5px);
top: calc(50% - 52px/2 - 58.5px);

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 20px;
/* or 67% */

display: flex;
align-items: center;
text-align: center;

color: #000000;
`
export const T2=styled.text`
position: absolute;
width: 121px;
height: 52px;
left: calc(50% - 190px/2 - 316px);
top: calc(50% - 52px/2 - 58.5px);

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 20px;
/* or 67% */

display: flex;
align-items: center;
text-align: center;
color: #000000;
`
export const T3=styled.text`
position: absolute;
width: 121px;
height: 52px;
left: calc(50% - 150px/2 - 123px);
top: calc(50% - 52px/2 - 58.5px);

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 20px;
/* or 67% */

display: flex;
align-items: center;
text-align: center;

color: #000000;
`

const Vacansii = styled.section`
position: absolute;
width: 362.28px;
height: 400px;
left: 730px;
top: 0px;

`;

const Item1 = styled.button`
 position: absolute;
height: 67px;
left: 0%;
right: 0%;
top: 260px;
border:none;
background: #EAF3FF;
border-radius: 8px;
`;
const Item2 = styled.button`
position: absolute;
height: 64px;
left: 0%;
right: 0%;
top: 376.95px;
border:none;
background: #FFF3EF;
border-radius: 8px;
`;
const Item3 = styled.button`
position: absolute;
height: 64px;
left: 0%;
right: 0%;
top: 489.98px;
border:none;
background: #FFF8E4;
border-radius: 8px;
`;

const Main = () => {
  return (
    
    <Wrapper>
      <HeaderS />
      <SearchSection>
        <MainImg1 src={main1} />
        <section>
          <TextH1>Найдите работу прямо сейчас!</TextH1>
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
        <NavLink to='/employer'><SearchElse>Я ищу сотрудника</SearchElse></NavLink>
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
        <TextH2>Наиболее популярные вакансии</TextH2>
        <Vacansii>
          <Item1>Программист</Item1>
          <Item2>Бухгалтер</Item2>
          <Item3>Экономист</Item3>
        </Vacansii>
        <Main2 src={main2} />
      </PopularVacansii>
      <Footer />
    </Wrapper>
  );
};

export default Main;
