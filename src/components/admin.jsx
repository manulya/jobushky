import React, { useState } from "react";
import { Alert, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "./header";
import AddCompany from "./addCompany";
import AddJob from "./addJob";
import AddSkills from "./addSkills";

export const Admin = () => {
    return (
    <div>
      <Header />
      <Container>
        <AddCompany/>
        <AddJob/>
        <AddSkills/>
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