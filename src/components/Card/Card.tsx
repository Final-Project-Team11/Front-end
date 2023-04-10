import React from 'react';
import {
  StCardBlock,
  StDateBlock,
  StInfoBlock,
  StInfoSpan,
  StProfileBlock,
  StTeamNameH1,
} from './style';

const Card = () => {
  return (
    <StCardBlock>
      <StInfoBlock>
        <StTeamNameH1>TeamName</StTeamNameH1>
        <StDateBlock>
          <StInfoSpan>월급일 : D-29</StInfoSpan>
          <StInfoSpan>연차 : 20일</StInfoSpan>
        </StDateBlock>
      </StInfoBlock>
      <StProfileBlock />
    </StCardBlock>
  );
};

export default Card;
