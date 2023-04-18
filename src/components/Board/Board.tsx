import React from 'react';
import * as UI from './style';

interface ComponentProps {
  children: React.ReactNode;
  icon: React.ReactElement;
  title: string;
}

const Board = ({ children, icon, title }: ComponentProps) => {
  return (
    <UI.StTabBlock>
      <UI.StIconBlock>
        {/* 아이콘 */}
        {icon}
        <UI.StTitleSpan>{title}</UI.StTitleSpan>
      </UI.StIconBlock>
      <UI.StDivederHr />
      {children}
    </UI.StTabBlock>
  );
};

export default Board;
