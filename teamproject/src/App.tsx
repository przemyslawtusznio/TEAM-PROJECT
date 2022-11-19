<<<<<<< HEAD
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './components/LoginPage/LoginPage';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './components/HomePage/HomePage';


=======
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
>>>>>>> 4177e607f2d24e9a044cdf46f029c7113f4884ff

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/login' element= {<LoginPage/>} />
      </Routes>
      
      </BrowserRouter>
      
=======
      <LoginForm />
      <RegisterForm />
>>>>>>> 4177e607f2d24e9a044cdf46f029c7113f4884ff
    </div>
  );
}

export default App;

//próbny komentarz
//test
