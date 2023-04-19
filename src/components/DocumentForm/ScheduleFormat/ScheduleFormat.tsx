import React, { useEffect, useRef, useState } from 'react';
import { postFormat } from '../../../pages/SubMain/utils';
import usePostschedule from '../../../api/hooks/Main/usePostschedule';
import * as styles from '../commonStyles';
import useInput from '../../../hooks/common/useInput';
import useTextarea from '../../../hooks/common/useTextarea';
import Button from '../../Button/Button';
import { MdFolder } from 'react-icons/md';
import { AiFillTag } from 'react-icons/ai';
import Period from '../components/Period/Period';
import { getCookie } from '../../../auth/CookieUtils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import AddTodo from '../../Feed/Todo/AddTodo';
import useGetTeamInfo from '../../../api/hooks/Main/useGetTeamInfo';
import HashTag from '../../HashTag/HashTag';
import { RiArrowLeftSLine } from 'react-icons/ri';
import FileUpload from '../../FileUpload/FileUpload';

const ScheduleFormat = ({ props, onReturnHandler }: ScheduleProps) => {
  const mutation = usePostschedule();
  const SaveClickHandler = () => {
    if (disable === false) {
      const newProps = { ...props, file: FormFiles, ref: mention };
      const newData = postFormat(props.tab, props);
      mutation.mutate(newData);
    } else if (disable === true) {
      //decode한 정보에서 userId와 앞으로 받을 userId 비교해서 수정기능 되게 하기
    }

    setDisable(!disable);
  };

  const { data, isLoading } = useGetTeamInfo();
  const [FormFiles, SetFormFile] = useState<File>();

  const token = getCookie('token');
  const decoded = token && jwtDecode<JwtPayload>(token);
  const userId = decoded ? decoded.userId : '';

  const [disable, setDisable] = useState(false);
  const [author, autherHandler, setAuthorInputValue] = useInput();
  const [title, titleHandler, setTitleHanlderValue] = useInput();
  const [mention, mentionHandler] = useState<string[]>();
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
          {userId === props.userId && (
            <Button
              color="black"
              size="Detail"
              borderRadius="5px"
              onClick={SaveClickHandler}
            >
              {disable === false ? '등록하기' : '수정하기'}
            </Button>
          )}
          <styles.StReturnBlcok onClick={() => onReturnHandler && onReturnHandler(false)}>
            <RiArrowLeftSLine size="20px" />
          </styles.StReturnBlcok>
        </styles.StButtonBlock>
      </styles.StTitleBlock>
      <styles.StContentBlock>
        <styles.StMarkNameBlcok>
          {props.eventType !== 'Reports' ? (
            <>
              <styles.StMarkBlock backgroundColor={props.backgroundColor} />
              <span>{props.eventType}</span>
            </>
          ) : null}
        </styles.StMarkNameBlcok>
        <styles.StTextAreaBlock>
          <styles.StTextArea
            defaultValue={props.body}
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={contentHandler}
            disabled={disable}
          />
        </styles.StTextAreaBlock>
        <styles.StFileBlock>
          <FileUpload onFileHandler={SetFormFile} />
        </styles.StFileBlock>
      </styles.StContentBlock>

      <styles.StMentionBlock>
        <HashTag
          mention={props.mention}
          disable={disable}
          mentionHandler={mentionHandler}
        />
      </styles.StMentionBlock>
    </styles.StContainer>
  );
};

export default ScheduleFormat;
