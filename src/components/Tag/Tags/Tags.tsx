import React from 'react';
import * as interfaces from './interfaces';

import { StTagsBlock, StTagsSpan } from './style';

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
    <StTagsBlock isChecked={isChecked}>
      <StTagsSpan>@</StTagsSpan>

      {/* 파일 있을 때 파일명 */}
      {file && (
        <>
          <StTagsSpan>{`${file} |`}</StTagsSpan>
        </>
      )}

      <StTagsSpan>{title}</StTagsSpan>

      {/* startTime 있을 시 하루짜리 일정 => startDay 만 언급 */}
      {startTime && <StTagsSpan>{`${startDay} ${startTime}`}</StTagsSpan>}

      {/* startDay, endDay 모두 있을 때 */}
      {startDay && endDay && <StTagsSpan>{`${startDay} ~ ${endDay}`}</StTagsSpan>}

      <StTagsSpan>{userName}</StTagsSpan>
    </StTagsBlock>
  );
};

export default Tags;
