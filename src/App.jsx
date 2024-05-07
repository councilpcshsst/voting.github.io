import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import NextPage from './votingForm';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/votingForm" element={<NextPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
