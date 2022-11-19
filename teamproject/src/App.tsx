import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './components/LoginPage/LoginPage';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element= {<LoginPage/>} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

//próbny komentarz
//test