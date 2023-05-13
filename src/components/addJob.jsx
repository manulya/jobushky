import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createJob } from '../http/jobAPI';
import { Alert, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

const AddJob=()=> {
  const companies = useSelector((state) => state.companies.companies);
  const [nameJob, setNameJob] = useState("");
  const [descriptionJob, setDescriptionJob] = useState("");
  const [companyJob, setCompanyJob] = useState(null);
  const [salaryJob, setSalaryJob] = useState("");
  const [cityJob, setCityJob] = useState("");
  const [showAlertJob, setShowAlertJob] = useState(false);
  const [companyName, setCompanyName] = useState("Выберите компанию");
  const dispatch = useDispatch();
  const clickJob = (event) => {
    try {
      event.preventDefault();
      const data = {
        name: nameJob,
        description: descriptionJob,
        salary: salaryJob,
        city: cityJob,
        companyId: companyJob,
      };
      const response = createJob(data);
      setShowAlertJob(true);
      setNameJob("");
      setDescriptionJob("");
      setCompanyJob(null);
      setSalaryJob("");
      setCityJob("");
      setCompanyName("Выберите компанию");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <JobInputForm onSubmit={clickJob} enctype="multipart/form-data">
          <h1>Добавление вакансии</h1>
          <JobTitle
            placeholder="Введите название"
            value={nameJob}
            onChange={(event) => setNameJob(event.target.value)}
          ></JobTitle>
          <Description
            placeholder="Введите описание"
            value={descriptionJob}
            onChange={(event) => setDescriptionJob(event.target.value)}
          ></Description>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                background: "white",
                color: "grey",
                borderRadius: "10px",
              }}
            >
              {companyName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {companies.map((company, index) => (
                <Dropdown.Item
                key={index} onClick={()=>{setCompanyJob(company.id)
                setCompanyName(company.name) 
              }}
                >
                  {company.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Description
            placeholder="Введите зарплату"
            type="number"
            value={salaryJob}
            onChange={(event) => setSalaryJob(event.target.value)}
          ></Description>
          <Location
            placeholder="Введите город"
            value={cityJob}
            onChange={(event) => setCityJob(event.target.value)}
          ></Location>

          <JobButton type="submit">Добавить</JobButton>
          {showAlertJob && (
            <Alert
              variant="success"
              onClose={() => setShowAlertJob(false)}
              dismissible
            >
              <Alert.Heading>Вакасия успешно добавлена!</Alert.Heading>
            </Alert>
          )}
        </JobInputForm>
  )
}

export default AddJob


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