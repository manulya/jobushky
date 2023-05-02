import React, { useState } from "react";
import { Alert, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "./header";
import { createCompany } from "../http/companyAPI";
import { addCompanyAC } from "../store/companyReducer";
import { addJobAC } from "../store/jobReducer";
import { createJob } from "../http/jobAPI";

export const Admin = () => {
  const companies = useSelector((state) => state.companies.companies);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [nameJob, setNameJob] = useState("");
  const [descriptionJob, setDescriptionJob] = useState("");
  const [companyJob, setCompanyJob] = useState(null);
  const [salaryJob, setSalaryJob] = useState("");
  const [cityJob, setCityJob] = useState("");
  const [showAlertJob, setShowAlertJob] = useState(false);
  const [companyName, setCompanyName] = useState('Выберите компанию');
  const dispatch = useDispatch();

  const click = async (event) => {
    try {
      event.preventDefault();
      let formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("img", img);

      let data = await createCompany(formData);
      dispatch(addCompanyAC(data));
      setShowAlert(true);
      setName("");
      setDescription("");
      setImg("");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

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
      console.log(data)
      const response =  createJob(data);
      dispatch(addJobAC(response));
      setShowAlertJob(true);
      setNameJob("");
      setDescriptionJob("");
      setCompanyJob(null);
      setSalaryJob("");
      setCityJob("");
      setCompanyName('Выберите компанию');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <CompanyInputForm onSubmit={click} enctype="multipart/form-data">
          <h1>Добавление компании</h1>
          <CompanyNameInput
            placeholder="Введите название"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <CompanyDecriptionInput
            placeholder="Введите описание"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <CompanyLogo
            placeholder="Выберите файл"
            type="file"
            name="img"
            onChange={(event) => setImg(event.target.files[0])}
          />
          <CompanyButton type="submit">Добавить</CompanyButton>
          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>Компания успешно добавлена!</Alert.Heading>
            </Alert>
          )}
        </CompanyInputForm>

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
                setCompanyName(company.name) }}
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
