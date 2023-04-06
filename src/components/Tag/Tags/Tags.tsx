import React from 'react';
import {
  StAtSpan,
  StDateSpan,
  StFileSpan,
  StMentionerSapn,
  StScheduleSpan,
  StTagsBlock,
} from './style';
import { StDeviderBlock } from './style';

const Tags = () => {
  return (
    <StTagsBlock>
      <StAtSpan>@</StAtSpan>
      <StFileSpan>파일이름</StFileSpan>
      <StDeviderBlock />
      <StScheduleSpan>일정이름</StScheduleSpan>
      <StDateSpan>날짜/시간</StDateSpan>
      <StMentionerSapn>언급한사람</StMentionerSapn>
    </StTagsBlock>
  );
};

export default Tags;
