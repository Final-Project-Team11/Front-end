import React from 'react';
import notFound from '../../assets/images/NotFound.jpg';
import { useNavigate } from 'react-router-dom';
import * as UI from './styles';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <UI.StBlock>
      <UI.StImg src={notFound} />
      <UI.StButton onClick={() => navigate(-1)}>이전 페이지로</UI.StButton>
    </UI.StBlock>
  );
};

export default NotFound;
