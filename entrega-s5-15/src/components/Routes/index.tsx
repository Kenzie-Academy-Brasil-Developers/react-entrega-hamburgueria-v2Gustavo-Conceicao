import React from 'react'
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

const RoutesPage = () => {
  return (
    <Routes>
        <Route path="/*" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
  )
}

export default RoutesPage;