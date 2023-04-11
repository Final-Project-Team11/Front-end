import React, { useRef } from 'react';
import { StContainer, StTitleBlock, StContentBlock, StMentionBlock } from './styles';

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
}
function Detail(props: ScheduleProps) {
  return (
    <StContainer ref={props.detailRef}>
      <StTitleBlock>
        <div>
          <span>{props.startDay?.getFullYear()}/</span>
          <span>{props.startDay && props.startDay?.getMonth() + 1}/</span>
          <span>{props.startDay?.getDate()}</span>
        </div>
        <div>
          <span>{props.body?.split('/')[0]}</span>
        </div>
        <div>
          <span>{props.title}</span>
        </div>
      </StTitleBlock>
      <StContentBlock>{props.body?.split('/')[1]}</StContentBlock>
      <StMentionBlock>{props.mention?.map(item => item + '-')}</StMentionBlock>
    </StContainer>
  );
}

export default Detail;
