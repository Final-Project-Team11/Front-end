import React from 'react';
import { StBlock, TabButton, TabButtonWrapper } from './styles';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../api/auth/CookieUtils';
// component
import UserLoginForm from './components/UserLoginForm';
import AdminLoginForm from './components/AdminLoginForm';
// svg 파일
import MeerkatHead4 from '../../assets/Meerkat/MeerkatHead4';
import ManagerHead from '../../assets/Meerkat/ManagerHead';

enum Tabs {
  Admin = 'Tab1',
  User = 'Tab2',
}

const Login = () => {
  // 탭 상태 변수
  const [currentTab, setCurrentTab] = React.useState<Tabs>(Tabs.Admin);
  const ClickTabHandler = (tab: Tabs) => {
    setCurrentTab(tab);
  };
  const navigate = useNavigate();
  // token을 보유 했을 시 안내 메세지와 함께 main-page로 이동시킴
  React.useEffect(() => {
    const checkToken = getCookie('token');
    if (checkToken) {
      alert('이미 로그인 된 계정입니다.');
      navigate('/main');
    }
  }, []);

  return (
    <StBlock>
      <TabButtonWrapper>
        <TabButton
          onClick={() => ClickTabHandler(Tabs.Admin)}
          isSelected={currentTab === Tabs.Admin}
        >
          <span style={{ marginBottom: '30px' }}>대표</span>
          <ManagerHead colors={currentTab === Tabs.Admin ? 'red' : 'blue'} />
        </TabButton>
        <TabButton
          onClick={() => ClickTabHandler(Tabs.User)}
          isSelected={currentTab === Tabs.User}
        >
          <span style={{ marginBottom: '30px' }}>팀원</span>
          <MeerkatHead4 colors={currentTab === Tabs.User ? 'red' : 'blue'} />
        </TabButton>
      </TabButtonWrapper>
      {currentTab === Tabs.Admin && <AdminLoginForm />}
      {currentTab === Tabs.User && <UserLoginForm />}
    </StBlock>
  );
};

export default Login;
