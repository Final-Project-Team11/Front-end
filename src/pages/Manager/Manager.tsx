import React from 'react';
import Tag from '../../components/Tag';
import Feed from '../../components/Feed';
import UploadedFileTab from '../../components/UploadedFileTab';
import Card from '../../components/Card';
import Request from '../../components/RequestList/Request';
import VacationTab from '../../components/VacationTab/VacationTab';
import * as UI from './styles';
import Board from '../../components/Board/Board';
import VacationMeerkat from '../../assets/Icons/VacationMeerkat';

const Manager = () => {
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
            <VacationMeerkat />
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
              <Request />
              <Board icon="💈" title="결재 요청">
                아직 준비중입니다.
              </Board>
            </UI.MiddleArea>
          </UI.TabArea>
        </UI.MainArea>
      </UI.Wrapper>
    </UI.Frame>
  );
};

export default Manager;
