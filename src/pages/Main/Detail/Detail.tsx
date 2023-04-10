import React from 'react';
import { StContainer, StTitleBlock, StContentBlock, StMentionBlock } from './styles';

interface DetailProps {
  children?: React.ReactNode;
}

function Detail(props: DetailProps) {
  return (
    <StContainer>
      <StTitleBlock>
        <div>2023/04/08</div>
        <div>찬우</div>
        <div>디자인 회의</div>
      </StTitleBlock>
      <StContentBlock>asdasasdsa</StContentBlock>
      <StMentionBlock>멘션들</StMentionBlock>
    </StContainer>
  );
}

export default Detail;
