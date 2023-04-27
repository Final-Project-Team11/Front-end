import React, { RefObject } from 'react';
import * as UI from './style';

interface ComponentProps {
  children: React.ReactNode;
  icon: React.ReactElement | string;
  title: string;
  types?: 'MyPage' | 'ManagerPage';
  targetDiv: RefObject<HTMLDivElement>;
}

const Board = ({ children, icon, title, types, targetDiv }: ComponentProps) => {
  return (
    <UI.StTabBlock types={types}>
      <UI.StIconBlock>
        {/* 아이콘 */}
        {icon}
        <UI.StTitleSpan>{title}</UI.StTitleSpan>
      </UI.StIconBlock>
      <UI.StInsideBlock ref={targetDiv}>{children}</UI.StInsideBlock>
    </UI.StTabBlock>
  );
};

export default Board;
