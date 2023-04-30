import React, { useEffect } from "react";
import Search_main from "./search_main/search_main";
import styled from "styled-components";
import Vacancy from "./Vacancy";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header/header";
import { fetchJobs, getAllJobs } from "../http/jobAPI";
import { addJobAC } from "../store/jobReducer";
import { fetchCompanyAC } from "../store/companyReducer";
import { fetchCompanies, getAllCompanies } from "../http/companyAPI";



const Catalog=()=>{  
  const vacancies =  useSelector((state)=>state.jobs.jobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchCompanies())
  }, []);
  
  return (
        <Container>
        <Header/>
        <SearchContainer>
          <Search_main/>
          </SearchContainer>
          <VacanciesContainer>
        {vacancies.map((vacancy, index) => {
           return <Vacancy key={index} vacancy={vacancy} />;
        })}
      </VacanciesContainer>
        </Container>
  );
}
export default Catalog;

const Container = styled.div`
    display: grid;
  grid-template-rows: auto 1fr 2fr;
  min-height: 120vh;
`;

const VacanciesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 50px;
  justify-items: center;
  margin-top: 20%;
`;
 const SearchContainer=styled.div`

  margin-top: -100px;
 `