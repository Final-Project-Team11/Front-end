import React, { RefObject } from 'react';
import * as UI from './style';

interface ComponentProps {
  children: React.ReactNode;
  icon: React.ReactElement | string;
  title: string;
  types?: 'MyPage' | 'ManagerPage';
  targetDiv: RefObject<HTMLDivElement>;
}
// props
// title, icon : Board 상단에 들어갈 타이틀, 아이콘
// targetDiv : useRef 객체로 무한스크롤 적용할 div를 타겟할 변수
// types : mypage일 때 tag 컴포넌트를 길게 만들어주기 위한 css props

const Board = ({ children, icon, title, types, targetDiv }: ComponentProps) => {
  return (
    <UI.StTabBlock types={types}>
      <UI.StTitleIconBlock>
        {icon}
        <UI.StTitleSpan>{title}</UI.StTitleSpan>
      </UI.StTitleIconBlock>
      <UI.StInsideBlock ref={targetDiv}>{children}</UI.StInsideBlock>
    </UI.StTabBlock>
  );
};

export default Board;
