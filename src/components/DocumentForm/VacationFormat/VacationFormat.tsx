import React, { useEffect, useState } from 'react';
import { postFormat } from '../../../pages/SubMain/utils';
import usePostschedule from '../../../api/hooks/Main/usePostschedule';
import * as styles from '../commonStyles';
import useInput from '../../../hooks/common/useInput';
import useTextarea from '../../../hooks/common/useTextarea';
import Button from '../../Button/Button';
import { MdFolder, MdZoomInMap } from 'react-icons/md';
import { AiFillTag } from 'react-icons/ai';
import Period from '../components/Period/Period';
import { getCookie } from '../../../api/auth/CookieUtils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import AddTodo from '../../Feed/Todo/AddTodo';
import { RiArrowLeftSLine } from 'react-icons/ri';
import FileUpload from '../../FileUpload/FileUpload';
import styled from 'styled-components';
import { TbBorderCorners } from 'react-icons/tb';

const VacationFormat = ({ props, onReturnHandler }: ScheduleProps) => {
  const mutation = usePostschedule();
  const [FormFiles, SetFormFile] = useState<File>();

  console.log('props', props);

  const SaveClickHandler = () => {
    if (disable === false) {
      const formData = new FormData();
      if (FormFiles !== undefined) {
        formData.append('file', FormFiles);
        const newData = postFormat(props.tab, props);
        mutation.mutate(newData);
      } else {
        const newData = postFormat(props.tab, props);
        mutation.mutate(newData);
      }
    } else if (disable === true) {
      console.log('t');
      //decode한 정보에서 userId와 앞으로 받을 userId 비교해서 수정기능 되게 하기
    }

    setDisable(!disable);
  };

  const token = getCookie('token');
  const decoded = token && jwtDecode<JwtPayload>(token);
  const userId = decoded ? decoded.userId : '';

  const [disable, setDisable] = useState(false);
  const [author, autherHandler, setAuthorInputValue] = useInput();
  const [title, titleHandler, setTitleHanlderValue] = useInput();
  const [content, contentHandler, setContentValue] = useTextarea();
  const [zoomClick, setZoomClick] = useState(false);

  useEffect(() => {
    props.title && setTitleHanlderValue(props.title?.split('-')[0]);
    props.title?.split('-')[1] && setAuthorInputValue(props.title?.split('-')[1]);
    props.isReadOnly !== undefined && setDisable(props.isReadOnly);
    props.body && setContentValue(props.body);
    console.log(' props.isReadOnly', props.isReadOnly);
  }, [props]);

  console.log('disable', disable);
  return (
    <styles.StContainer ref={props.propsRef}>
      <styles.StTitleBlock>
        <styles.StTitleContentBlock>
          <styles.StMarkBlock backgroundColor={props.backgroundColor} />
          <Period startDay={props.startDay} endDay={props.endDay} />
          <div>
            <styles.StInput
              placeholder="작성자"
              value={author}
              onChange={autherHandler}
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
