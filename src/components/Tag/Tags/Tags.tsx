import React from 'react';
import * as interfaces from './interfaces';

import { StTagsBlock, StTagsSpan } from './style';
import { StDeviderBlock } from './style';

const Tags = ({
  eventId,
  file,
  title,
  startDay,
  endDay,
  startTime,
  userName,
  isChecked,
}: interfaces.TagsProps) => {
  return (
    <StTagsBlock>
      <StTagsSpan isChecked={isChecked}>@</StTagsSpan>

      {/* 파일 있을 때 파일명 */}
      {file && (
        <>
          <StTagsSpan isChecked={isChecked}>{file}</StTagsSpan>
          <StDeviderBlock />
        </>
      )}

      <StTagsSpan isChecked={isChecked}>{title}</StTagsSpan>

      {/* startTime 있을 시 하루짜리 일정 => startDay 만 언급 */}
      {startTime && (
        <>
          <StTagsSpan isChecked={isChecked}>{startDay}</StTagsSpan>
          <StTagsSpan isChecked={isChecked}>{startTime}</StTagsSpan>
        </>
      )}

      {/* startDay, endDay 모두 있을 때 */}
      {startDay && endDay && (
        <>
          <StTagsSpan isChecked={isChecked}>{startDay}</StTagsSpan>
          <StTagsSpan isChecked={isChecked}>~</StTagsSpan>
          <StTagsSpan isChecked={isChecked}>{endDay}</StTagsSpan>
        </>
      )}

      <StTagsSpan isChecked={isChecked}>{userName}</StTagsSpan>
    </StTagsBlock>
  );
};

export default Tags;
