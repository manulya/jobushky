import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useDispatch } from "react-redux";
import { check } from "./http/userAPI";
import { setIsAuthAC } from "./store/userReducer";
import { Spinner } from "react-bootstrap";


function App() {
 
  const [loading, setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(() => {
    check().then(data => {
        dispatch(setIsAuthAC(true))
    }).finally(() => setLoading(false))
}, [])

if(loading){
  return <Spinner animation={"grow"}/>
}

  return (
     <AppRouter/>
  );
}

export default App;
