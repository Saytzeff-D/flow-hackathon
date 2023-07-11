import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import First from './pages/First';

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
            path='/first' 
            element={<First />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
