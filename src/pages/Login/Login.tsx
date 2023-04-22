import React from 'react';
import { StBlock, TapButton, TapButtonWrapper, TextWrapper, Tap } from './styles';
import MaxInput from '../../components/Inputs/Input/MaxInput';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAdminLogin } from './hooks/useAdminLogin';
import { getCookie } from '../../api/auth/CookieUtils';
import { useLogin } from './hooks/useLogin';
import Modal from '../../components/Modal/Modal';
import ManagerHead from '../../assets/Meerkat/ManagerHead';
import MeerkatHead4 from '../../assets/Meerkat/MeerkatHead4';
import Swal from 'sweetalert2';
// import { useRePassword } from './hooks/useRePassword';

const AdminLogin = () => {
  const { adminLoginInfo, submitLoginHandler, changeInputHandler } = useAdminLogin();
  const navigate = useNavigate();

  const Waiting = () => {
    Swal.fire({
      icon: 'info',
      title: '준비 중인 기능입니다.',
    });
  };

  return (
    <Tap onSubmit={submitLoginHandler}>
      <MaxInput
        types="login"
        type="text"
        name="companyId"
        value={adminLoginInfo.companyId}
        onChange={changeInputHandler}
        placeholder="대표자 아이디를 입력해주세요"
      />
      <MaxInput
        types="login"
        type="password"
        name="password"
        value={adminLoginInfo.password}
        onChange={changeInputHandler}
        placeholder="비밀번호를 입력해주세요."
      />
      <TextWrapper>
        <span onClick={() => navigate('/masterSignup')} style={{ fontSize: '12px' }}>
          미어캣린더가 처음이면! <strong style={{ fontWeight: 'bold' }}>회원가입</strong>
        </span>
        <span onClick={Waiting} style={{ fontSize: '12px' }}>
          아이디 / 비밀번호 찾기
        </span>
      </TextWrapper>
      <Button
        size="login"
        style={{
          color: '#E64042',
          fontSize: '15px',
          fontWeight: 'bold',
          borderRadius: '7px',
          backgroundColor: '#F6F6F6',
        }}
      >
        로그인
      </Button>
    </Tap>
  );
};

const UserLogin = () => {
  // 현재 해결 되지 않는 오류
  // const { patchPassword } = useRePassword();

  const { loginInfo, submitLoginHandler, changeInputHandler, showModal, closeModal } =
    useLogin();

  const [password, setPassword] = React.useState<string>('');

  const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <Tap onSubmit={submitLoginHandler}>
      <MaxInput
        types="login"
        type="text"
        name="companyId"
        value={loginInfo.companyId}
        onChange={changeInputHandler}
        placeholder="대표자 아이디를 입력해주세요."
      />
      <MaxInput
        types="login"
        type="text"
        name="userId"
        value={loginInfo.userId}
        onChange={changeInputHandler}
        placeholder="직원 아이디를 입력해주세요"
      />
      <MaxInput
        types="login"
        type="password"
        name="password"
        value={loginInfo.password}
        onChange={changeInputHandler}
        placeholder="비밀번호를 입력해주세요."
      />
      <Button
        size="login"
        style={{
          color: '#E64042',
          fontSize: '15px',
          fontWeight: 'bold',
          borderRadius: '7px',
          background: '#F6F6F6',
          marginTop: '20px',
        }}
      >
        로그인
      </Button>
      {/* {showModal && (
            <Modal closeModal={closeModal}>
              <MaxInput
                types="login"
                type="password"
                value={password}
                onChange={changePasswordHandler}
              >
                변경할 비밀번호
              </MaxInput>
              <button>변경하기</button>
            </Modal>
          )} */}
    </Tap>
  );
};

enum Tabs {
  Admin = 'Tab1',
  User = 'Tab2',
}

const Login = () => {
  const [currentTab, setCurrentTab] = React.useState<Tabs>(Tabs.Admin);

  const ClickTabHandler = (tab: Tabs) => {
    setCurrentTab(tab);
  };
  const navigate = useNavigate();

  React.useEffect(() => {
    const checkToken = getCookie('token');
    if (checkToken) {
      alert('이미 로그인 된 계정입니다.');
      navigate(-1);
    }
  }, [navigate]);

  return (
    <StBlock>
      <TapButtonWrapper>
        <TapButton
          onClick={() => ClickTabHandler(Tabs.Admin)}
          isSelected={currentTab === Tabs.Admin}
        >
          <span style={{ marginBottom: '30px' }}>대표</span>
          <ManagerHead colors={currentTab === Tabs.Admin ? 'red' : 'blue'} />
        </TapButton>
        <TapButton
          onClick={() => ClickTabHandler(Tabs.User)}
          isSelected={currentTab === Tabs.User}
        >
          <span style={{ marginBottom: '30px' }}>팀원</span>
          <MeerkatHead4 colors={currentTab === Tabs.User ? 'red' : 'blue'} />
        </TapButton>
      </TapButtonWrapper>
      {currentTab === Tabs.Admin && <AdminLogin />}
      {currentTab === Tabs.User && <UserLogin />}
    </StBlock>
  );
};

export default Login;
