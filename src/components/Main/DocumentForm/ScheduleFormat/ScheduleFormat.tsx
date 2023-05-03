import React, { useContext, useEffect, useRef, useState } from 'react';
import { postFormat } from '../../../../pages/SubMain/utils';
import usePostschedule from '../../../../api/hooks/Main/usePostschedule';
import * as styles from '../commonStyles';
import useInput from '../../../../hooks/common/useInput';
import useTextarea from '../../../../hooks/common/useTextarea';
import { MdZoomIn } from '@react-icons/all-files/md/MdZoomIn';
import Period from '../components/Period/Period';
import { getCookie } from '../../../../api/auth/CookieUtils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import useGetTeamInfo from '../../../../api/hooks/Main/useGetTeamInfo';
import HashTag from '../components/HashTag/HashTag';
import { RiArrowLeftSLine } from '@react-icons/all-files/ri/RiArrowLeftSLine';
import FileUpload from '../components/FileUpload/FileUpload';
import { MdZoomOut } from '@react-icons/all-files/md/MdZoomOut';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from 'axios';
import { ErrorData, ScheduleProps } from '../commonInterface';
import { ChangeTabContext } from '../../../../api/hooks/Main/useTabContext';
import Swal from 'sweetalert2';
import CustomButton from '../../../Atoms/Button/CustomButton';
import useMoveScroll from '../../../../api/hooks/Main/useMoveScroll';
import { useRecoilValue } from 'recoil';
import { recoilTabState } from '../../../../states/recoilTabState';

const ScheduleFormat = ({
  props,
  onReturnHandler,
  onCancelHandler,
  propsRef,
}: ScheduleProps) => {
  const mutation = usePostschedule();
  const [zoomClick, setZoomClick] = useState(false);
  const tab = useRecoilValue(recoilTabState);
  const [FormFiles, SetFormFile] = useState<File[]>();

  const token = getCookie('token');
  const decoded = token && jwtDecode<JwtPayload>(token);
  const userId = decoded ? decoded.userId : '';

  const [disable, setDisable] = useState(false);
  const [userName, userNameHandler, setUserNameInput] = useInput();
  const [title, titleHandler, setTitleHanlder] = useInput();

  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidBody, setIsValidBody] = useState(true);

  const [location, locationHandler, setlocationHanlder] = useInput();
  const [mention, mentionHandler] = useState<string[]>();
  const [content, contentHandler, setContentValue] = useTextarea();

  const { element, onMoveToElement } = useMoveScroll();
  useEffect(() => {
    props.title !== undefined && setTitleHanlder(props.title?.split('-')[0]);
    props.userName !== undefined && setUserNameInput(props.userName);
    props.isReadOnly !== undefined && setDisable(props.isReadOnly);
    props.body !== undefined && setContentValue(props.body);
    props.location !== undefined && setlocationHanlder(props.location);
    onMoveToElement();
  }, [props.id]);

  const SaveClickHandler = () => {
    if (title === '') {
      setIsValidTitle(false);
      return;
    }
    if (content === '') {
      setIsValidBody(false);
      return;
    }

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
            location: location,
          };
          const newData = postFormat(tab, newProps);
          mutation.mutate(newData, {
            onSuccess: () => {
              setDisable(!disable);
              toast.success('🦄 일정 등록 성공!', {
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
              placeholder="제목*"
              value={title}
              onChange={titleHandler}
              disabled={disable}
              maxLength={25}
              isValid={isValidTitle}
            />
          </div>
        </styles.StTitleContentBlock>
        <styles.StButtonBlock>
          {disable === false && userId === props.userId && (
            <>
              <CustomButton buttonType="DetailCancel" onClick={onCancelHandler}>
                취소
              </CustomButton>
              <CustomButton buttonType="DetailRegistration" onClick={SaveClickHandler}>
                등록
              </CustomButton>
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
              <styles.StTitleInput
                placeholder="장소 입력란"
                value={location}
                onChange={locationHandler}
                disabled={disable}
                maxLength={20}
              />
            </>
          ) : null}
        </styles.StMarkNameBlcok>
        <styles.StTextAreaBlock zoomClick={zoomClick} ref={element}>
          <styles.StTextArea
            placeholder="내용*"
            value={content}
            onChange={contentHandler}
            disabled={disable}
            isValid={isValidTitle}
          />
        </styles.StTextAreaBlock>
        <styles.StOpenBlock>
          <styles.StOpenButton onClick={() => setZoomClick(!zoomClick)}>
            {zoomClick === false ? (
              <div style={{ width: '100%' }}>
                <span>크게보기</span>
              </div>
            ) : (
              <>
                <span>작게보기</span>
              </>
            )}
          </styles.StOpenButton>
        </styles.StOpenBlock>
        <styles.StFileBlock>
          <FileUpload
            onFileHandler={SetFormFile}
            disable={disable}
            files={props.files}
            id={props.id}
          />
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
