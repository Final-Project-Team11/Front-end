import React from 'react';
import {
  StBlock,
  TapButton,
  TapButtonWrapper,
  InputWrapper,
  TextWrapper,
  Tap,
} from './styles';
import MaxInput from '../../components/Inputs/Input/MaxInput';
import Button from '../../components/Button/Button';

enum Tabs {
  Tab1 = 'Tab1',
  Tab2 = 'Tab2',
}

const Tabconent1 = () => {
  return (
    <Tap>
      <InputWrapper>
        <MaxInput types="half" type="text">
          아이디
        </MaxInput>
        <MaxInput types="half" type="password">
          비밀번호
        </MaxInput>
      </InputWrapper>
      <div style={{ marginTop: '30px' }}>
        <Button size="example">로그인</Button>
      </div>
    </Tap>
  );
};

const Tabconent2 = () => {
  return (
    <Tap>
      <InputWrapper>
        <MaxInput types="half" type="text">
          대표자 아이디
        </MaxInput>
        <MaxInput types="half" type="text">
          아이디
        </MaxInput>
        <MaxInput types="half" type="password">
          비밀번호
        </MaxInput>
      </InputWrapper>
      <TextWrapper>
        <span>미어캣린더가 처음이면! 회원가입</span>
        <span>아이디 / 비밀번호 찾기</span>
      </TextWrapper>
      <Button size="example">로그인</Button>
    </Tap>
  );
};

const Login = () => {
  const [currentTab, setCurrentTab] = React.useState<Tabs>(Tabs.Tab1);
  const ClickTabHandler = (tab: Tabs) => {
    setCurrentTab(tab);
  };
  return (
    <StBlock>
      <TapButtonWrapper>
        <TapButton onClick={() => ClickTabHandler(Tabs.Tab1)}>대표 운영자</TapButton>
        <TapButton onClick={() => ClickTabHandler(Tabs.Tab2)}>팀원</TapButton>
      </TapButtonWrapper>
      {currentTab === Tabs.Tab1 && <Tabconent1 />}
      {currentTab === Tabs.Tab2 && <Tabconent2 />}
    </StBlock>
  );
};

export default Login;
