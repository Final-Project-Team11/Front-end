import React from 'react';
import CustomCalendar from '../Main/CustomCalendar/CustomCalendar';
import { useNavigate } from 'react-router-dom';

const OneWeekCalendar = () => {
  const navigate = useNavigate();
  const moveMainHandler = () => {
    navigate('/main');
  };

  return <CustomCalendar width="813px" onClick={moveMainHandler} />;
};

export default OneWeekCalendar;
