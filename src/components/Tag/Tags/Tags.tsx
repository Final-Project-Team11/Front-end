import React from 'react';
import * as interfaces from './interfaces';

import {
  StAtSpan,
  StDaySpan,
  StFileSpan,
  StMentionerSapn,
  StScheduleSpan,
  StTagsBlock,
} from './style';
import { StDeviderBlock } from './style';

const Tags = ({
  eventId,
  file,
  title,
  startDay,
  endDay,
  startTime,
  userName,
}: interfaces.TagsProps) => {
  return (
    <StTagsBlock>
      <StAtSpan>@</StAtSpan>
      {file && (
        <>
          <StFileSpan>{file}</StFileSpan>
          <StDeviderBlock />
        </>
      )}
      <StScheduleSpan>{title}</StScheduleSpan>

      {/* startTime 있을 시 하루짜리 일정 => startDay 만 언급 */}
      {startTime && (
        <>
          <StDaySpan>{startDay}</StDaySpan>
          <StDaySpan>{startTime}</StDaySpan>
        </>
      )}

      <StDaySpan>날짜/시간</StDaySpan>
      <StMentionerSapn>{userName}</StMentionerSapn>
    </StTagsBlock>
  );
};

export default Tags;
