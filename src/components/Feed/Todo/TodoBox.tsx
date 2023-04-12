import React, { useState } from 'react';
import { StTodoBlock, StTodoAreaBlock, StCircleBlock, StTestDeleteBlock } from './style';

import { TodoBoxProps } from './interfaces';
import { BsX } from 'react-icons/bs';

const TodoBox = ({ todo, isDone }: TodoBoxProps) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState<boolean>(false);

  return (
    <StTodoBlock
      onMouseEnter={() => setShowDeleteBtn(true)}
      onMouseLeave={() => setShowDeleteBtn(false)}
    >
      <StTodoAreaBlock>
        <StCircleBlock isDone={isDone} />
        {todo}
      </StTodoAreaBlock>
      {showDeleteBtn && (
        <StTestDeleteBlock>
          <BsX />
        </StTestDeleteBlock>
      )}
    </StTodoBlock>
  );
};

export default TodoBox;
