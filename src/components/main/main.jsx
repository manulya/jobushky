import React from "react";
import styled from "styled-components";
import main1 from "../../img/main1.png";
import main2 from "../../img/main2.png";
import search from "../../img/Search.png";
import filter from "../../img/filter.png";
import Header from "../header.jsx";
import Footer from "../Footer/footer.jsx";
import { NavLink } from "react-router-dom";
import Search_main from "../search_main/search_main";
import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-ui-kit/js/mdb.min.js';
import { Button } from "bootstrap";
import { CATALOG_ROUTE } from "../../utils/consts";
import  { ChartPie } from "../pieChart";


export const Main = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <TextH1>Найдите работу прямо сейчас!</TextH1>
        <NavLink to={CATALOG_ROUTE}><CatalogBtn>Перейти в каталог</CatalogBtn></NavLink>
        <MainImg1 src={main1} />
        <ChartWrapper>
        <ChartPie/>
        </ChartWrapper>
      </MainContent>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`;
const MainImg1 = styled.img`
  /* position: absolute;
  width: 507px;
  height: 500px;
  left: 60%;
  top: 259px;
  background: url(.png); */
  grid-column: 2 / 3;
`;
const TextH1 = styled.text`
  grid-column: 1 / span 2;
  margin-bottom: 20px;
  margin-top: 5vh;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 20px;
  color: #000000;
`;
const CatalogBtn = styled.button`
grid-column: 1 /span 2;
position: relative;
  justify-self: center;
align-items: center;
top: -100px;
   background-color: #9c27b0;
  background-image: linear-gradient(to bottom, #9c27b0, #7b1fa2);
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color:  #f2eefa;
}
`
const ChartWrapper = styled.div`
  grid-column: 1 / span 2;
  position: relative;
  justify-self: center;
  align-items: center;
  top: -50%;  
   left:-23%;
`;