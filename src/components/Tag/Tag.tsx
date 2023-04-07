import React from 'react';
import { StDeviderBlock, StTagBlock } from './style';
import Tags from './Tags/Tags';

const Tag = () => {
  return (
    <StTagBlock>
      👺
      <StDeviderBlock />
      <Tags title="아침회의" userName="류현주"></Tags>
      <Tags title="점심회의" userName="박찬우"></Tags>
      <Tags title="회식" userName="민수현" file="결제요청서"></Tags>
      <Tags title="야근회의" userName="최다현"></Tags>
    </StTagBlock>
  );
};

export default Tag;
