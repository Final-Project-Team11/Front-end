import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import MasterSignup from '../pages/MasterSignup/MasterSignup';
import Main from '../pages/Main/Main';
import MyPage from '../pages/MyPage/MyPage';
import Manager from '../pages/Manager/Manager';
import Business from '../pages/Business/Business';
import Write from '../pages/Write/Write';
import { SubMain } from '../pages/SubMain/SubMain';
import React from 'react';
import NotFound from '../pages/NotFound/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/masterSignup" element={<MasterSignup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/business" element={<Business />} />
        <Route path="/write" element={<Write />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
