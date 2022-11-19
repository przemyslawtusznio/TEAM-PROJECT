import React from 'react';
import CurrenciesForm from './components/CurrenciesForm/CurrenciesForm';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm/>
      <CurrenciesForm />
    </div>
  );
}

export default App;

//próbny komentarz
//test