import React from 'react';
import notFound from '../../assets/images/NotFound.jpg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <StBlock
      style={{ backgroundImage: `url(${notFound})`, backgroundRepeat: 'no-repeat' }}
    >
      <StButton onClick={() => navigate(-1)}>이전 페이지로</StButton>
    </StBlock>
  );
};

export default NotFound;

const StBlock = styled.div`
  width: 100vw;
  height: 100vh;
  flex-grow: 1;

  display: flex;
  justify-content: flex-end;
`;

const StButton = styled.button`
  margin: 30px 30px 0 0;
  width: 200px;
  height: 80px;
  border-radius: 15px;
  background-color: #e64042;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;
