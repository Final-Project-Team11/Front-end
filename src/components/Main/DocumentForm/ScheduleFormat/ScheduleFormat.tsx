import React, { useContext, useEffect, useRef, useState } from 'react';
import { postFormat } from '../../../../pages/SubMain/utils';
import usePostschedule from '../../../../api/hooks/Main/usePostschedule';
import * as styles from '../commonStyles';
import useInput from '../../../../hooks/common/useInput';
import useTextarea from '../../../../hooks/common/useTextarea';
import Button from '../../../Button/Button';
import { MdZoomInMap } from 'react-icons/md';
import Period from '../components/Period/Period';
import { getCookie } from '../../../../api/auth/CookieUtils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import useGetTeamInfo from '../../../../api/hooks/Main/useGetTeamInfo';
import HashTag from '../components/HashTag/HashTag';
import { RiArrowLeftSLine } from 'react-icons/ri';
import FileUpload from '../components/FileUpload/FileUpload';
import { TbBorderCorners } from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from 'axios';
import { ErrorData, ScheduleProps } from '../commonInterface';
import { ChangeTabContext } from '../../../../api/hooks/Main/useTabContext';
import Swal from 'sweetalert2';

const ScheduleFormat = ({
  props,
  onReturnHandler,
  onCancelHandler,
  propsRef,
}: ScheduleProps) => {
  const mutation = usePostschedule();
  const [zoomClick, setZoomClick] = useState(false);
  const [tab] = useContext(ChangeTabContext);
  const [FormFiles, SetFormFile] = useState<File[]>();

  const token = getCookie('token');
  const decoded = token && jwtDecode<JwtPayload>(token);
  const userId = decoded ? decoded.userId : '';

  const [disable, setDisable] = useState(false);
  const [userName, userNameHandler, setUserNameInputValue] = useInput();
  const [title, titleHandler, setTitleHanlderValue] = useInput();
  const [mention, mentionHandler] = useState<string[]>();
  const [content, contentHandler, setContentValue] = useTextarea();

  useEffect(() => {
    props.title !== undefined && setTitleHanlderValue(props.title?.split('-')[0]);
    props.userName !== undefined && setUserNameInputValue(props.userName);
    props.isReadOnly !== undefined && setDisable(props.isReadOnly);
    props.body !== undefined && setContentValue(props.body);
  }, [props.id]);

  const SaveClickHandler = () => {
    if (disable === false) {
      Swal.fire({
        title: '일정을 추가하시겠습니까?',
        text: '일정을 다시한번 확인해 주세요.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '네,추가하겠습니다!',
        cancelButtonText: '아니요, 취소할게요!',
        reverseButtons: true,
      }).then(result => {
        if (result.isConfirmed) {
          const newProps = {
            ...props,
            fileList: FormFiles,
            attendees: mention,
            body: content,
            title: title,
            username: userName,
          };
          const newData = postFormat(tab, newProps);
          mutation.mutate(newData, {
            onSuccess: () => {
              setDisable(!disable);
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
            },
            onError: error => {
              const errorData: AxiosError = error as AxiosError;
              const errorOjbect: ErrorData = errorData.response?.data as ErrorData;
              console.log('errorData', errorData);
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
            },
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title: '취소되었습니다.',
            icon: 'error',
          });
        }
      });
    }
  };

  return (
    <styles.StContainer ref={propsRef}>
      <ToastContainer />
      <styles.StTitleBlock>
        <styles.StTitleContentBlock>
          <styles.StMarkBlock backgroundColor={props.backgroundColor} />
          <Period start={props.start} end={props.end} />
          <div>
            <styles.StUserName>{userName}</styles.StUserName>
          </div>
          <div>
            <styles.StTitleInput
              placeholder="제목 입력란"
              value={title}
              onChange={titleHandler}
              disabled={disable}
            />
          </div>
        </styles.StTitleContentBlock>
        <styles.StButtonBlock>
          {disable === false && userId === props.userId && (
            <>
              <Button
                color="black"
                size="Detail"
                borderRadius="5px"
                onClick={onCancelHandler}
              >
                취소하기
              </Button>
              <Button
                color="black"
                size="Detail"
                borderRadius="5px"
                onClick={SaveClickHandler}
              >
                등록하기
              </Button>
            </>
          )}
          <styles.StReturnBlcok onClick={() => onReturnHandler && onReturnHandler(false)}>
            <RiArrowLeftSLine size="20px" />
          </styles.StReturnBlcok>
        </styles.StButtonBlock>
      </styles.StTitleBlock>
      <styles.StContentBlock>
        <styles.StMarkNameBlcok>
          {props.calendarId !== 'Reports' ? (
            <>
              <styles.StMarkBlock backgroundColor={props.backgroundColor} />
              <span>{props.location}</span>
            </>
          ) : null}
        </styles.StMarkNameBlcok>
        <styles.StTextAreaBlock zoomClick={zoomClick}>
          <styles.StTextArea
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={contentHandler}
            disabled={disable}
          />
        </styles.StTextAreaBlock>
        <styles.StOpenBlock>
          <styles.StOpenButton onClick={() => setZoomClick(!zoomClick)}>
            {zoomClick === false ? (
              <>
                <TbBorderCorners />
                <span>전체화면</span>
              </>
            ) : (
              <>
                <MdZoomInMap />
                <span>축소</span>
              </>
            )}
          </styles.StOpenButton>
        </styles.StOpenBlock>
        <styles.StFileBlock>
          <FileUpload onFileHandler={SetFormFile} disable={disable} files={props.files} />
        </styles.StFileBlock>
      </styles.StContentBlock>

      <styles.StMentionBlock>
        <HashTag
          mention={props.attendees}
          disable={disable}
          mentionHandler={mentionHandler}
        />
      </styles.StMentionBlock>
    </styles.StContainer>
  );
};

export default ScheduleFormat;
