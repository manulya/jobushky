import React from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "./Header/header";

export const Admin = () => {
const companies=useSelector((state)=>state.companies.companies)
  return (<div>
    <Header/>
    <Container>
       
      <CompanyInputForm>
        <h1>Добавление компании</h1>
        <CompanyNameInput placeholder="Введите название"></CompanyNameInput>
        <CompanyDecriptionInput placeholder="Введите описание"></CompanyDecriptionInput>
        <CompanyLogo placeholder="Выберите файл" type="file"></CompanyLogo>
        <CompanyButton type="submit">Добавить</CompanyButton>
      </CompanyInputForm>

      <JobInputForm>
        <h1>Добавление вакансии</h1>
        <JobTitle placeholder="Введите название"></JobTitle>
        <Description placeholder="Введите описание"></Description>
        <Dropdown>
            <Dropdown.Toggle style={{background:'white', color:'grey', borderRadius:"10px"}}>Выберите компанию</Dropdown.Toggle>
            <Dropdown.Menu >
            {companies.map(company=>
            <Dropdown.Item key={company.id}> 
            {company.companyName}
            </Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
        <Description placeholder="Введите зарплату" type="number"></Description>
        <Location placeholder="Введите город"></Location>
        <JobButton type="submit">Добавить</JobButton>
      </JobInputForm>
    </Container>
    </div>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CompanyInputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
`;
const CompanyNameInput = styled.input`
  margin: 20px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
`;
const CompanyDecriptionInput = styled(CompanyNameInput)``;
const CompanyLogo = styled.input`
  margin: 20px 0px 0px 115px;
`;

const CompanyButton = styled.button`
  margin-top: 30px;
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

const JobInputForm = styled(CompanyInputForm)``;
const JobTitle = styled(CompanyNameInput)``;
const Description = styled(CompanyNameInput)``;
const Location = styled(CompanyNameInput)``;
const JobButton = styled(CompanyButton)``;
