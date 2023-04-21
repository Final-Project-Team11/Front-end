import logo from '../../assets/images/home/logo.png';
import main1 from '../../assets/images/home/main1.jpg';
import main2 from '../../assets/images/home/main2.jpg';
import main3 from '../../assets/images/home/main3.jpg';
import main4 from '../../assets/images/home/main4.jpg';
import styled from 'styled-components';

const Home = () => {
  return (
    <StBlock>
      <Header style={{ background: 'white' }}>
        <img src={logo} />
        <StButton>시작하기</StButton>
      </Header>

      <StImg src={main1} />
      <StImg src={main2} />
      <StImg src={main3} />
      <StImg src={main4} />
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
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;

  padding: 20px;
  box-sizing: border-box;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 100;
`;

const StButton = styled.button`
  width: 240px;
  height: 90px;
  border-radius: 45px;
  background-color: #e64042;
  border: none;
  font-weight: bold;
  font-size: 30px;
  color: white;
`;
