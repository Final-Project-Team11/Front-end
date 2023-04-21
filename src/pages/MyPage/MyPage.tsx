import React from 'react';
import Tag from '../../components/Tag';
import Feed from '../../components/Feed';
import UploadedFileTab from '../../components/UploadedFileTab';
import Card from '../../components/Card';
import MyRequest from '../../components/MyRequest/MyRequest';
import * as UI from './styles';
import WorkingMeerkat from '../../assets/Meerkat/WorkingMeerkat';

const MyPage = () => {
  return (
    <UI.Frame>
      <UI.Wrapper>
        <UI.Header>
          <Card />
          <UI.Calendar>캘린더영역</UI.Calendar>
        </UI.Header>
        <UI.MainArea>
          <UI.FeedArea>
            <Feed />
            {/* <VacationMeerkat /> */}
            {/* <WaitVacation /> */}
            <WorkingMeerkat />
          </UI.FeedArea>
          <UI.TabArea>
            <Tag types="MyPage" />
            <UI.MiddleArea>
              <UploadedFileTab type="reportfiles" />
              <UploadedFileTab type="meetingfiles" />
            </UI.MiddleArea>
            <UI.MiddleArea>
              <MyRequest />
              <UploadedFileTab type="myfiles" />
            </UI.MiddleArea>
          </UI.TabArea>
        </UI.MainArea>
      </UI.Wrapper>
    </UI.Frame>
  );
};

export default MyPage;
