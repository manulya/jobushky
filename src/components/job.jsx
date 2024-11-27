import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Alert, Spinner } from "react-bootstrap";
import { createRequest } from "../http/requestAPI";
import { fetchSkills } from "../http/skillsAPI";
import DownloadButton from "./download";

function Job(props) {
  const { id, name, description, img } = props.company;
  const jobId = props.id;
  const allSkills = useSelector((state) => state.jobs.skills);
  const skills = allSkills.filter((skill) => skill.job_id === jobId);
  const setActive = props.setActive;
  const jobs = useSelector((state) => state.jobs.jobs);
  const jobItem = jobs.filter((j) => j.id === jobId);
  const userid = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    dispatch(fetchSkills(jobId));
  }, [jobId, dispatch]);

  if (!jobs || jobs.length === 0 || !jobItem || jobItem.length === 0) {
    return <Spinner />;
  }

  const handleApply = () => {
    try {
      dispatch(createRequest(userid, jobItem[0].id));
    } catch (error) {
      console.log(error);
    }
    setShowAlert(true);
  };

  return (
    <JobPopUp onClick={() => setActive()}>
      <Content onClick={(e) => e.stopPropagation()}>
        <ButtonClose onClick={() => setActive()}>&times;</ButtonClose>
        <CompanyLogo
          src={process.env.REACT_APP_API_URL + jobItem[0].img}
          alt="Book Cover"
        />
        <About>
          <JobTitle>{jobItem[0].name}</JobTitle>
          <CompanyName>
            <span>Автор:</span> {name}
          </CompanyName>
          <Salary>
            <span>Стоимость:</span> {jobItem[0].salary} руб.
          </Salary>
          <City>
            <span>Жанр:</span> {jobItem[0].city}
          </City>
          <Description>
            <span>Описание:</span> {jobItem[0].description}
          </Description>
          <JobButton onClick={handleApply}>Добавить в корзину</JobButton>
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
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 800px; /* Увеличиваем ширину карточки */
  max-width: 90%;
  padding: 20px;
  display: flex; /* Flex-стиль для размещения картинка + текст */
  align-items: center;
  gap: 20px; /* Пространство между колонками */
`;

const CompanyLogo = styled.img`
  border-radius: 8px;
  width: 200px; /* Увеличенный размер изображения */
  height: 300px;
  object-fit: cover;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1; /* Занимает доступное пространство */
`;

const JobTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const CompanyName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #666;
`;

const Salary = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
`;

const City = styled(Salary)`
  font-weight: 400;
  color: #555;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
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

const ButtonClose = styled.span`
  color: #aaa;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;

  :hover {
    color: black;
  }
`;
