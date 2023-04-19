import React, { useEffect, useState } from 'react';
import { postFormat } from '../../../pages/SubMain/utils';
import usePostschedule from '../../../api/hooks/Main/usePostschedule';
import * as styles from '../commonStyles';
import useInput from '../../../hooks/common/useInput';
import useTextarea from '../../../hooks/common/useTextarea';
import Button from '../../Button/Button';
import { MdFolder } from 'react-icons/md';
import { AiFillTag } from 'react-icons/ai';
import Period from '../components/Period/Period';
import { getCookie } from '../../../api/auth/CookieUtils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import AddTodo from '../../Feed/Todo/AddTodo';
import { RiArrowLeftSLine } from 'react-icons/ri';
import FileUpload from '../../FileUpload/FileUpload';

const VacationFormat = ({ props, onReturnHandler }: ScheduleProps) => {
  const mutation = usePostschedule();
  const [FormFiles, SetFormFile] = useState<File>();

  console.log('props', props);

  const SaveClickHandler = () => {
    if (disable === false) {
      const formData = new FormData();
      if (FormFiles !== undefined) {
        formData.append('file', FormFiles);
        const newProps = { ...props, file: JSON.stringify(formData) };
        const newData = postFormat(props.tab, newProps);
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

  useEffect(() => {
    props.title && setTitleHanlderValue(props.title?.split('-')[0]);
    props.title?.split('-')[1] && setAuthorInputValue(props.title?.split('-')[1]);
    props.isReadOnly && setDisable(props.isReadOnly);
    props.body && setContentValue(props.body);
  }, [props]);

  return (
    <styles.StContainer ref={props.propsRef}>
      <styles.StTitleBlock>
        <styles.StTitleContentBlock>
          <styles.StMarkBlock backgroundColor={props.backgroundColor} />
          <Period startDay={props.startDay} endDay={props.endDay} />
          <div>
            <styles.StInput
              placeholder="작성자를 입력해주세요"
              value={author}
              onChange={autherHandler}
              disabled={disable}
            />
          </div>
          <div>
            <styles.StInput
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
        <styles.StMarkNameBlcok>
          <styles.StMarkBlock backgroundColor={props.backgroundColor} />
          <span>출장지</span>
        </styles.StMarkNameBlcok>
        <styles.StTextAreaBlock>
          <styles.StTextArea
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={contentHandler}
            disabled={disable}
          />
        </styles.StTextAreaBlock>
      </styles.StContentBlock>
    </styles.StContainer>
  );
};

export default VacationFormat;
