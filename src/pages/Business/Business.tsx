import React from 'react';
import styled from 'styled-components';
import MaxInput from '../../components/Inputs/Input/MaxInput';
import ButtonInput from '../../components/Inputs/ButtonInput/ButtonInput';
import Dropdown from '../../components/Dropdown/Dropdown';
import { StButton } from '../../components/Button/styles';
import Modal from '../../components/Modal/Modal';

const Business = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const authority = ['관리자', '팀원'];
  const teams = ['개발팀', '경영팀', '광고팀'];

  const test = () => {
    console.log('test');
  };
  return (
    <MainWrapper>
      <ViewUser>
        <VuHeader>
          <Dropdown items={teams}>부서</Dropdown>
          <MaxInput types="max" type="search">
            검색
          </MaxInput>
        </VuHeader>
        <Vubody>
          <button onClick={() => setShowModal(true)}>유저 조회 영역</button>
          {showModal && (
            <Modal closeModal={closeModal}>
              <MaxInput types="max">이름</MaxInput>
              <Dropdown items={teams}>부서</Dropdown>
              <MaxInput types="max">직급</MaxInput>
              <MaxInput types="max">직무</MaxInput>
              <MaxInput types="max">아이디</MaxInput>
              <MaxInput types="max">입사일</MaxInput>
              <MaxInput types="max">월급일</MaxInput>
              <Dropdown items={authority}>권한</Dropdown>
              <StButton>수정</StButton>
              <StButton>삭제</StButton>
              <StButton onClick={closeModal}>닫기</StButton>
            </Modal>
          )}
        </Vubody>
      </ViewUser>
      <CreateUser>
        <h1>유저 생성</h1>
        <MaxInput types="max">이름</MaxInput>
        <MaxInput types="max">부서</MaxInput>
        <MaxInput types="max">직급</MaxInput>
        <MaxInput types="max">직무</MaxInput>
        <ButtonInput types="button" onClick={test} buttonTag="중복검사">
          아이디
        </ButtonInput>
        <MaxInput types="max" type="date">
          입사일
        </MaxInput>
        <MaxInput types="max" type="date">
          월급일
        </MaxInput>
        <Dropdown items={authority}>권한</Dropdown>
        <StButton>생성</StButton>
      </CreateUser>
    </MainWrapper>
  );
};

export default Business;

const MainWrapper = styled.div`
  width: 1200px;
  height: 800px;
  margin: auto;

  display: flex;
  flex-direction: row;

  border: 1px solid black;
  box-sizing: border-box;
`;

const ViewUser = styled.div`
  width: 600px;
  height: 100%;

  border: 1px solid red;
  box-sizing: border-box;
`;

const CreateUser = styled.form`
  width: 600px;
  height: 100%;

  border: 1px solid blue;
  box-sizing: border-box;
`;

const VuHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Vubody = styled.div`
  width: 500px;
  height: 600px;
  margin: 20px auto;
  padding: 20px;

  border: 1px solid black;
  box-sizing: border-box;
`;
