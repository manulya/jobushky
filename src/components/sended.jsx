import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Job from "./job";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { fetchJobs } from "../http/jobAPI";
import { fetchCompanies } from "../http/companyAPI";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import { fetchSended, updateSended } from "../http/sendedAPI";
import DOMPurify from "dompurify";

const Sended = () => {
  const userid = localStorage.getItem("userId");
  const sended = useSelector((state) => state.requests.sended);
  const companies = useSelector((state) => state.companies.companies);
  const jobs = useSelector((state) => state.jobs.jobs);
  const [writeMsg, setWriteMsg] = useState([]);
  const [sendMessage, setSendMessage] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchCompanies());
    dispatch(fetchSended(userid));
  }, [dispatch, userid]);

  const handleSend = (job_id, index) => {
    const message = DOMPurify.sanitize(sendMessage[index]);
    dispatch(updateSended(job_id, message));
    setWriteMsg((prevWriteMsg) => ({ ...prevWriteMsg, [index]: false }));
  };

  return (
    <>
      <Header />
      {sended.length === 0 ? (
        <Empty>Вы ещё не заказали ни одной книги</Empty>
      ) : (
        <RequestsContainer>
          <RequestsHeader>Заказанные книги</RequestsHeader>
          <JobsContainer>
            {sended.map((sendedItem, index) => {
              const job = jobs.find((job) => job.id == sendedItem.job_id);
              const company = companies.find(
                (company) => company.id == job.companyid
              );
              return (
                <VacancyContainer key={index}>
                  <JobTitle>{job.name}</JobTitle>
                  <CompanyName>{company.name}</CompanyName>
                  <City>{job.city}</City>
                  {writeMsg[index] === true ? (
                    <MessageForm>
                      <MessageInput
                        placeholder="Ваш адрес"
                        value={sendMessage[index]}
                        onChange={(event) => {
                          const newMessage = { ...sendMessage };
                          newMessage[index] = event.target.value;
                          setSendMessage(newMessage);
                        }}
                      ></MessageInput>
                    </MessageForm>
                  ) : (
                    <Message
                      onClick={() => {
                        setWriteMsg((prevWriteMsg) => ({
                          ...prevWriteMsg,
                          [index]: true,
                        }));
                      }}
                    >
                      {sendedItem.message}
                    </Message>
                  )}

                  <JobButton onClick={() => handleSend(sendedItem.id, index)}>
                    Изменить адрес
                  </JobButton>
                </VacancyContainer>
              );
            })}
          </JobsContainer>
        </RequestsContainer>
      )}
    </>
  );
};

export default Sended;
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
const Empty = styled(RequestsHeader)``;
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
const City = styled.div`
  font-size: 16px;
  color: #333333;
  margin-top: 5px;
`;
const Message = styled(City)`
  cursor: pointer;
`;
const MessageForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const MessageInput = styled.input`
  background-color: #ffffff;
  border: 1px solid #a1a1a1;
  border-radius: 10px;
`;
