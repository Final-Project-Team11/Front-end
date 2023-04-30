import React, { useContext, useEffect, useState } from 'react';
import { postFormat } from '../../../../pages/SubMain/utils';
import * as styles from '../commonStyles';
import useInput from '../../../../hooks/common/useInput';
import useTextarea from '../../../../hooks/common/useTextarea';
import { MdZoomIn } from '@react-icons/all-files/md/MdZoomIn';
import Period from '../components/Period/Period';
import { getCookie } from '../../../../api/auth/CookieUtils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { RiArrowLeftSLine } from '@react-icons/all-files/ri/RiArrowLeftSLine';
import { MdZoomOut } from '@react-icons/all-files/md/MdZoomOut';
import { ToastContainer, toast } from 'react-toastify';
import { AxiosError } from 'axios';
import usePostVacation from '../../../../api/hooks/Main/usePostVacation';
import { ErrorData, ScheduleProps } from '../commonInterface';
import { ChangeTabContext } from '../../../../api/hooks/Main/useTabContext';
import Swal from 'sweetalert2';
import CustomButton from '../../../Atoms/Button/CustomButton';
import useMoveScroll from '../../../../api/hooks/Main/useMoveScroll';

const VacationFormat = ({
  props,
  onReturnHandler,
  onCancelHandler,
  propsRef,
}: ScheduleProps) => {
  const mutation = usePostVacation();
  const [FormFiles, SetFormFile] = useState<File[]>();
  const [tab] = useContext(ChangeTabContext);
  const { element, onMoveToElement } = useMoveScroll();

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
          const newData = postFormat(tab, props);
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

  const token = getCookie('token');
  const decoded = token && jwtDecode<JwtPayload>(token);
  const userId = decoded ? decoded.userId : '';

  const [disable, setDisable] = useState(false);
  const [userName, userNameHandler, setUserNameInputValue] = useInput();
  const [title, titleHandler, setTitleHanlderValue] = useInput();
  const [content, contentHandler, setContentValue] = useTextarea();
  const [location, locationHandler, setlocationHanlder] = useInput();
  const [zoomClick, setZoomClick] = useState(false);

  useEffect(() => {
    props.title !== undefined && setTitleHanlderValue(props.title?.split('-')[0]);
    props.userName !== undefined && setUserNameInputValue(props.userName);
    props.isReadOnly !== undefined && setDisable(props.isReadOnly);
    props.body !== undefined && setContentValue(props.body);
    props.location !== undefined && setlocationHanlder(props.location);
    onMoveToElement();
  }, [props]);

  return (
    <styles.StContainer ref={propsRef}>
      <ToastContainer />
      <styles.StTitleBlock>
        <styles.StTitleContentBlock>
          <styles.StMarkBlock backgroundColor={props.backgroundColor} />
          <Period start={props.start} end={props.end} />
          <div>
            <styles.StInput
              placeholder="작성자"
              value={userName}
              onChange={userNameHandler}
              disabled={disable}
            />
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
          {disable === false && (
            <>
              <CustomButton
                buttonType="Detail"
                onClick={onCancelHandler}
                style={{
                  borderRadius: '19px',
                }}
              >
                취소하기
              </CustomButton>
              <CustomButton
                buttonType="Detail"
                style={{ borderRadius: '19px' }}
                onClick={SaveClickHandler}
              >
                등록하기
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
          <styles.StMarkBlock backgroundColor={props.backgroundColor} />
          <styles.StTitleInput
            placeholder="장소 입력란"
            value={location}
            onChange={locationHandler}
            disabled={disable}
          />
        </styles.StMarkNameBlcok>
        <styles.StTextAreaBlock zoomClick={zoomClick} ref={element}>
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
                <MdZoomIn />
                <span>전체화면</span>
              </>
            ) : (
              <>
                <MdZoomOut />
                <span>축소</span>
              </>
            )}
          </styles.StOpenButton>
        </styles.StOpenBlock>
      </styles.StContentBlock>
    </styles.StContainer>
  );
};

export default VacationFormat;
