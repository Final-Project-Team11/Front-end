import React, { useRef } from 'react';
import * as styles from './styles';

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
  tab: number;
}
function Detail(props: ScheduleProps) {
  const mutation = usePostschedule();
  const SaveClickHandler = () => {
    const newData = postFormat(props.tab, props);
    console.log(newData);
    mutation.mutate(newData);
  };

  const [author, autherHandler] = useInput();
  const [content, contentHandler] = useTextarea();

  return (
    <styles.StContainer ref={props.detailRef}>
      <styles.StTitleBlock>
        <styles.StTitleContentBlock>
          <styles.StMarkBlock />
          <styles.StPeriodBlock>
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
          </styles.StPeriodBlock>
          <div>
            <styles.StInput
              defaultValue={props.body?.split('/')[0]}
              placeholder="작성자를 입력해주세요"
              value={author}
              onChange={autherHandler}
            />
          </div>
          <div>
            <styles.StInput defaultValue={props.title} placeholder="제목 입력란" />
          </div>
        </styles.StTitleContentBlock>
        <styles.StButtonBlock>
          <Button
            color="black"
            size="Detail"
            borderRadius="5px"
            onClick={SaveClickHandler}
          >
            저장하기
          </Button>
        </styles.StButtonBlock>
      </styles.StTitleBlock>
      <styles.StContentBlock>
        <styles.StTextArea
          defaultValue={props.body?.split('/')[1]}
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={contentHandler}
        />
      </styles.StContentBlock>
      <styles.StMentionBlock>
        {props.mention?.map(item => item + '-')}
      </styles.StMentionBlock>
    </styles.StContainer>
  );
}

export default Detail;
