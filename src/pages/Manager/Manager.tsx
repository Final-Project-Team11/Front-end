import React, { useEffect } from 'react';
import Tag from '../../components/MyPage/Tag';
import Feed from '../../components/Feed';
import UploadedFileTab from '../../components/MyPage/UploadedFileTab';
import Card from '../../components/Card';
import Request from '../../components/MyPage/RequestList/Request';
import VacationTab from '../../components/MyPage/VacationTab/VacationTab';
import * as UI from '../MyPage/styles';
import OneWeekCalendar from '../../components/OneWeekCalendar/OneWeekCalendar';
import VacationStatus from '../../components/MyPage/VacationStatus/VacationStatus';
import { useSetRecoilState } from 'recoil';
import { recoilTabState } from '../../states/recoilTabState';

const Manager = () => {
  const setTab = useSetRecoilState(recoilTabState);
  useEffect(() => {
    setTab(false);
  }, []);
  return (
    <UI.Frame>
      <UI.Wrapper>
        <UI.Header>
          <Card location="mypage" />
          <OneWeekCalendar />
        </UI.Header>
        <UI.MainArea>
          <UI.FeedArea>
            <Feed />
            <VacationStatus />
          </UI.FeedArea>
          <UI.TabArea>
            <UI.MiddleArea>
              <Tag types="ManagerPage" />
              <VacationTab />
            </UI.MiddleArea>
            <UI.MiddleArea>
              <UploadedFileTab type="reportfiles" />
              <UploadedFileTab type="meetingfiles" />
            </UI.MiddleArea>
            <UI.MiddleArea>
              <Request type="schedule" />
              <Request type="other" />
            </UI.MiddleArea>
          </UI.TabArea>
        </UI.MainArea>
      </UI.Wrapper>
    </UI.Frame>
  );
};

export default Manager;
