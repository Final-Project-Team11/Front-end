import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Main = lazy(() => import('../pages/Main/Main'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const MasterSignup = lazy(() => import('../pages/MasterSignup/MasterSignup'));
const MyPage = lazy(() => import('../pages/MyPage/MyPage'));
const Manager = lazy(() => import('../pages/Manager/Manager'));
const Business = lazy(() => import('../pages/Business/Business'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/masterSignup" element={<MasterSignup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/business" element={<Business />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
