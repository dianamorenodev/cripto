// Import components
import Login from './components/login.jsx';
import Menu from './components/menu.jsx';
import Cripto from './components/cripto.jsx'
import Footer from './components/footer.jsx';
// Import libraries
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
      <Footer />
    </div>
  );
}

export default App;
