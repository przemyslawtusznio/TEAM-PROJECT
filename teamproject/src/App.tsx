import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/login' element= {<LoginPage/>} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

//próbny komentarz
//test
