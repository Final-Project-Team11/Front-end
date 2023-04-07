import React from 'react';
import { StDeviderBlock, StTagBlock } from './style';
import Tags from './Tags/Tags';

const Tag = () => {
  return (
    <StTagBlock>
      👺
      <StDeviderBlock />
      <Tags title="아침회의" userName="류현주" isChecked={false}></Tags>
      <Tags title="아침회의" userName="류현주" isChecked={true}></Tags>
      <Tags title="점심회의" userName="박찬우" startDay="내일" startTime="오후2시"></Tags>
      <Tags title="회식" userName="민수현" file="결제요청서"></Tags>
      <Tags title="야근회의" userName="최다현" startDay="오늘" endDay="내일"></Tags>
    </StTagBlock>
  );
};

export default Tag;
