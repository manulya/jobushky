import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Job from "./job";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { createView, fetchView } from "../http/skillsAPI";

const Vacancy = (props) => {
  const { id, img, name, description, salary, city, companyid } = props.vacancy;
  const [popUp, setPopUp] = useState(false);
  const companies = useSelector((state) => state.companies.companies);
  const company = companies.filter((c) => c.id === companyid);

  const clickHandler = () => {
    setPopUp(!popUp);
  };

  if (
    !companies ||
    companies.length === 0 ||
    !company ||
    company.length === 0
  ) {
    return <Spinner />;
  }

  return (
    <VacancyContainer>
      <CompanyLogo src={process.env.REACT_APP_API_URL + img} />
      <Column>
        <JobTitle>{name}</JobTitle>
        <CompanyName>
          Автор: <span style={{ fontWeight: "bold" }}>{company[0].name}</span>
        </CompanyName>
        <City>
          <BookPrice>{salary} руб.</BookPrice>
        </City>
        <JobButton onClick={() => clickHandler()}>Подробнее</JobButton>
      </Column>
      {popUp && (
        <Job key={id} id={id} company={company[0]} setActive={setPopUp} />
      )}
    </VacancyContainer>
  );
};

export default Vacancy;

const VacancyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 300px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.851) 0%,
      rgba(231, 222, 222, 0.815) 100%
    ),
    #f7f2f2ea;
  background-size: cover;
  background-position: center;
  padding: 30px;
  border-radius: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 220px;
`;

const JobTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 5px;
  /* text-align: center; */
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

const City = styled.div`
  font-size: 16px;
  color: #333333;
  margin-top: 5px;
`;

const CompanyLogo = styled.img`
  border-radius: 5px;
  width: 200px;
  height: 260px;
`;

const BookPrice = styled.p`
  color: #6a1b9a;
  font-size: 1.4rem;
`;
