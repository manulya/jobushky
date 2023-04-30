import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Job(props) {
  const { id, name, description, img } = props.company;
  const jobId = props.id;
  const setActive = props.setActive;
  const jobs = useSelector((state) => state.jobs.jobs);
  const jobItem = jobs.filter((j) => j.id === jobId);

  return (
    <JobPopUp onClick={() => setActive()}>
      <Content onClick={(e) => e.stopPropagation()}>
        <ButtonClose onClick={() => setActive()}>&times;</ButtonClose>

        <About>
          <JobTitle>{jobItem[0].name}</JobTitle>
          <CompanyContainer>
            <CompanyName>{name}</CompanyName>
            <CompanyLogo src={process.env.REACT_APP_API_URL + img} />
          </CompanyContainer>
          {description}
          <Salary>Salary: {jobItem[0].salary}</Salary>
          <City>Location: {jobItem[0].city}</City>
          <Description>{jobItem[0].description}</Description>
          <JobButton>Отправить заявку</JobButton>
        </About>
      </Content>
    </JobPopUp>
  );
}

export default Job;

const JobPopUp = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 500px;
  height: 500px;
`;

const ButtonClose = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  margin: 10px 30px;
  font-weight: bold;
  :hover,
  :focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px;
`;

const JobTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 5px;
`;

const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  /* margin-left: 36%; */
`;

const CompanyName = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #333333;
  text-align: center;
  margin-right: 5%;
`;
const CompanyLogo = styled.img`
  border-radius: 50%;
  width: 5vh;
  height: 5vh;
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

const Description = styled.div`
  font-size: 16px;
  color: #333333;
  margin-top: 5px;
  margin-bottom: 40px;
  text-align: center;
`;
