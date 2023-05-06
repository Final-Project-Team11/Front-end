import React, { useEffect, useState } from 'react';
import * as UI from './styles';
import { recoilReportState } from '../../../../states/recoilReportState';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { recoilClickEventState } from '../../../../states/recoilClickEventState';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import CustomInput from '../../../Atoms/Input/CustomInput';
import CustomButton from '../../../Atoms/Button/CustomButton';
import FileUpload from '../../DocumentForm/components/FileUpload/FileUpload';
import HashTag from '../../DocumentForm/components/HashTag/HashTag';
import usePostReport from '../../../../api/hooks/Main/usePostReport';
import usePostMeetingReport from '../../../../api/hooks/Main/usePostMeetingReport';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { ErrorData } from '../../DocumentForm/commonInterface';
import DatePickerComponent from '../../DocumentForm/components/DatePicker/DatePickerComponent';
export type ReportInfo = {
  title: string;
  body: string;
  location: string;
  author: string;
};

type ReportModalProps = {
  value?: string | number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReportModal = ({ value, setOpen }: ReportModalProps) => {
  const { register, handleSubmit, reset } = useForm<ReportInfo>();
  const [FormFiles, SetFormFile] = useState<File[]>();
  const [attendees, attendeesHandler] = useState<string[]>();
  const data = useRecoilValue(recoilClickEventState);
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();

  const reportMutation = usePostReport();
  const mettingMutation = usePostMeetingReport();

  const CloseHandler = () => {
    setOpen(false);
  };

  const errorHandler = (error: AxiosError) => {
    const errorOjbect: ErrorData = error.response?.data as ErrorData;
    toast.error(`❌ ${errorOjbect.errorMessage}`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const successHandler = () => {
    toast.success('🦄 서버 업로드 성공!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    setOpen(false);
  };

  const submitHandler = (item: ReportInfo) => {
    const currentTab = value as number;

    const titleName =
      currentTab === 0 ? '보고서' : currentTab === 1 ? '회의록' : '결제요청서';

    Swal.fire({
      title: `${titleName}을 추가하시겠습니까?`,
      text: `${titleName}을 다시한번 확인해 주세요.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '네,추가하겠습니다!',
      cancelButtonText: '아니요, 취소할게요!',
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        const payload = {
          title: item.title,
          body: item.body,
          start,
          end,
          attendees,
          fileList: FormFiles,
        };

        switch (currentTab) {
          case 0: {
            reportMutation.mutate(payload, {
              onSuccess: () => {
                console.log('success');
                successHandler();
              },
              onError: error => {
                const errorData: AxiosError = error as AxiosError;
                errorHandler(errorData);
              },
            });
            break;
          }

          case 1:
            {
              const newPayload = {
                postInfo: { ...payload, calendarId: '5' },
                id: data.id,
              };
              mettingMutation.mutate(newPayload, {
                onSuccess: () => {
                  successHandler();
                },
                onError: error => {
                  const errorData: AxiosError = error as AxiosError;
                  errorHandler(errorData);
                },
              });
            }

            break;
          case 2: {
            reportMutation.mutate(payload, {
              onSuccess: () => {
                successHandler();
              },
              onError: error => {
                const errorData: AxiosError = error as AxiosError;
                errorHandler(errorData);
              },
            });
            break;
          }
        }
      }
    });
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
          <div style={{ display: 'flex', gap: '3px', marginTop: '3px' }}>
            <div>
              <DatePickerComponent setPropsDate={setStart} />
            </div>
            <div>
              <DatePickerComponent setPropsDate={setEnd} />
            </div>
          </div>

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
            <CustomButton type="button" buttonType="ModalButton" onClick={CloseHandler}>
              닫기
            </CustomButton>
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
