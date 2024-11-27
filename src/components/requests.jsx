import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Job from "./job";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../http/jobAPI";
import { fetchCompanies } from "../http/companyAPI";
import Header from "./header";
import { deleteRequest, fetchRequests } from "../http/requestAPI";
import { useNavigate } from "react-router-dom";
import { SENDED_ROUTE } from "../utils/consts";
import { createSended } from "../http/sendedAPI";
import DOMPurify from "dompurify";
import { Alert } from "react-bootstrap";

const Requests = () => {
  const userid = localStorage.getItem("userId");
  const requests = useSelector((state) => state.requests.requests);
  const companies = useSelector((state) => state.companies.companies);
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sendMessage, setSendMessage] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchCompanies());
    dispatch(fetchRequests(userid));
  }, [dispatch, userid]);

  const handleApply = (job_id, index) => {
    try {
      const user_id = userid;
      const message = DOMPurify.sanitize(sendMessage[index]);
      dispatch(createSended(user_id, job_id, message));
      setSendMessage((prevState) => {
        const updatedSendMessage = [...prevState];
        updatedSendMessage[index] = message;
        return updatedSendMessage;
      });
      
    
    } catch (error) {
      console.log(error);
    }
    dispatch(fetchJobs());
      dispatch(fetchCompanies());
      dispatch(fetchRequests(userid));
    setShowAlert(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteRequest(id));
  };
  const handleSend = (id) => {
    navigate(SENDED_ROUTE);
  };

  return (
    <>
      <Header />
      <SendedButton onClick={() => handleSend()}>Заказанные книги</SendedButton>
      {requests.length === 0 ? (
        <EmptyContainer>
          <Empty>Вы ещё не добавили ни одной книги в корзину</Empty>
          <SendedButton onClick={() => handleSend()}>
            Заказанные книги
          </SendedButton>
        </EmptyContainer>
      ) : (
        <RequestsContainer>
          <RequestsHeader>Эти книги вы добавили в корзину</RequestsHeader>
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
                  <MessageForm>
                    <Message
                      placeholder="Укажите адресс"
                      value={sendMessage[index]}
                      onChange={(event) => {
                        const updatedSendMessage = [...sendMessage];
                        updatedSendMessage[index] = event.target.value;
                        setSendMessage(updatedSendMessage);
                      }}
                    ></Message>
                  </MessageForm>
                  <JobButton onClick={() => handleApply(request.jobid, index)}>
                    Заказать книгу
                  </JobButton>
                  <DeleteButton onClick={() => handleDelete(request.id)}>
                    Удалить из корзины
                  </DeleteButton>
                  {showAlert && (
                    <Alert
                      variant="success"
                      onClose={() => setShowAlert(false)}
                      dismissible
                    >
                      <Alert.Heading>
                        Книга успешно добавлена в избранное!
                      </Alert.Heading>
                    </Alert>
                  )}
                </VacancyContainer>
              );
            })}
          </JobsContainer>
        </RequestsContainer>
      )}
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
  height: 350px;
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
  background-color: #45da3f;
  background-image: linear-gradient(to bottom, #45da3f, #1c6a10);
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 10px;
  width: 200px;
  :hover {
    background-color: #1c5d1a;
    color: #f2eefa;
  }
`;

const DeleteButton = styled.button`
  /* background-color: #881717d9; */
  background-image: linear-gradient(to bottom, #c9240e81, #8d0f0fe1);
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 10px;
  width: 200px;
  :hover {
    background-color: #881717d9;
    color: #f2eefa;
  }
`;

const City = styled.div`
  font-size: 16px;
  color: #333333;
  margin-top: 5px;
`;
const SendedButton = styled.button`
  position: absolute;
  top: -10%;
  right: 1%;
  background-image: linear-gradient(to left, #15b5af, #2e1fa2);
  color: #f9dfdf;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 10%;
  :hover {
    color: #f2eefa;
  }
`;
const EmptyContainer = styled(JobsContainer)``;
const MessageForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const Message = styled.input`
  background-color: #ffffff;
  border: 1px solid #a1a1a1;
  border-radius: 10px;
`;
