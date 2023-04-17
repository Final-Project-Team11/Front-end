import React from 'react';
import Tag from '../../components/Tag';
import styled from 'styled-components';
import Feed from '../../components/Feed';
import UploadedFileTab from '../../components/UploadedFileTab';
import Card from '../../components/Card';
import Request from '../../components/RequestList/Request';
import VacationTab from '../../components/VacationTab/VacationTab';

const Manager = () => {
  return (
    <Frame>
      <Wrapper>
        <Header>
          <Card />
          <Calendar>캘린더영역</Calendar>
        </Header>
        <MainArea>
          <Feed />
          <MiddleArea>
            <Tag types="MainPage" />
            <VacationTab />
          </MiddleArea>
          <MiddleArea>
            <UploadedFileTab type="myfiles" icon="📕" />
            <UploadedFileTab type="meetingfiles" icon="📗" />
          </MiddleArea>
          <MiddleArea>
            <Request />
            <UploadedFileTab type="reportfiles" icon="📘" />
          </MiddleArea>
        </MainArea>
      </Wrapper>
    </Frame>
  );
};

const Frame = styled.div`
  width: 1920px;
  height: 1080px;

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  /* background-color: beige; */
  width: 1200px;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  /* background-color: #d5f09f; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 150px;

  padding: 15px;
  box-sizing: border-box;
`;

const Calendar = styled.div`
  background-color: aliceblue;
  width: 900px;
  height: 120px;
`;

const MainArea = styled.div`
  /* background-color: #ffeff2; */
  width: 100%;
  height: 100%;

  padding: 15px;
  box-sizing: border-box;

  display: flex;
  /* justify-content: space-between; */
  gap: 15px;
`;

const MiddleArea = styled.div`
  width: 260px;
  height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Manager;
