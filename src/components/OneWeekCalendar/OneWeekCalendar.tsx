import React from 'react';
import * as UI from './style';
import oneWeekCalendar from '../../assets/images/oneWeekCalendar.jpg';

const OneWeekCalendar = () => {
  return (
    <UI.StCalendarBlock>
      <img src={oneWeekCalendar} />
    </UI.StCalendarBlock>
  );
};

export default OneWeekCalendar;
