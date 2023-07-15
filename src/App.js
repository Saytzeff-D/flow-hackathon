import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import First from './pages/First';
import Ethereum from './pages/Ether';
import ContractInteraction from './pages/Contract';
import Dashboard from './pages/Dashboard';

function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={<SignIn />}
          />
          <Route
            path='/dashboard' 
            element={<Dashboard />}
          />
          <Route
            path='/first' 
            element={<First />}
          />
          <Route
            path='/ether'
            element={<Ethereum />} 
          />
          <Route
            path='/contract' 
            element={<ContractInteraction/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
