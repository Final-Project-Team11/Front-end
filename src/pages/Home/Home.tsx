import { useNavigate } from 'react-router-dom';
import main1 from '../../assets/images/home/main1.jpg';
import main2 from '../../assets/images/home/main2.jpg';
import main3 from '../../assets/images/home/main3.jpg';
import main4 from '../../assets/images/home/main4.jpg';
import main5 from '../../assets/images/home/main5.jpg';
import main6 from '../../assets/images/home/main6.jpg';
import styled from 'styled-components';
import React from 'react';
import { getCookie } from '../../api/auth/CookieUtils';
import Wrapper_Column from '../../components/Atoms/Wrapper_Column/Wrapper_Column';
import HomeLogo from '../../assets/Icons/HomeLogo';
import CustomButton from '../../components/Atoms/Button/CustomButton';

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const checkToken = getCookie('token');
    if (checkToken) {
      alert('이미 로그인 된 계정입니다.');
      navigate('/main');
    }
  }, [navigate]);

  return (
    <StBlock>
      <Header>
        <Wrapper_Column>
          <HomeLogo />
          <StSpan>Meer : 캣린더</StSpan>
        </Wrapper_Column>
        <CustomButton buttonType="home" onClick={() => navigate(`/login`)}>
          시작하기
        </CustomButton>
      </Header>
      <StImg src={main1} />
      <StImg src={main2} />
      <StImg src={main3} />
      <StImg src={main4} />
      <StImg src={main5} />
      <StImg src={main6} />
    </StBlock>
  );
};

export default Home;

const StBlock = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 80px;
`;

const StImg = styled.img`
  object-fit: cover;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  position: fixed;
  right: 0;
  top: 0;
  padding: 20px;
  gap: 30px;

  box-sizing: border-box;
  align-items: center;
  background: transparent;

  z-index: 100;
`;

const StSpan = styled.span`
  color: #5982b2;
  font-size: 8px;
  font-weight: bold;
  margin-top: -2px;
`;
