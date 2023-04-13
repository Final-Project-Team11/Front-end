import React, { useRef } from 'react';
import {
  StContainer,
  StTitleBlock,
  StContentBlock,
  StMentionBlock,
  StTitleContentBlock,
} from './styles';
import styled from 'styled-components';
import { COLOR } from '../../../constants/colors';
import Button from '../../../components/Button/Button';
import instnace from '../../../axios/api';
import useInput from '../../../hooks/common/useInput';
import useTextarea from '../../../hooks/common/useTextarea';
import usePostschedule from '../../../api/hooks/usePostschedule';
import { postFormat } from '../utils';

interface ScheduleProps {
  eventId?: number;
  eventType?: string;
  title?: string;
  username?: string;
  startDay?: Date;
  endDay?: Date;
  body?: string;
  mention?: string[];
  detailRef?: any;
  instance?: any;
  tab: number;
}
function Detail(props: ScheduleProps) {
  const mutation = usePostschedule();
  const SaveClickHandler = () => {
    const newData = postFormat(props.tab, props);
    mutation.mutate(newData);
  };

  const [author, autherHandler] = useInput();
  const [content, contentHandler] = useTextarea();

  return (
    <StContainer ref={props.detailRef}>
      <StTitleBlock>
        <StTitleContentBlock>
          <StMarkBlock />
          <StPeriodBlock>
            <span>{props.startDay?.getFullYear().toString().slice(2, 4)}</span>
            <span>/</span>
            <span>{props.startDay && props.startDay?.getMonth() + 1}</span>
            <span>/</span>
            <span>{props.startDay?.getDate()}</span>
            {Number(props.endDay?.getDate()) - Number(props.startDay?.getDate()) > 1 && (
              <>
                <span>~</span>
                <span>{props.endDay?.getFullYear().toString().slice(2, 4)}</span>
                <span>/</span>
                <span>{props.endDay && props.endDay?.getMonth() + 1}</span>
                <span>/</span>
                <span>{props.endDay?.getDate()}</span>
              </>
            )}
          </StPeriodBlock>
          <div>
            <StInput
              defaultValue={props.body?.split('/')[0]}
              placeholder="작성자를 입력해주세요"
              value={author}
              onChange={autherHandler}
            />
          </div>
          <div>
            <StInput defaultValue={props.title} placeholder="제목 입력란" />
          </div>
        </StTitleContentBlock>
        <StButtonBlock>
          <Button
            color="black"
            size="Detail"
            borderRadius="5px"
            onClick={SaveClickHandler}
          >
            저장하기
          </Button>
        </StButtonBlock>
      </StTitleBlock>
      <StContentBlock>
        <StTextArea
          defaultValue={props.body?.split('/')[1]}
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={contentHandler}
        />
      </StContentBlock>
      <StMentionBlock>{props.mention?.map(item => item + '-')}</StMentionBlock>
    </StContainer>
  );
}

export default Detail;

const StButtonBlock = styled.div``;

const StTextArea = styled.textarea`
  width: 100%;
  border: none;
  height: 100%;
  outline: none;
  font-size: 20px;
  resize: none;
`;

const StInput = styled.input`
  border: none;
  font-size: 20px;

  outline: none;
`;

const StMarkBlock = styled.div`
  width: 13px;
  height: 30px;
  background-color: ${COLOR.SCHEDULE_RED};
  border-radius: 10px;
  margin-left: 10px;
`;

const StPeriodBlock = styled.div`
  display: flex;
  gap: 3px;
  font-weight: bold;
`;
