import React from 'react';
import ButtonInput from '../../components/Inputs/ButtonInput';
import HalfInput from '../../components/Inputs/HalfInput';
import ValidInput from '../../components/Inputs/ValidInput';
import MaxInput from '../../components/Inputs/MaxInput';

const MyPage = () => {
  return (
    <>
      <MaxInput types="maxInput">맥스</MaxInput>
      <HalfInput types="halfInput" Bgcolor="yellow" type="password">
        하프
      </HalfInput>
      <HalfInput types="halfInput" type="time">
        하프
      </HalfInput>
      <ButtonInput
        types="buttonInput"
        buttonTag="버튼"
        onClick={() => console.log('abdac')}
        placeholder={'adsfasd'}
        Bgcolor="yellow"
      >
        버튼
      </ButtonInput>
      <ValidInput
        types="validationInput"
        buttonTag="유효성"
        onClick={() => console.log('abdac')}
      >
        유효성
      </ValidInput>
    </>
  );
};

export default MyPage;
