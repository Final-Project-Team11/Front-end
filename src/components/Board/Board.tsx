import React from 'react';
import * as UI from './style';

interface ComponentProps {
  children: React.ReactNode;
  icon: React.ReactElement | string;
  title: string;
  types?: 'MyPage' | 'ManagerPage';
}

const Board = ({ children, icon, title, types }: ComponentProps) => {
  return (
    <UI.StTabBlock types={types}>
      <UI.StIconBlock>
        {/* 아이콘 */}
        {icon}
        <UI.StTitleSpan>{title}</UI.StTitleSpan>
      </UI.StIconBlock>
      {children}
    </UI.StTabBlock>
  );
};

export default Board;
