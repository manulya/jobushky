import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addJobAC, addSkillsAC } from '../store/jobReducer';
import { createJob } from '../http/jobAPI';
import { Alert, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { createSkill } from '../http/skillsAPI';

const AddSkills=()=> {
  const jobs = useSelector((state) => state.jobs.jobs);
  const companies = useSelector((state) => state.companies.companies);
  const [companyJob, setCompanyJob] = useState([]);
  const [companyId, setCompanyID] = useState(null)
  const [skillName, setSkillName] = useState("");
  const [description, setDescription] = useState("");
  const [skillJob, setSkillJob] = useState(null);
  const [showAlertJob, setShowAlertJob] = useState(false);
  const [companyName, setCompanyName] = useState("Выберите компанию");
  const [jobName, setJobName] = useState("Выберите вакансию");
  const dispatch = useDispatch();

  const handleCompanySelect = (company) => {
    console.log(company,jobs)
    setCompanyID(company.id);
    setCompanyName(company.name);
    setCompanyJob(jobs.filter((job) => job.companyid === company.id));
    console.log(companyJob)
  };

  const handleJobSelect = (job) => {
    setSkillJob(job.id);
    setJobName(job.name);
  };

  const clickSkills = (event) => {
    try {
      event.preventDefault();
      const data = {
        name: skillName,
        level: description,
       job_id:skillJob
      };
      const response = createSkill(data);
      dispatch(addSkillsAC(response));
      setShowAlertJob(true);
      } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <JobInputForm onSubmit={clickSkills} enctype="multipart/form-data">
          <h1>Добавление навыка</h1>
          <JobTitle
            placeholder="Введите навык"
            value={skillName}
            onChange={(event) => setSkillName(event.target.value)}
          ></JobTitle>
          <Description
            placeholder="Введите описание"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></Description>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                background: "white",
                color: "grey",
                borderRadius: "10px",
                marginBottom:"10px"
              }}
            >
              {companyName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {companies.map((company, index) => (
                <Dropdown.Item
                key={index}onClick={() => handleCompanySelect(company)}
                >
                  {company.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                background: "white",
                color: "grey",
                borderRadius: "10px",
              }}
            >
              {jobName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {companyJob.map((job, index) => (
                <Dropdown.Item
                key={index} onClick={() => handleJobSelect(job)}
                >
                  {job.name} 
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
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

export default AddSkills


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