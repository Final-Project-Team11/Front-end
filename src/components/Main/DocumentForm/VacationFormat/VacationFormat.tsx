import React, { useContext, useEffect, useState } from 'react';
import { postFormat } from '../../../../pages/SubMain/utils';
import * as styles from '../commonStyles';
import useInput from '../../../../hooks/common/useInput';
import useTextarea from '../../../../hooks/common/useTextarea';
import Button from '../../../Button/Button';
import { MdZoomInMap } from 'react-icons/md';
import Period from '../components/Period/Period';
import { getCookie } from '../../../../api/auth/CookieUtils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { TbBorderCorners } from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import { AxiosError } from 'axios';
import usePostVacation from '../../../../api/hooks/Main/usePostVacation';
import { ErrorData, ScheduleProps } from '../commonInterface';
import { ChangeTabContext } from '../../../../api/hooks/Main/useTabContext';

const VacationFormat = ({ props, onReturnHandler }: ScheduleProps) => {
  const mutation = usePostVacation();
  const [FormFiles, SetFormFile] = useState<File>();
  const [tab] = useContext(ChangeTabContext);
  const SaveClickHandler = () => {
    if (disable === false) {
      if (confirm('등록하시나요 ?')) {
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

            setDisable(!disable);
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
      }
    } else if (disable === true) {
      //decode한 정보에서 userId와 앞으로 받을 userId 비교해서 수정기능 되게 하기
    }
  };

  const token = getCookie('token');
  const decoded = token && jwtDecode<JwtPayload>(token);
  const userId = decoded ? decoded.userId : '';

  const [disable, setDisable] = useState(false);
  const [userName, userNameHandler, setUserNameInputValue] = useInput();
  const [title, titleHandler, setTitleHanlderValue] = useInput();
  const [content, contentHandler, setContentValue] = useTextarea();
  const [zoomClick, setZoomClick] = useState(false);

  useEffect(() => {
    props.title !== undefined && setTitleHanlderValue(props.title?.split('-')[0]);
    props.userName !== undefined && setUserNameInputValue(props.userName);
    props.isReadOnly !== undefined && setDisable(props.isReadOnly);
    props.body !== undefined && setContentValue(props.body);
  }, [props]);

  console.log('disable', disable);
  return (
    <styles.StContainer ref={props.propsRef}>
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
            <Button
              color="black"
              size="Detail"
              borderRadius="19px"
              onClick={SaveClickHandler}
            >
              등록하기
            </Button>
          )}
          <styles.StReturnBlcok onClick={() => onReturnHandler && onReturnHandler(false)}>
            <RiArrowLeftSLine size="20px" />
          </styles.StReturnBlcok>
        </styles.StButtonBlock>
      </styles.StTitleBlock>
      <styles.StContentBlock>
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
      </styles.StContentBlock>
    </styles.StContainer>
  );
};

export default VacationFormat;
