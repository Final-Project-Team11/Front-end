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
import HeaderLogo from '../../assets/Icons/HeaderLogo';

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
      <Header style={{ background: 'white' }}>
        <HeaderLogo />

        <StButton onClick={() => navigate(`/login`)}>시작하기</StButton>
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
`;

const StImg = styled.img`
  object-fit: cover;
`;

const Header = styled.div`
  height: fit-content;
  display: flex;
  gap: 33px;
  position: fixed;
  right: 0;
  top: 0;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  background: transparent;
  z-index: 100;
`;

const StButton = styled.button`
  width: 120px;
  height: 60px;
  border-radius: 45px;
  background-color: #e64042;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;
