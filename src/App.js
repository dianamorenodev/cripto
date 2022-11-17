// Import components
import Login from './components/login';
import Menu from './components/menu';
import Cripto from './components/cripto'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import { useState } from 'react';
function App() {
  const [token, setToken] = useState(false)
  function addToken(n) {
    setToken(n);
  }
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<Login addToken={addToken} />} />
        <Route path='/cripto' element={<Cripto token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
