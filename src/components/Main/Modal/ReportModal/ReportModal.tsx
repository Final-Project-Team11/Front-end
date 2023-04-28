import React, { useState } from 'react';
import * as UI from './styles';
import { recoilReportState } from '../../../../states/recoilReportState';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { recoilClickEventState } from '../../../../states/recoilClickEventState';
import DatePicker from 'react-datepicker';
const ReportModal = () => {
  const setOpen = useSetRecoilState(recoilReportState);
  const data = useRecoilValue(recoilClickEventState);

  console.log('data', data);
  return (
    <UI.Modal>
      <UI.Header>
        <UI.HeaderIcon />
        <UI.TitleSpan>
          <DatePickerComponent />
        </UI.TitleSpan>
        <UI.TitleSpan>{data?.start}</UI.TitleSpan>
        <UI.TitleSpan>제목</UI.TitleSpan>
        <UI.CloseButton onClick={() => setOpen(false)}>닫기</UI.CloseButton>
        <UI.Devider positions="Header" />
      </UI.Header>
      <UI.ContentArea>
        <UI.ContentSpan>파일</UI.ContentSpan>
      </UI.ContentArea>
      <UI.Footer>
        <UI.FooterHalf>
          {/* {files.files.map(file => {
            return <UI.FooterSpanBlock>{file.fileName}</UI.FooterSpanBlock>;
          })} */}
        </UI.FooterHalf>
        <UI.Devider positions="Footer" />
        <UI.FooterHalf>
          {/* {files.attendees?.map((tag, idx) => {
            return <UI.FooterSpanBlock key={idx}>@ {tag}</UI.FooterSpanBlock>;
          })} */}
        </UI.FooterHalf>
      </UI.Footer>
    </UI.Modal>
  );
};

export default ReportModal;

interface DatePickerProps {
  value: string;
  onClick: () => void;
}

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = ({ value, onClick }: DatePickerProps) => (
    <button className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={date => date !== null && setStartDate(date)}
      //   customInput={<ExampleCustomInput />}
    />
  );
};
