import React, { useEffect, useState} from "react";
import styled from "styled-components";
import Job from "./job";
import {useSelector } from 'react-redux';
import { Spinner } from "react-bootstrap";

const Vacancy = (props) => {
  const {id,name, description, salary, city, companyid}=props.vacancy
  const key=props.key
  const [popUp, setPopUp] = useState(false);
  const companies=useSelector((state)=>state.companies.companies);
  const company = companies.filter((c)=>c.id===companyid)
 
  const clickHandler = () => {
    setPopUp(!popUp);
  };
  if(!companies || companies.length === 0 || !company || company.length === 0){
   return <Spinner/>
      }

  return (
    <VacancyContainer>
      <JobTitle>{name}</JobTitle>
      <CompanyName>{company[0].name}</CompanyName>
      <City>{city}</City>
      <JobButton onClick={() => clickHandler()}>Подробнее</JobButton>
       {popUp && <Job key={id} id={id} company={company[0]} setActive={setPopUp} />}
    </VacancyContainer>
  );
};

export default Vacancy;

const VacancyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 300px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    ),
    #f2f2f2;
  background-size: cover;
  background-position: center;
  padding: 30px;
  border-radius: 10px;
`;

const JobTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 5px;
`;

const CompanyName = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #333333;
`;
const JobButton = styled.button`
  background-color: #9c27b0;
  background-image: linear-gradient(to bottom, #9c27b0, #7b1fa2);
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 10px;
  :hover {
    background-color: #9c27b0;
    color: #f2eefa;
  }
`;

const Salary = styled.div`
  font-size: 16px;
  color: #333333;
  margin-top: 5px;
`;

const City = styled.div`
  font-size: 16px;
  color: #333333;
  margin-top: 5px;
`;
