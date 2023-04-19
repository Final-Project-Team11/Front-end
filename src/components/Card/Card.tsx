import React from 'react';
import {
  StCardBlock,
  StDateBlock,
  StInfoBlock,
  StInfoSpan,
  StProfileBlock,
  StTeamNameH1,
} from './style';
import { GetCardInfo } from '../../api/hooks/Card/GetCardInfo';

const Card = () => {
  const { userInfo, infoIsLoading } = GetCardInfo();

  if (infoIsLoading || !userInfo) {
    return <h1>...loading</h1>;
  }

  return (
    <StCardBlock>
      <StInfoBlock>
        <StTeamNameH1>팀이름 : {userInfo.userName}</StTeamNameH1>
        <StDateBlock>
          <StInfoSpan>월급일 : D-{userInfo.salaryDay}</StInfoSpan>
          <StInfoSpan>남은연차 : {userInfo.remainDay}일</StInfoSpan>
        </StDateBlock>
      </StInfoBlock>
      <StProfileBlock />
    </StCardBlock>
  );
};

export default Card;
