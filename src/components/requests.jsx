import React, { useEffect, useState} from "react";
import styled from "styled-components";
import Job from "./job";
import {useDispatch, useSelector } from 'react-redux';
import { Spinner } from "react-bootstrap";
import { fetchJobs } from "../http/jobAPI";
import { fetchCompanies } from "../http/companyAPI";
import Header from "./header";
import { deleteRequest, fetchRequests } from "../http/requestAPI";

const Requests = () => {
    const userid=localStorage.getItem("userId");
    const requests=useSelector((state)=>state.requests.requests)
    const companies=useSelector((state)=>state.companies.companies);
    const jobs=useSelector((state)=>state.jobs.jobs);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchJobs());
        dispatch(fetchCompanies())
        dispatch(fetchRequests(userid))
      }, [dispatch, userid]);



const handleDelete=(id)=>{
    dispatch(deleteRequest(id))
}

  return (
    <>
    <Header/>
    {requests.length===0 ? (<Empty>Вы ещё не добавили ни одной заявки в избранное</Empty>):
   (<RequestsContainer>
        
      <RequestsHeader>Эти вакансии вы добавили в избранное</RequestsHeader>
      <JobsContainer>
        {requests.map((request, index) => {
          const job = jobs.find((job) => job.id == request.jobid);
          const company = companies.find(
            (company) => company.id == job.companyid
          );
          return (
            <VacancyContainer key={index}>
              <JobTitle>{job.name}</JobTitle>
              <CompanyName>{company.name}</CompanyName>
              <City>{job.city}</City>
              <JobButton onClick={() => handleDelete(request.id)}>Отправить заявку</JobButton><JobButton onClick={() => handleDelete(request.id)}>Удалить из избранного</JobButton>
            </VacancyContainer>
            
          );
        })}
      </JobsContainer>
    </RequestsContainer>)
}

    </>
  );
};

export default Requests;
const RequestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const RequestsHeader = styled.h2`
margin-top: 5%;
  font-size: 24px;
  text-align: center;
`;
const Empty = styled(RequestsHeader)`
    
`
const JobsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

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
  font-size: 1rem;
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
