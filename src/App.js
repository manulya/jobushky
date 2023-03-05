import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/main";
import MainHR from "./components/mainHR/mainHR"
import LogIn from "./components/login/login";
import SignUp from "./components/signup/signup"


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='employer' element={<MainHR/>}></Route>   
      <Route path='login' element={<LogIn/>}></Route>   
      <Route path='signup' element={<SignUp/>}></Route>   
      </Routes>
      
  );
}

export default App;
