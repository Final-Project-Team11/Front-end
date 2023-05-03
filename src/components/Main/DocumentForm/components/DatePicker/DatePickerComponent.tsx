import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

interface DatePickerProps {
  setPropsDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const DatePickerComponent = (props: DatePickerProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const changeDateHandler = (date: Date) => {
    date !== null && setStartDate(date);
    props.setPropsDate(date);
  };
  return (
    <StDatePicker
      selected={startDate}
      onChange={(date: Date) => changeDateHandler(date)}
    />
  );
};

const StDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  border: none;
  width: 150px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 30px;
  padding-left: 15px;
`;

export default DatePickerComponent;
