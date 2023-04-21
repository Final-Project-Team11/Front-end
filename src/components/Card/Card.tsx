import React from 'react';
import * as UI from './style';
import { GetCardInfo } from '../../api/hooks/Card/GetCardInfo';
import profileImg from '../../assets/images/profile-default.jpg';

interface CardProps {
  tab?: number;
}

const Card = ({ tab }: CardProps) => {
  const { userInfo, infoIsLoading } = GetCardInfo();

  if (infoIsLoading || !userInfo) {
    return <h1>...loading</h1>;
  }

  return (
    <UI.StCardBlock tab={tab}>
      <UI.StInfoBlock>
        <UI.StTeamNameH1>
          {userInfo.team} : {userInfo.userName}
        </UI.StTeamNameH1>
        <UI.StDateBlock>
          <UI.StInfoSpan>월급일 : D-{userInfo.salaryDay}</UI.StInfoSpan>
          <UI.StInfoSpan>남은연차 : {userInfo.remainDay}</UI.StInfoSpan>
        </UI.StDateBlock>
      </UI.StInfoBlock>
      <UI.StProfileImg>
        <img src={profileImg} alt="" />
      </UI.StProfileImg>
    </UI.StCardBlock>
  );
};

export default Card;
