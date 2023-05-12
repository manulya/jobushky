import React from 'react';
import styled from 'styled-components';

const DownloadButton = ({ jobData }) => {
  const handleClick = () => {
    const docContent = `Job Title: ${jobData.name}\nSalary: ${jobData.salary}\nDescription: ${jobData.description}\nLocation: ${jobData.city}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = "data:application/msword;charset=utf-8," + encodeURIComponent(docContent);
    downloadLink.download = `${jobData.name}.doc`;
    downloadLink.click();
  };

  return (
    <Button onClick={handleClick}>Скачать вакансию в .doc</Button>
  );
};

export default DownloadButton;

const Button = styled.button`
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