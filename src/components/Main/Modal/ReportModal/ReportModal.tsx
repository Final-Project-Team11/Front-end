import React, { useEffect, useState } from 'react';
import * as UI from './styles';
import { recoilReportState } from '../../../../states/recoilReportState';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { recoilClickEventState } from '../../../../states/recoilClickEventState';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import CustomInput from '../../../Atoms/Input/CustomInput';
import CustomButton from '../../../Atoms/Button/CustomButton';
import styled from 'styled-components';
import useTextarea from '../../../../hooks/common/useTextarea';
import FileUpload from '../../DocumentForm/components/FileUpload/FileUpload';
import HashTag from '../../DocumentForm/components/HashTag/HashTag';
import usePostReport from '../../../../api/hooks/Main/usePostReport';
import usePostMeetingReport from '../../../../api/hooks/Main/usePostMeetingReport';
export type ReportInfo = {
  title: string;
  body: string;
  location: string;
  author: string;
};

type ReportModalProps = {
  value?: string | number;
};

const ReportModal = (value: ReportModalProps) => {
  const { register, handleSubmit, reset } = useForm<ReportInfo>();
  const [FormFiles, SetFormFile] = useState<File[]>();
  const [attendees, attendeesHandler] = useState<string[]>();
  const setOpen = useSetRecoilState(recoilReportState);
  const data = useRecoilValue(recoilClickEventState);
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();

  const reportMutation = usePostReport();
  const mettingMutation = usePostMeetingReport();

  const submitHandler = (item: ReportInfo) => {
    const payload = {
      title: item.title,
      body: item.body,
      start,
      end,
      attendees,
      fileList: FormFiles,
    };

    const currentTab = value.value as number;

    console.log('currentTab', value);

    switch (currentTab) {
      case 0:
        console.log('test');
        reportMutation.mutate(payload);
        break;
      case 1:
        {
          const newPayload = {
            postInfo: payload,
            id: data.id,
          };

          mettingMutation.mutate(newPayload);
        }

        break;
      case 2:
        reportMutation.mutate(payload);
        break;
    }
  };

  useEffect(() => {
    const startDay = new Date(data.start || '');
    const endDay = new Date(data.end || '');
    setStart(startDay);
    setEnd(endDay);
  }, [data]);

  return (
    <UI.Modal>
      <UI.Form onSubmit={handleSubmit(submitHandler)}>
        <UI.Header>
          <UI.HeaderIcon />
          {data && (
            <>
              <UI.TitleSpan>
                {start?.getFullYear()}/
                {(Number(start?.getMonth()) + 1).toString().padStart(2, '0')}/
                {start?.getDate().toString().padStart(2, '0')}
                &nbsp; - &nbsp;
                {end?.getFullYear()}/{' '}
                {(Number(end?.getMonth()) + 1).toString().padStart(2, '0')}/
                {end?.getDate().toString().padStart(2, '0')}
              </UI.TitleSpan>
            </>
          )}

          <CustomInput
            inputType="author"
            placeholder="작성자를 입력해주세요"
            {...register('author', {
              required: true,
            })}
          />

          <CustomInput
            inputType="title"
            placeholder="제목을 입력해주세요"
            {...register('title', {
              required: true,
            })}
          />
          <UI.ButtonBlock>
            <CustomButton type="submit" buttonType="ModalButton">
              저장
            </CustomButton>
            <CustomButton buttonType="ModalButton">닫기</CustomButton>
          </UI.ButtonBlock>
          <UI.Devider positions="Header" />
        </UI.Header>
        <UI.ContentArea>
          <UI.TextArea
            placeholder="내용을 입력해주세요"
            {...register('body', {
              required: true,
            })}
          />
        </UI.ContentArea>
        <UI.Footer>
          <UI.FileBlock>
            <FileUpload onFileHandler={SetFormFile} disable={false} files={undefined} />
          </UI.FileBlock>
          <UI.Devider positions="Footer" />
          <UI.AttendeesBlock>
            <HashTag
              mention={undefined}
              disable={false}
              mentionHandler={attendeesHandler}
            />
          </UI.AttendeesBlock>
        </UI.Footer>
      </UI.Form>
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
