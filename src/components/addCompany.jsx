import React, { useState } from 'react'
import { createCompany } from "../http/companyAPI";
import { addCompanyAC } from "../store/companyReducer";
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';

const AddCompany=()=> {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch()

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

  return (
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
  )
}
export default AddCompany;

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
