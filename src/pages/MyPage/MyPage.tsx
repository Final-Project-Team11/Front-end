import React from 'react';
import ButtonInput from '../../components/Inputs/ButtonInput';
import MaxInput from '../../components/Inputs/Input/MaxInput';
import useInput from '../../hooks/common/useInput';

const MyPage = () => {
  const [number1, number1Handler] = useInput();
  const [number2, number2Handler] = useInput();
  return (
    <>
      <MaxInput types="max" value={number1} onChange={number1Handler}>
        맥스
      </MaxInput>
      <MaxInput types="half" value={number2} onChange={number2Handler}>
        맥스
      </MaxInput>
      <ButtonInput
        types="button"
        buttonTag="버튼123"
        onClick={() => console.log('abdac')}
        placeholder={'adsfasd'}
        Bgcolor="yellow"
      >
        버튼1
      </ButtonInput>
    </>
  );
};

export default MyPage;
