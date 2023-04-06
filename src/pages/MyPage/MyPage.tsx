import React from 'react';
import ColumnInput from '../../components/Inputs/Inputs';

const MyPage = () => {
  return (
    <>
      <ColumnInput types="maxInput">맥스</ColumnInput>
      <ColumnInput types="halfInput" Bgcolor="yellow" type="password">
        하프
      </ColumnInput>
      <ColumnInput types="halfInput">하프</ColumnInput>
      <ColumnInput
        types="buttonInput"
        buttonTag="버튼"
        onClick={() => console.log('abdac')}
        placeholder={'adsfasd'}
      >
        버튼
      </ColumnInput>
      <ColumnInput
        types="validationInput"
        buttonTag="유효성"
        onClick={() => console.log('abdac')}
      >
        유효성
      </ColumnInput>
    </>
  );
};

export default MyPage;
