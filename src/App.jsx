import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './pages/Portofolio';
import { Analytics } from "@vercel/analytics/react"



const App = () => {
  
  return (
  <>
    <Routes>
       <Route path="/" element={<Portfolio />} />

       </Routes>
       <Analytics />
    </>
  );
};

export default App;
