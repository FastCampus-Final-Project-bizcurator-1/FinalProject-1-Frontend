import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
//import Login from './pages/Login/Login';
//import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <App />
      {/* <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
