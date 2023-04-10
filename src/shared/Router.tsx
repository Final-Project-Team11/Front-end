import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Business from '../pages/Business/Business';
import Login from '../pages/Login/Login';
import { Main } from '../pages/Main/Main';
import Manager from '../pages/Manager/Manager';
import MasterSignup from '../pages/MasterSignup/MasterSignup';
import MyPage from '../pages/MyPage/MyPage';
import Write from '../pages/Write/Write';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main view={'month'} />} />
        <Route path="/business" element={<Business />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/masterSignup" element={<MasterSignup />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
