import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useSelector } from "react-redux";
import { check } from "./http/userAPI";
import { setIsAuthAC } from "./store/userReducer";
import { Spinner } from "react-bootstrap";


function App() {
  const users=useSelector((state)=>state.users)
  const [loading, setLoading]=useState(true)

useEffect(()=>{
  setTimeout(()=>{
  check().then(data => {
    users.setIsAuthAC(true)
  }).finally(()=>setLoading(false))
},1000)
}, [])

if(loading){
  return <Spinner animation={"grow"}/>
}

  return (
     <AppRouter/>
  );
}

export default App;
