import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './pages/Portofolio';


const App = () => {
  
  return (
  <>
    <Routes>
       <Route path="/" element={<Portfolio />} />

       </Routes>
    </>
  );
};

export default App;
