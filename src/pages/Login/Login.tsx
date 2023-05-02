import React from 'react';
import { StBlock, StH1, StSpan, TabButton } from './styles';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../api/auth/CookieUtils';
// component
import ManagerHead from '../../assets/Meerkat/ManagerHead';
import UserHead from '../../assets/Meerkat/UserHead';
// svg 파일
import UserLoginForm from './components/UserLoginForm';
import AdminLoginForm from './components/AdminLoginForm';
import Wrapper_Column from '../../components/Atoms/Wrapper_Column/Wrapper_Column';
import Wrapper_Row from '../../components/Atoms/Wrapper_Row/Wrapper_Row';

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
      <StH1>Meer : 캣린더</StH1>
      <StSpan>업무와 휴가를 분리하여 더욱 효율적으로</StSpan>
      <Wrapper_Row
        style={{
          margin: '110px 0 30px',
          gap: '15px',
          alignItems: 'flex-end',
        }}
      >
        <Wrapper_Column>
          <ManagerHead isSelected={currentTab === Tabs.Admin} />
          <TabButton
            onClick={() => ClickTabHandler(Tabs.Admin)}
            isSelected={currentTab === Tabs.Admin}
          >
            대표
          </TabButton>
        </Wrapper_Column>
        <Wrapper_Column>
          <UserHead isSelected={currentTab === Tabs.User} />
          <TabButton
            onClick={() => ClickTabHandler(Tabs.User)}
            isSelected={currentTab === Tabs.User}
          >
            팀원
          </TabButton>
        </Wrapper_Column>
      </Wrapper_Row>
      {currentTab === Tabs.Admin && <AdminLoginForm />}
      {currentTab === Tabs.User && <UserLoginForm />}
    </StBlock>
  );
};

export default Login;
