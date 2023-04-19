import React from 'react';
import Tag from '../../components/Tag';
import Feed from '../../components/Feed';
import UploadedFileTab from '../../components/UploadedFileTab';
import Card from '../../components/Card';
import MyRequest from '../../components/MyRequest/MyRequest';
import * as UI from './styles';

const MyPage = () => {
  return (
    <UI.Frame>
      <UI.Wrapper>
        <UI.Header>
          <Card />
          <UI.Calendar>캘린더영역</UI.Calendar>
        </UI.Header>
        <UI.MainArea>
          <Feed />
          <UI.TabArea>
            <Tag types="MyPage" />
            <UI.MiddleArea>
              <UploadedFileTab type="myfiles" icon="📕" />
              <UploadedFileTab type="meetingfiles" icon="📗" />
            </UI.MiddleArea>
            <UI.MiddleArea>
              <MyRequest />
              <UploadedFileTab type="reportfiles" icon="📘" />
            </UI.MiddleArea>
          </UI.TabArea>
        </UI.MainArea>
      </UI.Wrapper>
    </UI.Frame>
  );
};

export default MyPage;
