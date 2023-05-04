import React, { useEffect, useState } from 'react';
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
import Swal from 'sweetalert2';
import CustomButton from '../../../Atoms/Button/CustomButton';
import useMoveScroll from '../../../../api/hooks/Main/useMoveScroll';
import { recoilTabState } from '../../../../states/recoilTabState';
import { useRecoilValue } from 'recoil';

const VacationFormat = ({
  props,
  onReturnHandler,
  onCancelHandler,
  propsRef,
}: ScheduleProps) => {
  const mutation = usePostVacation();
  const tab = useRecoilValue(recoilTabState);
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
          const newProps = {
            ...props,
            body: content,
            title: title,
            username: userName,
            location: location,
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

  const [disable, setDisable] = useState(false);
  const [userName, userNameHandler, setUserNameInputValue] = useInput();
  const [title, titleHandler, setTitleHanlderValue] = useInput();
  const [content, contentHandler, setContentValue] = useTextarea();
  const [location, locationHandler, setlocationHanlder] = useInput();

  useEffect(() => {
    props.title !== undefined && setTitleHanlderValue(props.title?.split('-')[0]);
    props.userName !== undefined && setUserNameInputValue(props.userName);
    props.isReadOnly !== undefined && setDisable(props.isReadOnly);
    props.body !== undefined && setContentValue(props.body);
    props.location !== undefined && setlocationHanlder(props.location);
    onMoveToElement();
  }, [props]);

  useEffect(() => {
    const outsideClickHandler = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('#vacation') !== null) return;
      if ((event.target as HTMLElement).closest('.swal2-styled') !== null) return;
      if ((event.target as HTMLElement).closest('.swal2-popup') !== null) return;

      Swal.fire({
        title: '작성중인 일정이 있습니다.\n취소하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '네,취소하겠습니다!',
        cancelButtonText: '아니요, 작성할게요!',
        reverseButtons: true,
      }).then(result => {
        if (result.isConfirmed) {
          Swal.fire('취소되었습니다!', '해당 일정이 삭제되었습니다.', 'success');
          onCancelHandler(props.id, props.calendarId);
        }
      });
    };

    document.addEventListener('click', outsideClickHandler);

    return () => {
      console.log('test return');
      document.removeEventListener('click', outsideClickHandler);
    };
  }, []);

  const cancelConfirmHandler = () => {
    Swal.fire({
      title: '일정을 취소하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '네,취소하겠습니다!',
      cancelButtonText: '아니요, 작성할게요!',
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('취소되었습니다!', '해당 일정이 삭제되었습니다.', 'success');
        onCancelHandler(props.id, props.calendarId);
      }
    });
  };

  return (
    <styles.StContainer ref={propsRef} id={'vacation'}>
      <ToastContainer />
      <styles.StTitleBlock ref={element}>
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
                buttonType="DetailCancel"
                onClick={cancelConfirmHandler}
                style={{
                  borderRadius: '19px',
                }}
              >
                취소
              </CustomButton>
              <CustomButton
                buttonType="DetailRegistration"
                style={{ borderRadius: '19px' }}
                onClick={SaveClickHandler}
              >
                등록
              </CustomButton>
            </>
          )}
          <styles.StReturnBlcok onClick={() => onReturnHandler && onReturnHandler(false)}>
            <RiArrowLeftSLine size="20px" />
          </styles.StReturnBlcok>
        </styles.StButtonBlock>
      </styles.StTitleBlock>
    </styles.StContainer>
  );
};

export default VacationFormat;
