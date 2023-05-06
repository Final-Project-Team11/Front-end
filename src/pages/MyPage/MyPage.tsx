import { useEffect } from 'react';
import Tag from '../../components/MyPage/Tag';
import Feed from '../../components/Feed';
import UploadedFileTab from '../../components/MyPage/UploadedFileTab';
import Card from '../../components/Card';
import MyRequest from '../../components/MyPage/MyRequest/MyRequest';
import * as UI from './styles';
import OneWeekCalendar from '../../components/OneWeekCalendar/OneWeekCalendar';
import VacationStatus from '../../components/MyPage/VacationStatus/VacationStatus';
import { useSetRecoilState } from 'recoil';
import { recoilTabState } from '../../states/recoilTabState';

const MyPage = () => {
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
