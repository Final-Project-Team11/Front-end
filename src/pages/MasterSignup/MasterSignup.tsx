import React from 'react';
import { InputWrapper, StBlock } from './styles';
import MaxInput from '../../components/Inputs/Input/MaxInput';
import ButtonInput from '../../components/Inputs/ButtonInput';
import Button from '../../components/Button/Button';

const MasterSignup = () => {
  const test = () => {
    console.log('테스트');
  };
  return (
    <StBlock>
      <h1 style={{ fontSize: '20px', marginTop: '30px', fontWeight: 'bold' }}>
        사업자 등록
      </h1>
      <InputWrapper>
        <MaxInput types="max" type="text">
          상호명
        </MaxInput>
        <ButtonInput types="button" onClick={test} buttonTag="api호출">
          사업자 등록번호
        </ButtonInput>
        <ButtonInput types="button" onClick={test} buttonTag="api호출">
          주소
        </ButtonInput>
        <MaxInput types="max" type="text">
          상세주소
        </MaxInput>
        <MaxInput types="max" type="text">
          대표자명
        </MaxInput>
        <MaxInput types="max" type="text">
          대표자 연락처
        </MaxInput>
        <ButtonInput types="button" onClick={test} buttonTag="중복확인">
          아이디
        </ButtonInput>
        <MaxInput types="max" type="password">
          비밀번호
        </MaxInput>
        <MaxInput types="max" type="password">
          비밀번호 확인
        </MaxInput>
      </InputWrapper>
      <div style={{ marginTop: '30px' }}>
        <Button size="example">가입하기</Button>
      </div>
    </StBlock>
  );
};

export default MasterSignup;
