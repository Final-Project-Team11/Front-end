import React from 'react';
import Tag from '../../components/Tag';
import Feed from '../../components/Feed';
import UploadedFileTab from '../../components/UploadedFileTab';
import Card from '../../components/Card';
import Request from '../../components/RequestList/Request';
import VacationTab from '../../components/VacationTab/VacationTab';
import * as UI from '../MyPage/styles';
import VacationMeerkat from '../../assets/Meerkat/VacationMeerkat';
import WaitVacation from '../../assets/Meerkat/WaitVacation';
import WorkingMeerkat from '../../assets/Meerkat/WorkingMeerkat';
import OneWeekCalendar from '../../components/OneWeekCalendar/OneWeekCalendar';

const Manager = () => {
  return (
    <UI.Frame>
      <UI.Wrapper>
        <UI.Header>
          <Card />
          <OneWeekCalendar />
        </UI.Header>
        <UI.MainArea>
          <UI.FeedArea>
            <Feed />
            {/* <VacationMeerkat /> */}
            {/* <WaitVacation /> */}
            <WorkingMeerkat />
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
